import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomePage,ProfilePage,SignIn,SignUp } from '../screens'
const Stack = createNativeStackNavigator()
const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName='HomePage' screenOptions={{headerShown:false}}>
        <Stack.Screen name='HomePage' component={HomePage} /> 
        <Stack.Screen name='ProfilePage' component={ProfilePage} />
        <Stack.Screen name='SignIn' component={SignIn} />
        <Stack.Screen name='SignUp' component={SignUp} />
    </Stack.Navigator>
  )
}

export default MainStack