/*******************
import React from 'react';
import {StyleSheet, View, Text, FlatList, Button, TouchableOpacity  } from 'react-native';

import Details from '../components/Details';
import firebase from '../../database/firebase';

const ListScreen = () => {
    return(
        <View>
            <Details ShopName = "Arpico"/>
            <Details ShopName = "Cargills"/>
            <Details ShopName = "Keels"/>
            <Details ShopName = "Sathosa"/>
            <Details/>
        </View>
        //ListScreen is the parent and Details is the child screen, to show different children use props for initiate them
        //add a prop to pass the child details.
        //add a prop on our own(ShopName) for pass details to parent
        //each child have seperate props and details different from other children 
    );
};

const style =StyleSheet.create ({
    TemplateStyle:
        {
            fontSize: 20,
        }

});

export default ListScreen;
******************/
// components/dashboard.js

import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import firebase from '../../database/firebase';
import Details from '../components/Details';
/*
export function deleteAccount(email, deleteComplete){
  account.deleteAt = firebase.firestore.FieldValue.serverTimestamp();
  console.log(account);

  firebase.firestore()
    .collection('Account')
    .doc(account.id).delete()
    .then(() => deleteComplete())
    .catch((error) => console.log(error));
}
*/
export default class ListScreen extends Component {
  constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }

  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }  

/*
  deleteAccount = () => {
    firebase.auth().delete().then(() => {
      this.props.navigation.navigate('HomeScreen')
    })
  }
*/
  render() {
    this.state = { 
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid
    }    
    return (
      <View style={styles.container}>
        <Text style = {styles.textStyle}>
          Hello {this.state.displayName} ,
        </Text>
        <Details ShopName = "Arpico"/>
          <Details ShopName = "Cargills"/>
          <Details ShopName = "Keels"/>
          <Details ShopName = "Sathosa"/>
        <Details/>

        <Button
          color="#28B463"
          title="Logout"
          onPress={() => this.signOut()}
        />

        <Button
          color="#28B463"
          title="Profile"
          onPress={() => this.props.navigation.navigate('ProfileScreen')}
        />

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    padding: 35,
    backgroundColor: '#fff'
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20
  }
});