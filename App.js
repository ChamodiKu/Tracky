/********************
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';   //initial
import {createStackNavigator, createAppContainer } from 'react-navigation'
***********************************/
/*
import * as React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";


import HomeScreen from './src/Screens/HomeScreen';
import ListScreen from './src/Screens/ListScreen';
//import HomeNavigator from './navigation/HomeNavigation';
*/
/******************************************************************************
my

const navigator = createStackNavigator(  //createStackNavigator allow navigate or essentially change the content that is visible on the screen to users 
  { //root object, this describes all the different routes that we can navigate to inside of application
    Home: HomeScreen,
    List: ListScreen
  
  },
    
  {
    initialRouteName: 'Home',

    defaultNavigationOptions: {
      title: 'Trackey..'
    }
  }
);

export default createAppContainer(navigator);

***************************************************************************/

/*************************************
///////////////////////
export default function App() {
  return (
    
    <View style={styles.container}>
      <Text>Trackey</Text>
      <StatusBar style="auto" />
    </View>
    
   <View style={styles.container}>
      <TouchableOpacity onPress = {() => props.navigation.navigate('HomeScreen')}>      
        <Text>Trackey</Text>      
      </TouchableOpacity>
      <StatusBar style="auto" />
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33cc99',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 
////////////////////////   //initial




 export default function App(){
   return (
     <View style = {styles.outer}>
      <Home/>
    </View>
   );
 }

 //to write this code in App.js
 //navigation must be given from Home.js
 
 **************************************/





 // App.js

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/components/login';
import Signup from './src/components/signup';
import Dashboard from './src/components/dashboard';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen 
        name="Signup" 
        component={Signup} 
        options={{ title: 'Signup' }}
      />       
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={
          {title: 'Login'},
          {headerLeft: null} 
        }
      />
      <Stack.Screen 
       name="Dashboard" 
       component={Dashboard} 
       options={
         { title: 'Dashboard' },
         {headerLeft: null} 
       }
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
