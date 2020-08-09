import React from 'react';
import {StyleSheet, Text, View, Button, Image } from 'react-native';

import ListScreen from './ListScreen';
import firebase from '../../database/firebase';

const HomeScreen = (props) => { //props is an argumentto the function
  //console.log(props.navigation); //console.log(props)  //props.navigation create object with react navigation library from stack navigator
  //navigate function which we can use to change the content that is visible on the screen is inside that library
  const discription = <Text style={styles.discriptionStyle}>Find, Where you want.</Text>
  return (
    <View style = {styles.container}>
      {discription}
      <Image style = {styles.image} source={require('../../assets/shopping.jpg' )} />
      
      <Button
        onPress={()=> props.navigation.navigate('Signup')}
        title="Shop Now"
        color = '#52BE80'
      />
      <Text style = {styles.homeStyle}>Owned by: Chamodi Kulathunga</Text>
      <Text style = {styles.homeStyle}>Index No: 17000892</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 10,
    backgroundColor: '#fff', 
    paddingTop: 10,
    paddingBottom: 50 
  },
  homeStyle:{
    fontSize: 30,
    paddingTop : 0,
    paddingBottom:0,
    textAlign : "center"
  },
  discriptionStyle: {
    fontSize: 20
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  }
});

export default HomeScreen;
