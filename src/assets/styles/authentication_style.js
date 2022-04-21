import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native'
import React from 'react'
import Colors from '../colors/Colors'
const width = Dimensions.get('window').width;
const widthComponent = width / 1.1;
const height = Dimensions.get('window').height;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const padding = Platform.OS === 'ios' ? 10 : 5;
const authentication_style = StyleSheet.create({
    container_authen: {
        width: '100%',
        height: '100%',
        backgroundColor: Colors.LIGHT,
        justifyContent: 'center'
    },
    app_name: {
        color: Colors.SECONDARY,
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    authen_btn: {
        width: widthComponent,
        backgroundColor: Colors.WHITE,
        alignSelf: 'center',
        borderRadius: 5,
        padding:15,
        elevation: 2,
        shadowColor: Colors.DARK,
        marginTop: 20,
        shadowOpacity: 0.2,
        shadowOffset: { 
            width: 0.5, 
            height: 0.5 },
    },
    authen_btn_label: {
        alignSelf: 'center',
        color: Colors.PRIMARY,
        fontWeight: 'bold'
    },
    welcome_label: {
        fontSize: 20,
        alignSelf: 'center',
        width: widthComponent,
        marginVertical: 20
    },
    input_authen: {
        flex: 1,
        borderLeftColor: Colors.SMOKE,
        borderLeftWidth: 1,
        paddingLeft: 10,
    },
    form_authen: {
        width: widthComponent,
        flexDirection: 'row',
        backgroundColor: Colors.WHITE,
        paddingHorizontal:5,
        paddingVertical:15,
        borderRadius: 5,
        elevation: 4,
        shadowColor: Colors.SMOKE,
        alignSelf: 'center',
        marginVertical: 10,
        shadowOpacity: 0.5,
        shadowOffset: { 
            width: 0.5, 
            height: 0.5 },
    },
    icon_input: {
        width: 20,
        height: 20,
        marginRight:5,
        alignSelf:'center',
    },
    social_view: {
        width: widthComponent,
        justifyContent: 'center',
        flexDirection: 'row',
        alignSelf:'center'
    },
    icon_sc: {
        width: 30,
        height: 30,
    },
    icon_sc_touch: {
        flex:1,
        padding:7,
        elevation: 2,
        backgroundColor: Colors.WHITE,
        shadowColor: Colors.DARK,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        shadowOpacity: 0.2,
        shadowOffset: { 
            width: 0.3, 
            height: 0.3 },
    },
    view_switch:{
        marginVertical:10,
        width:widthComponent,
        alignSelf:'center',
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center'
    }
})

export default authentication_style