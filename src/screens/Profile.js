import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomStatusBar from '../components/CustomStatusBar'
import ConstantsString from '../constants/ConstantsString'
import InfoBox from '../components/InfoBox'

const Profile = ({ navigation, route }) => {
    return (
        <SafeAreaView>
            <CustomStatusBar barStyle={ConstantsString.DARK} navigation={navigation}/>
            <InfoBox  />
        </SafeAreaView>
    )
}

export default Profile