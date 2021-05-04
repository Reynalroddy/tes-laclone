import React from 'react';
import {View, StyleSheet, Text,Dimensions, Button,TextInput,FlatList,TouchableOpacity,ImageBackground} from 'react-native';
import Btn from '../shared/Btn'
const CarItem = (props) => {
    const {name,tagline,image,taglineCTA}= props;
    return (
        <View style={styles.carItemCont}>
            <ImageBackground  style={styles.bgImg}source={image}>
<View style={styles.carItemText}>
<Text style={styles.title}>{name}</Text>
<Text style={styles.subtitle}>{tagline}&nbsp;<Text style={styles.tagCta}>{taglineCTA}</Text></Text>
</View>
<View style={styles.btnCont}>
<Btn type="primary" val='custom order' ></Btn>
<Btn type="secondary" val='existing inventory'></Btn>
</View>


</ImageBackground>



        </View>
    )
}

export default CarItem;


const styles = StyleSheet.create({
    carItemCont:{
height:Dimensions.get('window').height,
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
    tagCta:{
        textDecorationLine:'underline',
    },
bgImg:{
width:'100%',
height:'100%',
resizeMode:'cover',
position:'absolute',
},

btnCont:{
position:'absolute',
bottom:50,
width:'100%',
},
  });