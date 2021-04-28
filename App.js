import React from 'react'
import {View, StyleSheet, Text, Button,TextInput,FlatList,TouchableOpacity} from 'react-native';
import CarItem from './components/CarItem';
const App = () => {
  return (
    <View style={styles.container}>
<CarItem></CarItem>

    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  }
  
});

