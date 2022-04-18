import { View, Text, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import {IsExistToken} from '../functions/AuthenticationFunctions'
import { StackActions } from '@react-navigation/native';
import NavigationPath from '../constants/NavigationPath';
import AsyncStorage from "@react-native-async-storage/async-storage"
import Storage from '../constants/Storage';
const Home = ({navigation,route}) => {

    useEffect(()=>{
        CheckLogin()
    },[])

    const CheckLogin = async () =>{
        if(await IsExistToken()){
            console.log("User logged in")
        }else{
            console.log("User do not login")
            navigation.dispatch(StackActions.replace(NavigationPath.SIGNIN))
        }
    }

    const SignOut = async () =>{
        await AsyncStorage.removeItem(Storage.LOCAL_ACCESS_TOKEN)
        CheckLogin()
    }

  return (
    <SafeAreaView>
        <StatusBar/>
        <TouchableOpacity style={{backgroundColor:'rgba(255,20,20,1)',padding:5}} onPress={()=>SignOut()}>
        <Text >SIGN OUT</Text>

        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Home