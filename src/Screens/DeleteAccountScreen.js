
// components/ProfileScreen.js

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
export default class ProfileScreen extends Component {
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
            {this.state.displayName} ,
        </Text>
        

        <Button
            color="#28B463"
            title="Logout"
            onPress={() => this.signOut()}
        />

        <Button
            color="#28B463"
            title="Update"
            onPress={() => this.props.navigation.navigate('UpdateAccount')}
        />

        <Button
            color="#28B463"
            title="Delete Account"
            onPress={() => this.props.navigation.navigate('DeleteAccountScreen')}
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