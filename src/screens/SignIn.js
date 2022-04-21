import { Dimensions, View, Text, TextInput, SafeAreaView, ScrollView, Image, Switch, StatusBar, TouchableOpacity, Animated, Easing } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import authentication_style from '../assets/styles/authentication_style'
import ImagesPath from '../constants/ImagesPath'
import ConstantsString from '../constants/ConstantsString'
import Colors from '../assets/colors/Colors'
import IconsPath from '../constants/IconsPath'
import Storage from "../constants/Storage"
import CustomIndicator from '../components/CustomIndicator'
import { LoginWithUsernamePassword, IsExistToken, saveUserStorage } from '../functions/AuthenticationFunctions'
import { StackActions } from '@react-navigation/native'
import NavigationPath from '../constants/NavigationPath'
import AsyncStorage from "@react-native-async-storage/async-storage"
import RollLogo from '../components/RollLogo'
import CustomStatusBar from '../components/CustomStatusBar'
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const SignIn = ({ navigation, route }) => {

    useEffect(() => {
        getRemember()
        msg()
    }, [])

    const msg = () => {
        if (route.params != null) {
            console.log(route.params.msg)
        }
    }

    const getRemember = async () => {
        let isSave = await AsyncStorage.getItem(Storage.ISREMEMBER);
        if (isSave === 'true') {
            setUsername(await AsyncStorage.getItem(Storage.USERNAME_REMEMBER))
            setPassword(await AsyncStorage.getItem(Storage.PASSWORD_REMEMBER))
            setSave(true)
        }
    }


    const [isSave, setSave] = useState(false)
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [isLoading, setLoading] = useState(false)
    const passwordRef = useRef()
    const submitRef = useRef()

    const toggleSave = () => setSave(previousState => !previousState)

    const SignIn = async () => {
        setLoading(true)
        if (isSave) {
            let items = [
                [Storage.USERNAME_REMEMBER, username],
                [Storage.PASSWORD_REMEMBER, password],
                [Storage.ISREMEMBER, 'true']
            ]
            AsyncStorage.multiSet(items, () => {
                console.log("Remember user")
            })
        }else{
            let items = [
                Storage.USERNAME_REMEMBER,
                Storage.PASSWORD_REMEMBER,
                Storage.ISREMEMBER
            ]
            AsyncStorage.multiRemove(items, () => {
                console.log("Removed user")
            })
        }
        await LoginWithUsernamePassword(username, password)
            .then(response => {
                AsyncStorage.setItem(Storage.LOCAL_ACCESS_TOKEN, response.access_token)
                saveUserStorage(username)
            })
            .then(() => {
                console.log("Login Success")
                setLoading(false)
                navigation.dispatch(StackActions.replace(NavigationPath.MAINTAB));
            })
            .catch(error => {
                console.log("Login Error: ", error)
                setLoading(false)
            })
    }

    const SignUp = () => {
        navigation.dispatch(StackActions.replace(NavigationPath.SIGNUP));
    }

    return (
        <View style={[authentication_style.container_authen, { backgroundColor: Colors.WHITE }]}>
            <SafeAreaView>
                <CustomStatusBar barStyle={ConstantsString.DARK} navigation={navigation} />
                <ScrollView>
                    {isLoading ? <CustomIndicator /> : null}
                    <RollLogo />
                    <View>
                        <Text style={authentication_style.welcome_label}>{ConstantsString.LOGIN}</Text>
                        <View style={authentication_style.form_authen}>
                            <Image source={IconsPath.AUTHEN_USERNAME} style={authentication_style.icon_input} />
                            <TextInput
                                value={username}
                                returnKeyType='next'
                                autoCapitalize='none'
                                onSubmitEditing={() => passwordRef.current.focus()}
                                onChangeText={(value) => setUsername(value)}
                                style={authentication_style.input_authen}
                                placeholder={ConstantsString.USERNAME}
                                placeholderTextColor={Colors.SMOKE} />
                        </View>
                        <View style={authentication_style.form_authen}>
                            <Image source={IconsPath.AUTHEN_PASSWORD} style={authentication_style.icon_input} />
                            <TextInput
                                value={password}
                                autoCapitalize='none'
                                ref={passwordRef}
                                onChangeText={(value) => setPassword(value)}
                                secureTextEntry={true}
                                style={authentication_style.input_authen}
                                placeholder={ConstantsString.PASSWORD}
                                placeholderTextColor={Colors.SMOKE} />
                        </View>
                        <TouchableOpacity
                            ref={submitRef}
                            onPress={() => { SignIn() }}
                            style={[authentication_style.authen_btn, { backgroundColor: Colors.BLACK }]}>
                            <Text style={[authentication_style.authen_btn_label, { color: Colors.WHITE }]}>
                                {ConstantsString.SIGNIN}
                            </Text>
                        </TouchableOpacity>
                        <View style={authentication_style.view_switch}>
                            <Text style={{ color: Colors.SECONDARY, marginRight: 10, }}>{ConstantsString.REMEMBERME}</Text>
                            <Switch
                                trackColor={{ false: Colors.DARK, true: Colors.DARK }}
                                thumbColor={isSave ? Colors.PRIMARY : Colors.LIGHT}
                                ios_backgroundColor={Colors.WHITE}
                                onValueChange={toggleSave}
                                value={isSave} />
                        </View>

                        <TouchableOpacity>
                            <Text style={{ color: Colors.PRIMARY, alignSelf: 'center', marginVertical: 20, fontSize: 15, }}>{ConstantsString.FORGOT}</Text>
                        </TouchableOpacity>
                        <Text style={{ color: Colors.DARK, alignSelf: 'center', marginVertical: 5 }}>- {ConstantsString.ORSIGNWITH} -</Text>
                        <View style={authentication_style.social_view}>
                            <TouchableOpacity style={authentication_style.icon_sc_touch}>
                                <Image source={IconsPath.FACEBOOK} style={authentication_style.icon_sc} />
                            </TouchableOpacity>
                            <TouchableOpacity style={authentication_style.icon_sc_touch}>
                                <Image source={IconsPath.GOOGLE} style={authentication_style.icon_sc} />
                            </TouchableOpacity>
                            <TouchableOpacity style={authentication_style.icon_sc_touch}>
                                <Image source={IconsPath.TWITTER} style={authentication_style.icon_sc} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 15 }}>
                            <Text style={{ color: Colors.DARK }}>{ConstantsString.DONTACC}</Text>
                            <TouchableOpacity
                                onPress={() => { SignUp() }}>
                                <Text style={{ color: Colors.PRIMARY, fontWeight: 'bold' }}>{ConstantsString.SIGNUP}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>

            </SafeAreaView>
        </View>
    )
}

export default SignIn