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

    const wlcEff = () => {
        Animated.sequence([
            Animated.timing(fade, { toValue: 1, duration: 300, useNativeDriver: true }),
            Animated.timing(slide, { toValue: 1, duration: 1500, useNativeDriver: true, easing: Easing.exp }),

        ]).start()
    }

    const Login = async () => {
        if (username != null || password != null) {
            setLoading(true)
            let token = await LoginWithUsernamePassword(username, password)
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

    const GoRegister = () => {
        Animated.sequence([
            Animated.timing(scaleUp, { toValue: 100, duration: 1000, useNativeDriver: true }),
            navigation.dispatch(StackActions.replace(NavigationPath.SIGNUP))
        ]).start()
    }


    return (
        <SafeAreaView style={authentication_style.container}>
            <CustomStatusBar barStyle={ConstantsString.LIGHT} />
            {isLoading ? <CustomIndicator /> : null}
            <Image
                blurRadius={10}
                source={ImagesPath.BG_DEFAULT[2]}
                style={authentication_style.bg_signin} />
            <View style={[authentication_style.signInView]}>
                <Animated.View style={[{ opacity: fade }]}>
                    <RollLogo />
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
                </Animated.View>

                <Animated.View style={[authentication_style.btnGo,{ opacity: fade }]}>
                    <Text style={authentication_style.btnGoLabel}>{ConstantsString.SIGNIN.toUpperCase()}</Text>

                    <Animated.View style={[{ transform: [{ translateX: slide }] }]}>
                        <TouchableOpacity
                            onPress={() => Login()}
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
                </Animated.View>

            </View>
        </SafeAreaView>
    )
}

export default SignIn