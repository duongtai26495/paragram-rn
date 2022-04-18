import { View, Image, Animated, StyleSheet, Easing } from 'react-native'
import React, { useRef, useEffect } from 'react'
import Colors from '../assets/colors/Colors'
import IconsPath from '../constants/IconsPath'

const CustomIndicator = () => {

    useEffect(() => {
        rollLoading()
    }, [])

    const roll = useRef(new Animated.Value(0)).current;


    const insideData = roll.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    const outsideData = roll.interpolate({
        inputRange: [0, 1],
        outputRange: ['360deg', '0deg']
    })

    const rollLoading = () => {
        Animated.loop(
                Animated.timing(roll, { toValue: 1, duration: 2000, useNativeDriver: true, easing: Easing.linear })
        ).start()
    }

    return (
        <View style={style.container}>
            <Animated.View style={[style.aniview, { transform: [{ rotate: outsideData }] }]}>
                <Image source={IconsPath.OUTSIDE} style={style.outside} />
            </Animated.View>
            <Animated.View style={[style.aniview, { transform: [{ rotate: insideData }] }]}>
                <Image source={IconsPath.INSIDE} style={style.inside} />
            </Animated.View>
        </View>
    )
}
const size = 40;
const style = StyleSheet.create({
    container: {
        height: '100%',
        width:'100%',
        position: 'absolute',
        zIndex: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation:5,
    },

    aniview: {
        alignSelf: 'center',
        position:'absolute'
    },

    inside: {
        width: size,
        height: size,
        alignSelf: 'center'
    },
    outside: {
        height: size * 1.8,
        width: size * 1.8,
        alignSelf: 'center'
    }
})

export default CustomIndicator