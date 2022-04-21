import { View, Text, Image, TextInput, TouchableOpacity, Animated, StyleSheet } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types';
import Colors from '../assets/colors/Colors';
import ConstantsString from '../constants/ConstantsString';
import IconsPath from '../constants/IconsPath';

class SearchBar extends React.Component{
    render(){
        return(
            <View style={style.container}>
                <View style={style.searchView}>
                    <TextInput 
                    returnKeyLabel='search'
                    onChangeText={this.value}
                    style={style.searchInput}
                    returnKeyType='search'
                    placeholder={ConstantsString.SEARCHING}
                    placeholderTextColor={Colors.SMOKE}/>
                    <Animated.View style={style.searchButton}>
                        <TouchableOpacity onPress={this.onPress}>
                            <Image source={IconsPath.SEARCH} style={style.searchIcon} />
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            </View>
        )
    
    }
}

SearchBar.propTypes = {
    value : PropTypes.string,
    onPress : PropTypes.func,
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

export default SearchBar