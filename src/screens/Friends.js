import { View, Text, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import {IsExistToken} from '../functions/AuthenticationFunctions'
import { StackActions } from '@react-navigation/native';
import NavigationPath from '../constants/NavigationPath';
import AsyncStorage from "@react-native-async-storage/async-storage"
import Storage from '../constants/Storage';
import CustomStatusBar from '../components/CustomStatusBar';
import ConstantsString from '../constants/ConstantsString';
const Friends = ({navigation, route}) => {
  return (
    <SafeAreaView>
        
        <CustomStatusBar barStyle={ConstantsString.DARK} navigation={navigation}/>

        <TouchableOpacity 
        style={{backgroundColor:'rgba(255,220,20,1)',padding:5}} 
        onPress={()=>navigation.navigate(NavigationPath.CHAT)}>
        <Text >Chat</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Friends