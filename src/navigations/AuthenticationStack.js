import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Authentication,SignIn,SignUp } from '../screens'
const Stack = createNativeStackNavigator()
const AuthenticationStack = () => {
  return (
    <Stack.Navigator initialRouteName='Authentication' screenOptions={{headerShown:false}}>
        <Stack.Screen name='Authentication' component={Authentication} options={{animation:'slide_from_right'}}/>
        <Stack.Screen name='SignIn' component={SignIn} options={{animation:'slide_from_right'}} />
        <Stack.Screen name='SignUp' component={SignUp} options={{animation:'slide_from_left'}}/>
    </Stack.Navigator>
  )
}

export default AuthenticationStack