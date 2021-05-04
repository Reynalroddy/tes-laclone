import React from 'react'
import {View, StyleSheet, Text, Button,TextInput,FlatList,TouchableOpacity} from 'react-native';
import CarList from './components/CarList';
import CarItem from './components/CarItem';
import Header from './components/Header'
const App = () => {
  return (
    <View style={styles.container}>
      <Header />
{/* <CarItem name="Model X" tagline="order online for" image={require("./assets/ModelX.jpeg") } taglineCTA="touchless delivery"></CarItem> */}
<CarList></CarList>
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

