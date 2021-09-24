
import React from 'react';
import { FlatList, SafeAreaView,StyleSheet,Dimensions } from 'react-native';

import products from './products.json';
import Header from './components/Header';
import Card from './components/Card';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <FlatList
        data={products}
        numColumns={2}
        horizontal={false}
        renderItem={({item}) => <Card product={item}/> }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop:20,
    flex:1,
    backgroundColor:"white",

    },
});
