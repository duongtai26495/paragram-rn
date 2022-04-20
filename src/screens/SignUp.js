import { Dimensions, View, Text, TextInput, SafeAreaView, ScrollView, Image, StatusBar, TouchableOpacity, Animated, Easing } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import authentication_style from '../assets/styles/authentication_style'
import ImagesPath from '../constants/ImagesPath'
import ConstantsString from '../constants/ConstantsString'
import Colors from '../assets/colors/Colors'
import IconsPath from '../constants/IconsPath'
import Storage from "../constants/Storage"
import CustomIndicator from '../components/CustomIndicator'
import { LoginWithUsernamePassword, IsExistToken, RegisterWithUsernamePassword } from '../functions/AuthenticationFunctions'
import { StackActions } from '@react-navigation/native'
import NavigationPath from '../constants/NavigationPath'
import AsyncStorage from "@react-native-async-storage/async-storage"
import RollLogo from '../components/RollLogo'
import CustomStatusBar from '../components/CustomStatusBar'
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const SignUp = ({ navigation, route }) => {

    const [fullname, setFullname] = useState()
    const [email, setEmail] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [isLoading, setLoading] = useState(false)
    const [msg, setMsg] = useState()
    const usernameRef = useRef()
    const passwordRef = useRef()
    const submitRef = useRef()
    const cPasswordRef = useRef()
    const emailRef = useRef()

    const Register = async () => {
        let User = {
            'full_name': fullname,
            'email': email,
            'username': username,
            'password': password
        }
        setLoading(true)
        await RegisterWithUsernamePassword(User)
            .then(response => {
                const data = response.result;
                const msg = response.msg;

                AsyncStorage.multiSet([
                    [Storage.FULLNAME_STORAGE, data.full_name],
                    [Storage.USERNAME_STORAGE, data.username],
                    [Storage.EMAIL_STORAGE, data.email]],
                    () => {
                        setLoading(false)
                        navigation.dispatch(StackActions.replace(NavigationPath.SIGNIN, { msg: msg }))
                    })
            }).catch(error => {
                setLoading(false)
                console.log(error)
            })
    }

    const SignIn = () => {
        navigation.dispatch(StackActions.replace(NavigationPath.SIGNIN));
    }

    return (
        <View style={[authentication_style.container_authen, { backgroundColor: Colors.WHITE }]}>
            <SafeAreaView>
                <CustomStatusBar barStyle={ConstantsString.DARK}  navigation={navigation} />
                <ScrollView>
                    {isLoading ? <CustomIndicator /> : null}
                    <RollLogo />
                    <View>
                        <Text style={authentication_style.welcome_label}>{ConstantsString.CREACC}</Text>
                        <View style={authentication_style.form_authen}>
                            <Image source={IconsPath.FULLNAME} style={authentication_style.icon_input} />
                            <TextInput
                                returnKeyType='next'
                                autoCapitalize='words'
                                onSubmitEditing={() => emailRef.current.focus()}
                                onChangeText={(value) => setFullname(value)}
                                style={authentication_style.input_authen}
                                placeholder={ConstantsString.FULLNAME}
                                placeholderTextColor={Colors.SMOKE} />
                        </View>
                        <View style={authentication_style.form_authen}>
                            <Image source={IconsPath.EMAIL} style={authentication_style.icon_input} />
                            <TextInput
                                ref={emailRef}
                                keyboardType='email-address'
                                returnKeyType='next'
                                autoCapitalize='none'
                                onSubmitEditing={() => usernameRef.current.focus()}
                                onChangeText={(value) => setEmail(value)}
                                style={authentication_style.input_authen}
                                placeholder={ConstantsString.EMAIL}
                                placeholderTextColor={Colors.SMOKE} />
                        </View>
                        <View style={authentication_style.form_authen}>
                            <Image source={IconsPath.AUTHEN_USERNAME} style={authentication_style.icon_input} />
                            <TextInput
                                ref={usernameRef}
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
                            onPress={() => { Register() }}
                            style={[authentication_style.authen_btn, { backgroundColor: Colors.BLACK }]}>
                            <Text style={[authentication_style.authen_btn_label, { color: Colors.WHITE }]}>
                                {ConstantsString.SIGNUP}
                            </Text>
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 15 }}>
                            <Text style={{ color: Colors.DARK }}>{ConstantsString.HAVEACC}</Text>
                            <TouchableOpacity
                                onPress={() => { SignIn() }}>
                                <Text style={{ color: Colors.PRIMARY, fontWeight: 'bold' }}>{ConstantsString.SIGNINOW}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>

            </SafeAreaView>
        </View>
    )
}

export default SignUp