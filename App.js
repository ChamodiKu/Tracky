//import { StatusBar } from 'expo-status-bar';
import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer } from 'react-navigation'


import HomeScreen from './src/Screens/HomeScreen';
import ListScreen from './src/Screens/ListScreen';

/******************************************************************************/

const navigator = createStackNavigator(
  {
    Home:HomeScreen
  },
    
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Trackey..'
    }
  }
);

export default createAppContainer(navigator);

/***************************************************************************/

///////////////////////
//export default function App() {
//  return (
//    <View style={styles.container}>
//      <Text>Open up App.js to start working on your app!</Text>
//      <StatusBar style="auto" />
//    </View>
//  );
//}

//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: '#fff',
//    alignItems: 'center',
//    justifyContent: 'center',
//  },
//}); 
///////////////////////



/************************************
 export default function App(){
   return (
     <View style = {styles.outer}>
      <Home/>
    </View>
   );
 }

 //to write this code in App.js
 //navigation must be given from Home.js
 ****************************************/
