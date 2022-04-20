import { Dimensions, Platform, View, Text, TextInput, SafeAreaView, ScrollView, Image, StatusBar, TouchableOpacity, Animated, Easing } from 'react-native'
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
const Authentication = ({navigation, route}) => {

  return (
    <View style={authentication_style.container_authen}>
      <SafeAreaView style={{flex:1,justifyContent:'space-evenly'}}>
        {Platform.OS === 'ios' ? null : <CustomStatusBar barStyle={ConstantsString.DARK} />}
        <View style={{ marginBottom: height / 5 }}>
          <RollLogo />
          <Animated.View>
            <Text style={authentication_style.app_name} >{ConstantsString.APPNAME.toUpperCase()}</Text>
          </Animated.View>
        </View>
        <Animated.View>
          <TouchableOpacity
            onPress={() => navigation.dispatch(StackActions.replace(NavigationPath.SIGNIN))}
            style={authentication_style.authen_btn}>
            <Text style={authentication_style.authen_btn_label}>{ConstantsString.SIGNIN}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.dispatch(StackActions.replace(NavigationPath.SIGNUP))}
            style={authentication_style.authen_btn}>
            <Text style={authentication_style.authen_btn_label}>{ConstantsString.CREACC}</Text>
          </TouchableOpacity>
        </Animated.View>
      </SafeAreaView>
    </View>

  )
}

export default Authentication