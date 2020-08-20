import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image} from 'react-native';
import { Header } from 'react-native-elements';
import React, { useState } from 'react';


export default function App() {

  const [people, setPeople] = useState([
    { name: 'shaun', id: '1' },
    { name: 'yoshi', id: '2' },
    { name: 'mario', id: '3' },
    { name: 'luigi', id: '4' },
    { name: 'peach', id: '5' },
    { name: 'toad', id: '6' },
    { name: 'bowser', id: '7' },
  ]);

  console.log("INICIO")

  return (
    <View style={styles.container}>

    <Header 
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'SERVIPET', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff'}}
      />
      
      <Text>Hola ServiPet</Text>
      <Image 
      style={{
            resizeMode: "center",
            height: 100,
            width: 100
          }}
          source={require('./imagenes/ecoturismo.jpg')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    flex: 2,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 25,
  },
});
