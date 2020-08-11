// components/dashboard.js

import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

import Supporter from './Supporter';
import firebase from '../../database/firebase';

export default class MenueScreen extends Component {
  
  render() {
      
    return (
      <View style = {styles.container}>
        <SafeAreaView style={{flex: 1}}>
            <TouchableOpacity 
                style = {styles.touchStyle}
                onPress = {this.props.navigation.openDrawer}
                //onPress = {this.props.navigation.navigate('Supporter')}
            >
                <FontAwesome5 name="bars" size={24} color="#161924" />
            </TouchableOpacity>
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}> {this.props.name} </Text>
            </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    textStyle: {
        color:"#161924",
        fontSize: 15,
        fontWeight: "500"
    },
    viewStyle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    touchStyle: {
        alignItems: "flex-start",
        margin: 16
    }
});