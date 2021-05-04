import React from 'react'
import Cars from './cars/Cars'
import CarItem from './CarItem'
import {View, StyleSheet, Text, Button,TextInput,FlatList,Dimensions,TouchableOpacity,ImageBackground,Pressable} from 'react-native';
const CarList = (props) => {
    const renderItem = ({ item }) => (
        <CarItem name={item.name} tagline={item.tagline} taglineCTA={item.taglineCTA} image={item.image} />
      );
      console.log(Cars);
    return (
       <View style={styles.container}>
  <FlatList  showsVerticalScrollIndicator={false} data={Cars} renderItem={renderItem} keyExtractor={item=>item.id} snapToAlignment={'start'} decelerationRate={'fast'} snapToInterval={Dimensions.get('window').height}/>
       </View> 
      
    )
}
export default CarList;



const styles = StyleSheet.create({
    container:{
// height:'100%',
width:'100%',
    },
     /*
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
}, */
  });