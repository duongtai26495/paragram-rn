import { View, Image, Text, SafeAreaView, TouchableOpacity, ScrollView, RefreshControl } from 'react-native'
import React, { useState } from 'react'
import CustomStatusBar from '../components/CustomStatusBar'
import ConstantsString from '../constants/ConstantsString'
import InfoBox from '../components/InfoBox'
import CustomIndicator from '../components/CustomIndicator'
import ButtonSignOut from '../components/ButtonSignOut'
import profile_style from '../assets/styles/profile_style'
import IconsPath from '../constants/IconsPath'

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
            <TouchableOpacity style={[profile_style.row_profile]}>
                <Image source={IconsPath.INFORMATION} style={profile_style.row_icon} />
                <View style={profile_style.label}>
                <Text style={profile_style.row_label}>{ConstantsString.ABOUT.toUpperCase()}</Text>
                <Text style={profile_style.row_detail}>{ConstantsString.DETAILS}</Text>
                </View>
               
            </TouchableOpacity>
            <ButtonSignOut navigation={navigation} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile