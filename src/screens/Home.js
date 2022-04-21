import { View, Text, TouchableOpacity, SafeAreaView, StatusBar, NavigatorIOS } from 'react-native'
import React, { useEffect } from 'react'
import { StackActions } from '@react-navigation/native';
import NavigationPath from '../constants/NavigationPath';
import AsyncStorage from "@react-native-async-storage/async-storage"
import Storage from '../constants/Storage';
import { deleteAllItemLogout, IsExistToken, SignOut } from '../functions/StorageFunctions';
import CustomStatusBar from '../components/CustomStatusBar';
import ConstantsString from '../constants/ConstantsString';
const Home = ({ navigation, route }) => {

    useEffect(() => {
        IsExistToken(navigation)
    }, [])

    return (
        <SafeAreaView>
        <CustomStatusBar barStyle={ConstantsString.DARK} navigation={navigation}/>
        </SafeAreaView>
    )
}

export default Home