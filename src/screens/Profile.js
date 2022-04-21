import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, RefreshControl } from 'react-native'
import React, { useState } from 'react'
import CustomStatusBar from '../components/CustomStatusBar'
import ConstantsString from '../constants/ConstantsString'
import InfoBox from '../components/InfoBox'
import CustomIndicator from '../components/CustomIndicator'
import ButtonSignOut from '../components/ButtonSignOut'

const Profile = ({ navigation, route }) => {

    const [isLoading, setLoading] = useState(false);

    const onLoading = () =>{
        setLoading(true)
        setLoading(false)
    }

    return (
        <SafeAreaView>
            <CustomStatusBar barStyle={ConstantsString.DARK} navigation={navigation}/>
            <ScrollView
            refreshControl={
                <RefreshControl
                refreshing={isLoading}
                onRefresh={onLoading} />
            }
            style={{
            width:'100%',
            height:'100%',}}>
            <InfoBox  />
            {isLoading ? <CustomIndicator/> : null}
            <ButtonSignOut navigation={navigation} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile