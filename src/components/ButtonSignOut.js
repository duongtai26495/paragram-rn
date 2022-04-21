import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import ConstantsString from '../constants/ConstantsString'
import Colors from '../assets/colors/Colors';
import { SignOut } from '../functions/StorageFunctions';
const width = Dimensions.get('window').width;
const widthComponent = width / 1.1;
const ButtonSignOut = (props) => {
    const {navigation} = props
  return (
    <TouchableOpacity
    onPress={()=> SignOut(navigation)} 
    style={style.button}>
        <Text style={style.label}>{ConstantsString.SIGNOUT}</Text>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
    button:{
        width:widthComponent,
        borderRadius:10,
        backgroundColor:Colors.SECONDARY,
        padding:10,
        alignSelf:'center',
    },
    label:{
        color:Colors.WHITE,
        fontSize:15,
        fontWeight:'bold',
        alignSelf:'center',
    }
})


export default ButtonSignOut