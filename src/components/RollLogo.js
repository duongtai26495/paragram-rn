import { View, Text, Image, StyleSheet, Animated, Easing } from 'react-native'
import React, { useEffect, useRef } from 'react'
import IconsPath from '../constants/IconsPath'

const RollLogo = () => {

    useEffect(() => {
        rollEff()
    }, [])

    const roll = useRef(new Animated.Value(0)).current;
    const fade = useRef(new Animated.Value(0)).current;
    const rollEff = () => {
            Animated.sequence([
                Animated.timing(fade, {toValue:1, duration:1000, useNativeDriver:true}),
                Animated.timing(roll, { toValue: 1, duration: 2000, useNativeDriver: true, easing:Easing.bounce})
            ]).start();
    }

    const dataRoll = roll.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    return (
        <Animated.View style={[{opacity:fade},{ transform: [{ rotate: dataRoll }]}]}>
            <Image source={IconsPath.LOGO} style={style.image} />
        </Animated.View>
    )
}

const style = StyleSheet.create({
    image: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginVertical: 15,
    }
})
export default RollLogo