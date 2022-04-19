import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomePage,ProfilePage,SignIn,SignUp } from '../screens'
import AuthenticationStack from './AuthenticationStack'
const Stack = createNativeStackNavigator()
const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName='HomePage' screenOptions={{headerShown:false}}>
        <Stack.Screen name='HomePage' component={HomePage} /> 
        <Stack.Screen name='ProfilePage' component={ProfilePage} />
        <Stack.Screen name='AuthenticationStack' component={AuthenticationStack}  options={{animation:'slide_from_right'}}/>
    </Stack.Navigator>
  )
}

export default MainStack