import React from 'react';
import {View, StyleSheet, Text, Button,TextInput,FlatList,TouchableOpacity,ImageBackground} from 'react-native';

const CarItem = () => {
    return (
        <View style={styles.carItemCont}>
            <ImageBackground  style={styles.bgImg}source={require('../assets/ModelX.jpeg')}>
<View style={styles.carItemText}>
<Text style={styles.title}>Model S</Text>
<Text style={styles.subtitle}>starting at $69.40</Text>
</View>
</ImageBackground>


        </View>
    )
}

export default CarItem;


const styles = StyleSheet.create({
    carItemCont:{
flex:1,
width:'100%',
    },

    carItemText:{
marginTop:'30%',
width:'100%',
alignItems:'center'
    
    },
    title:{
fontSize:40,
fontWeight:'600',



    },
    subtitle:{
        fontSize:16,
color:'#5c5e62',

    },
bgImg:{

    width:'100%',
height:'100%',
resizeMode:'cover',
position:'absolute',
}

    
  });