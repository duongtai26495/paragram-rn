import { Dimensions, View, Text, TextInput, SafeAreaView, ScrollView, Image, StatusBar, TouchableOpacity, Animated, Easing } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import authentication_style from '../assets/styles/authentication_style'
import ImagesPath from '../constants/ImagesPath'
import ConstantsString from '../constants/ConstantsString'
import Colors from '../assets/colors/Colors'
import IconsPath from '../constants/IconsPath'
import Storage from "../constants/Storage"
import CustomIndicator from '../components/CustomIndicator'
import { LoginWithUsernamePassword, IsExistToken } from '../functions/AuthenticationFunctions'
import { StackActions } from '@react-navigation/native'
import NavigationPath from '../constants/NavigationPath'
import AsyncStorage from "@react-native-async-storage/async-storage"
import RollLogo from '../components/RollLogo'
import CustomStatusBar from '../components/CustomStatusBar'
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const SignIn = ({ navigation, route }) => {

    useEffect(()=>{
        msg()
    },[])

    const msg = () => {
      if(route.params != null){
        console.log(route.params.msg)
      }
    }
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [isLoading, setLoading] = useState(false)
    const passwordRef = useRef()
    const submitRef = useRef()

    const SignIn = async () => {
        setLoading(true)
        await LoginWithUsernamePassword(username, password)
            .then(response => {
                AsyncStorage.setItem(Storage.LOCAL_ACCESS_TOKEN, response.access_token)
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

    const SignUp = () =>{
        navigation.dispatch(StackActions.replace(NavigationPath.SIGNUP));
    }

    return (
        <View style={[authentication_style.container_authen, { backgroundColor: Colors.WHITE }]}>
            <SafeAreaView>
                <CustomStatusBar barStyle={ConstantsString.DARK} />
                <ScrollView>
                    {isLoading ? <CustomIndicator /> : null}
                    <RollLogo />
                    <View>
                        <Text style={authentication_style.welcome_label}>{ConstantsString.LOGIN}</Text>
                        <View style={authentication_style.form_authen}>
                            <Image source={IconsPath.AUTHEN_USERNAME} style={authentication_style.icon_input} />
                            <TextInput
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
                                <Text style={{ color: Colors.PRIMARY, fontWeight:'bold' }}>{ConstantsString.SIGNUP}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>

            </SafeAreaView>
        </View>
    )
}

export default SignIn