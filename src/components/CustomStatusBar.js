import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import Colors from '../assets/colors/Colors'
import authentication_style from '../assets/styles/authentication_style'

const CustomStatusBar = (props) => {

    const {barStyle} = props
  return (
    <StatusBar
    animated={true}
    style={authentication_style.statusBar}
    translucent
    backgroundColor={Colors.PRIMARY}
    barStyle={barStyle} />
  )
}

export default CustomStatusBar