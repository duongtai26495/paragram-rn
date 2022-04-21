import { View, Text, TouchableOpacity, Animated, Image, SafeAreaView,TextInput, StatusBar, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import {IsExistToken} from '../functions/AuthenticationFunctions'
import { StackActions } from '@react-navigation/native';
import NavigationPath from '../constants/NavigationPath';
import AsyncStorage from "@react-native-async-storage/async-storage"
import Storage from '../constants/Storage';
import CustomStatusBar from '../components/CustomStatusBar';
import ConstantsString from '../constants/ConstantsString';
import Colors from '../assets/colors/Colors';
import IconsPath from '../constants/IconsPath';
const Friends = ({navigation, route}) => {


  const SearchBar = () =>{
    return (
      <View style={style.container}>
      <View style={style.searchView}>
          <TextInput 
          style={style.searchInput}
          returnKeyType='search'
          placeholder={ConstantsString.SEARCHING}
          placeholderTextColor={Colors.SMOKE}/>
          <Animated.View style={style.searchButton}>
              <TouchableOpacity>
                  <Image source={IconsPath.SEARCH} style={style.searchIcon} />
              </TouchableOpacity>
          </Animated.View>
      </View>
  </View>
    )
  }

  return (
    <SafeAreaView>
        <CustomStatusBar barStyle={ConstantsString.DARK} navigation={navigation}/>
        <ScrollView style={{width:'100%',height:'100%'}}>
        {SearchBar()}
        </ScrollView>
    </SafeAreaView>
  )
}
const style = StyleSheet.create({
  container:{
      width:'100%',
      backgroundColor:Colors.SECONDARY,
      padding:5,
  },
  searchView:{
      width:'100%',
      backgroundColor:Colors.WHITE,
      borderRadius:7,
      alignSelf:'center',
      paddingVertical:5,
      paddingHorizontal:5,
      flexDirection:'row'
  },
  searchInput:{
      flex:1,
      color:Colors.BLACK,
      fontSize:15,
  },
  searchIcon:{
      width:20,
      height:20,
      alignSelf:'center'
  },
  searchButton:{
      justifyContent:'center',
      paddingVertical:5,
      paddingHorizontal:10,
      backgroundColor:Colors.SECONDARY,
      borderRadius:5,
  }
})
export default Friends