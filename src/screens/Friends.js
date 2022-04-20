import { View, Text, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import {IsExistToken} from '../functions/AuthenticationFunctions'
import { StackActions } from '@react-navigation/native';
import NavigationPath from '../constants/NavigationPath';
import AsyncStorage from "@react-native-async-storage/async-storage"
import Storage from '../constants/Storage';

const Friends = ({navigation, route}) => {
  return (
    <SafeAreaView>
        <StatusBar/>

        <TouchableOpacity 
        style={{backgroundColor:'rgba(255,220,20,1)',padding:5}} 
        onPress={()=>navigation.navigate(NavigationPath.CHAT)}>
        <Text >Chat</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Friends