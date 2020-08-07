import React from 'react';
import {StyleSheet, Text, View, Button } from 'react-native';

import ListScreen from './ListScreen'

const HomeScreen = (props) => { //props is an argumentto the function
  //console.log(props.navigation); //console.log(props)  //props.navigation create object with react navigation library from stack navigator
  //navigate function which we can use to change the content that is visible on the screen is inside that library
  const discription = <Text style={styles.discriptionStyle}>Find, Where you want.</Text>
  return (
    <View>
      <Text style={styles.homeStyle}>Tracky</Text>
      {discription}
      <Button
        onPress={()=> props.navigation.navigate('ListScreen')}
        title="Shop Now"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeStyle:{
    fontSize: 50
  },
  discriptionStyle: {
    fontSize: 20
  }
});

export default HomeScreen;
