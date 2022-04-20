import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomePage } from '../screens'
const Stack = createNativeStackNavigator()
const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName='HomePage' screenOptions={{headerShown:false}}>
        <Stack.Screen name='HomePage' component={HomePage}/>
    </Stack.Navigator>
  )
}

export default HomeStack