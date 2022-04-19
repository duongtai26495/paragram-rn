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
const SignUp = ({ navigation, route }) => {

    useEffect(() => {
        wlcEff()
    }, [])

    const pwRef = useRef()
    const fade = useRef(new Animated.Value(0)).current;
    const slide = useRef(new Animated.Value(-width / 3)).current;
    const scale = useRef(new Animated.Value(50)).current;
    const scaleUp = useRef(new Animated.Value(1)).current;
    const [isLoading, setLoading] = useState(false);
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [fullname, setFullname] = useState()
    const [email, setEmail] = useState()

    const wlcEff = () => {
        Animated.sequence([
            Animated.timing(fade, { toValue: 1, duration: 300, useNativeDriver: true }),
            Animated.timing(slide, { toValue: 1, duration: 1500, useNativeDriver: true, easing: Easing.exp }),

        ]).start()
    }

    const toSignIn = () => {
        navigation.dispatch(StackActions.replace(NavigationPath.SIGNIN))
    }

    const SignUp = async () => {
        let user = {
            'full_name':fullname,
            'username':username,
            'email':email,
            'password':password
        }
        if (user != null) {
            setLoading(true)
            let token = await SignInWithUsername(user)
            await AsyncStorage.setItem(Storage.LOCAL_ACCESS_TOKEN, token.access_token)
                .then(() => {
                    navigation.dispatch(StackActions.replace(NavigationPath.HOMEPAGE))
                })
                .catch(error => {
                    console.log(error)
                    setLoading(false)
                })

        } else {
            setLoading(false)
        }
    }

    return (
        <SafeAreaView style={authentication_style.container}>
            <CustomStatusBar barStyle={ConstantsString.DARK} />
            {isLoading ? <CustomIndicator /> : null}
            <Image
                blurRadius={10}
                source={ImagesPath.BG_DEFAULT[1]}
                style={authentication_style.bg_signin} />
            <View style={[authentication_style.signInView,{marginTop:20}]}>
                <ScrollView>
                    <Animated.View style={[{ opacity: fade }]}>
                        <RollLogo />
                        <View style={authentication_style.form_input}>
                            <Image source={IconsPath.FULLNAME} style={authentication_style.iconInput} />
                            <TextInput
                                returnKeyType='next'
                                autoCapitalize='none'
                                onChangeText={(value) => setFullname(value)}
                                onSubmitEditing={() => pwRef.current.focus()}
                                style={authentication_style.authen_input}
                                placeholder={ConstantsString.FULLNAME}
                                placeholderTextColor={Colors.DARK} />
                        </View>
                        <View style={authentication_style.form_input}>
                            <Image source={IconsPath.EMAIL} style={authentication_style.iconInput} />
                            <TextInput
                                returnKeyType='next'
                                autoCapitalize='none'
                                onChangeText={(value) => setEmail(value)}
                                onSubmitEditing={() => pwRef.current.focus()}
                                style={authentication_style.authen_input}
                                placeholder={ConstantsString.EMAIL}
                                placeholderTextColor={Colors.DARK} />
                        </View>
                        <View style={authentication_style.form_input}>
                            <Image source={IconsPath.AUTHEN_USERNAME} style={authentication_style.iconInput} />
                            <TextInput
                                returnKeyType='next'
                                autoCapitalize='none'
                                onChangeText={(value) => setUsername(value)}
                                onSubmitEditing={() => pwRef.current.focus()}
                                style={authentication_style.authen_input}
                                placeholder={ConstantsString.USERNAME}
                                placeholderTextColor={Colors.DARK} />
                        </View>
                        <View style={authentication_style.form_input}>
                            <Image source={IconsPath.AUTHEN_PASSWORD} style={authentication_style.iconInput} />
                            <TextInput
                                ref={pwRef}
                                returnKeyType='next'
                                autoCapitalize='none'
                                onChangeText={(value) => setPassword(value)}
                                style={authentication_style.authen_input}
                                placeholder={ConstantsString.PASSWORD}
                                placeholderTextColor={Colors.DARK}
                                secureTextEntry={true} />
                        </View>
                        <View style={authentication_style.form_input}>
                            <Image source={IconsPath.AUTHEN_PASSWORD} style={authentication_style.iconInput} />
                            <TextInput
                                ref={pwRef}
                                returnKeyType='next'
                                autoCapitalize='none'
                                onChangeText={(value) => setPassword(value)}
                                style={authentication_style.authen_input}
                                placeholder={ConstantsString.CPASSWORD}
                                placeholderTextColor={Colors.DARK}
                                secureTextEntry={true} />
                        </View>
                    </Animated.View>

                    <Animated.View style={[authentication_style.btnGo, { opacity: fade }]}>
                        <Text style={authentication_style.btnGoLabel}>{ConstantsString.SIGNUP.toUpperCase()}</Text>

                        <Animated.View style={[{ transform: [{ translateX: slide }] }]}>
                            <TouchableOpacity
                                onPress={() => SignUp()}
                                style={authentication_style.btnArrow}>
                                <Image source={IconsPath.RIGHT_ARROW}
                                    style={authentication_style.iconArrow} />
                            </TouchableOpacity>
                        </Animated.View>
                    </Animated.View>

                    <Animated.View style={[{ opacity: fade }]}>
                        <TouchableOpacity>
                            <Text style={authentication_style.link}>{ConstantsString.FORGOT}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => toSignIn()}>
                            <Text style={{ ...authentication_style.link, fontWeight: 'bold', color: Colors.PRIMARY }}>{ConstantsString.SIGNIN.toUpperCase()}</Text>
                        </TouchableOpacity>
                    </Animated.View>

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default SignUp