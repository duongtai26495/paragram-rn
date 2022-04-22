import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../assets/colors/Colors'
import ImagesPath from '../constants/ImagesPath'
const FriendList = (props) => {

    const { data, isSearch } = props

    const itemEmpty = () =>{
        if(isSearch){
            return(
                <View style={style.main}>
                    <Text style={style.name}>{'No result'}</Text>
                </View>
            )
        }
    }

    const itemRender = ({ item }) => {
        if (isSearch) {
            return (
                <View style={style.main} key={item.id}>
                    <Image source={item.avatar != null ? {uri: item.avatar} : ImagesPath.BG_DEFAULT[3]} style={style.img} />
                    <View style={{alignSelf:'center'}}>
                    <Text style={style.name}>{item.full_name}</Text>
                    <Text style={style.mail}>{item.email}</Text>
                    </View>
                </View>
            )
        } else {
            return (
                <View key={item.id}>
                    <Text style={style.name}>{item.full_name}</Text>
                    <Text style={style.mail}>{item.email}</Text>
                </View>
            )
        }

    }

    return (
        <View>
            <FlatList
                data={data}
                renderItem={itemRender}
                ListEmptyComponent={itemEmpty}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

const style = StyleSheet.create({
    main: {
        width: '100%',
        padding: 5,
        backgroundColor: Colors.WHITE,
        borderTopColor: Colors.SMOKE,
        borderTopWidth: 0.5,
        flexDirection:'row'
    },
    img:{
        width:80,
        height:80,
        borderRadius:40,
        marginEnd:10,
        borderWidth:1,
        borderColor:Colors.PRIMARY
    },
    name:{
        fontSize:25,
        fontWeight:'bold',
        color:Colors.BLACK,
    },
    mail:{
        fontSize:15,
        color:Colors.SMOKE,
    }
})

export default FriendList