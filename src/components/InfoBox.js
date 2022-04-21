import { View, Text,StyleSheet,Dimensions, Image } from 'react-native'
import React from 'react'
import Colors from '../assets/colors/Colors';
import AsyncStorage from "@react-native-async-storage/async-storage"
import Storage from '../constants/Storage';
import ImagesPath from '../constants/ImagesPath';


const InfoBox = ({props}) => {

    React.useEffect(()=>{
        getInfo()
    },[])

    const [fullname, setFullname] = React.useState()
    const [username, setUsername] = React.useState()
    const [avatar, setAvatar] = React.useState()

    const getInfo = async () => {
        setFullname(await AsyncStorage.getItem(Storage.FULLNAME_STORAGE));
        setUsername(await AsyncStorage.getItem(Storage.USERNAME_STORAGE));
        let avt = await AsyncStorage.getItem(Storage.AVATAR_STORAGE);
        if(avt != ""){
            setAvatar(avt)
        }
    }

  return (
    <View style={style.container}>
        <Image source={avatar != null ? {uri: avatar} : ImagesPath.BG_DEFAULT[3]} style={style.img} />
        <Text style={style.name}>{fullname}</Text>
        <Text style={style.username}>{username}</Text>
    </View>
  )
}
const width = Dimensions.get('window').width;
const widthComponent = width / 1.1;
const height = Dimensions.get('window').height;

const style = StyleSheet.create({
    container:{
        alignSelf:'center',
        width:widthComponent,
        height:widthComponent,
        backgroundColor:Colors.WHITE,
        elevation:3,
        shadowColor:Colors.SMOKE,
        shadowOffset:{
            height:0.5,
            width:0.5
        },
        shadowOpacity:0.5,
        shadowRadius:1,
        justifyContent:'center',
        borderRadius:15,
        marginTop:10,
    },
    img:{
        width:widthComponent/2,
        height:widthComponent/2,
        borderRadius:widthComponent/2,
        alignSelf:'center',
    },
    name:{
        fontSize:20,
        fontWeight:'bold',
        color:Colors.BLACK,
        marginTop:10,
        alignSelf:'center'
    },
    username:{
        fontSize:12,
        color:Colors.BLACK,
        alignSelf:'center'
    }
})

export default InfoBox