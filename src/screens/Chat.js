import { View, Text, TouchableOpacity, SafeAreaView, StatusBar, Image } from 'react-native'
import React, { useEffect } from 'react'
import {IsExistToken} from '../functions/AuthenticationFunctions'
import { StackActions } from '@react-navigation/native';
import NavigationPath from '../constants/NavigationPath';
import AsyncStorage from "@react-native-async-storage/async-storage"
import Storage from '../constants/Storage';
import CustomStatusBar from '../components/CustomStatusBar';
import ConstantsString from '../constants/ConstantsString';
import authentication_style from '../assets/styles/authentication_style';
import home_style from '../assets/styles/home_style';
import Colors from '../assets/colors/Colors';
import IconsPath from '../constants/IconsPath';

const Chat = ({navigation, route}) => {
  return (
    <SafeAreaView>
      <CustomStatusBar canBack={true} barStyle={ConstantsString.DARK} navigation={navigation} />
      <View style={home_style.container}>
  
      </View>
    </SafeAreaView>
  )
}

export default Chat