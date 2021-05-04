import React from 'react';
import {View, StyleSheet, Text,Image, Button,TextInput,FlatList,Dimensions,TouchableOpacity,ImageBackground,Pressable} from 'react-native';

const Header = () => {
    return (
       <View style={styles.headCont}>
 <Image source={require('../assets/logo.png')} style={styles.headerImg}/>
 <Image source={require('../assets/menu.png')} style={styles.headerMenu}/>
       </View>
    )
}

export default Header

const styles= StyleSheet.create({

    headCont:{
        top:35,
        width:'100%',
        zIndex:100,
        flexDirection:'row',
        justifyContent:'space-between',
        position:'absolute',
        paddingHorizontal:20,
       
    },

    headerImg:{
        width:100,
        height:20,
        resizeMode:'contain',
    },

    headerMenu:{
height:25,
width:25,
resizeMode:'contain',

    }





})