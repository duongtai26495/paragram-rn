import { View, Text, StatusBar, Image, TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import Colors from '../assets/colors/Colors'
import authentication_style from '../assets/styles/authentication_style'
import IconsPath from '../constants/IconsPath'
import home_style from '../assets/styles/home_style'
const CustomStatusBar = (props) => {

  const { barStyle, navigation, canBack } = props

  const goToBack = () => {
    if(canBack == true && navigation.canGoBack()){
        return (
          <TouchableOpacity style={home_style.backBar} onPress={() => { navigation.goBack() }}>
            <Image source={IconsPath.BACK} style={{ width: 25, height: 25 }} />
          </TouchableOpacity>
        )
    }
  }

  return (
    <>
     {Platform.OS === 'ios' ? <StatusBar
        animated={true}
        style={authentication_style.statusBar}
        translucent
        backgroundColor={Colors.PRIMARY}
        barStyle={barStyle} /> : null } 
      {goToBack()}
    </>

  )
}

export default CustomStatusBar