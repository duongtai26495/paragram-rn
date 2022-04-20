import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ProfilePage,Chat } from '../screens'
import AuthenticationStack from './AuthenticationStack'
import MainTab from './MainTab'
const Stack = createNativeStackNavigator()
const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName='MainTab' screenOptions={{headerShown:false}}>
        <Stack.Screen name='MainTab' component={MainTab} /> 
        <Stack.Screen name='Chat' component={Chat} />
        <Stack.Screen name='AuthenticationStack' component={AuthenticationStack}  options={{animation:'slide_from_right'}}/>
    </Stack.Navigator>
  )
}

export default MainStack