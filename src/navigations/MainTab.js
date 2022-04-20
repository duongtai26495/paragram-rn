import React from 'react'
import { Friends, HomePage } from '../screens'
import { View, TouchableOpacity, Image } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import NavigationPath from '../constants/NavigationPath'
import Colors from '../assets/colors/Colors'
import IconsPath from '../constants/IconsPath'
import HomeStack from './HomeStack'
const Tab = createMaterialBottomTabNavigator()
const iconSize = 25
const MainTab = () => {
    return (
        <Tab.Navigator
            initialRouteName={NavigationPath.HOME}
            shifting={true}
            activeColor={Colors.SECONDARY}
            inactiveColor={Colors.LIGHT}
            barStyle={{ backgroundColor: Colors.WHITE, borderTopColor: Colors.PRIMARY, borderTopWidth: 0.5, }}
            options={{
                headerShown: false,
                presentation: true,
                animationEnabled: true,
            }}>
            <Tab.Screen
                name={NavigationPath.HOME}
                component={HomePage}
                options={{
                    headerShown: false,
                    animation: true,
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image
                                source={IconsPath.HOME}
                                resizeMode='contain'
                                style={{
                                    width: iconSize,
                                    height: iconSize,
                                    tintColor: focused ? Colors.SECONDARY : Colors.SMOKE
                                }}
                            />
                        </View>
                    )
                }} />
            <Tab.Screen
                name={NavigationPath.FRIENDS}
                component={Friends}
                options={{
                    headerShown: false,
                    animation: true,
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image
                                source={IconsPath.FRIENDS}
                                resizeMode='contain'
                                style={{
                                    width: iconSize,
                                    height: iconSize,
                                    tintColor: focused ? Colors.SECONDARY : Colors.SMOKE
                                }}
                            />
                        </View>
                    )
                }} />
        </Tab.Navigator>
    )
}

export default MainTab