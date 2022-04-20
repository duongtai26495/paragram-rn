import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native'
import React from 'react'
import Colors from '../colors/Colors'
const width = Dimensions.get('window').width;
const widthComponent = width / 1.1;
const height = Dimensions.get('window').height;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const padding = Platform.OS === 'ios' ? 10 : 5;
const home_style = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
    },

    backBar:{
        width:'100%',
        padding:10,
        backgroundColor:Colors.PRIMARY,
    }
})

export default home_style