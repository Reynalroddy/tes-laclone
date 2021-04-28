import React from 'react'
import {View, StyleSheet, Text, Button,TextInput,FlatList,TouchableOpacity,ImageBackground,Pressable} from 'react-native';


const Btn = ({type,val}) => {

  // const {type} = props;

  const bgC = (type)=>(
type==='primary'?'#171A20CC':'#FFFFFFA6'
  );

  const txtClr = (type)=>(
    type==='primary'?'#FFFFFF':'#171A20'
  );
    return (
    <View style={styles.container}>
<Pressable style={{...styles.btn,backgroundColor:bgC(type)}} onPress={()=>{

 
}}><Text style={{...styles.txt,color:txtClr(type)}}>{val}</Text></Pressable>

    </View>
    )
}

export default Btn

const styles = StyleSheet.create({
    container: {
     width:'100%',
padding:10,

    },
    btn:{
height:40,
backgroundColor:'yellow', 
justifyContent:'center',
alignItems:'center',
borderRadius:15,
    },
    txt:{
      fontSize:12,
      fontWeight:'500',
      textTransform:'uppercase',
    }
  });