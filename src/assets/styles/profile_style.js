import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native'
import React from 'react'
import Colors from '../colors/Colors'
const width = Dimensions.get('window').width;
const widthComponent = width / 1.1;
const height = Dimensions.get('window').height;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const padding = Platform.OS === 'ios' ? 10 : 5;
const profile_style = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
    },
    row_profile:{
        width:widthComponent,
        padding:10,
        borderRadius:10,
        elevation:2,
        shadowColor:Colors.SMOKE,
        shadowOffset:{
            height:0.5,
            width:0.5
        },
        shadowRadius:1,
        shadowOpacity:0.5,
        backgroundColor:Colors.WHITE,
        alignSelf:'center',
        marginVertical:5,
        flexDirection:'row',
        alignItems:'center'
    },
    row_label:{
        fontSize:15,
        color:Colors.BLACK,
        fontWeight:'bold',
    },
    row_icon:{
        width:40,
        height:40,
    },
    row_detail:{
        fontSize:12,
        color:Colors.SMOKE,
    },
    label:{
        justifyContent:'flex-start',
        paddingHorizontal:10,
    }
})

export default profile_style