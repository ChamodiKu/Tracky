/****
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import ImageDetails from '../Components/ImageDetails'; //.. use for go outer folder or file

const ImageScreen = () => {
    return(
        <View>
            
            <Text style = {styles.textStyle} >Image Screen</Text>
            <ImageDetails 
                title = "Keels" 
                imageSource = {require('../../assets/keels.jpeg')}
            />
            <ImageDetails 
                title = "Arpico"
                imageSource = {require('../../assets/arpico.jpeg')}
            />
            <ImageDetails 
                title = "Cargills"
                imageSource = {require('../../assets/cargills.jpeg')}
            />
            <ImageDetails 
                title = "Sathosa"
                imageSource = {require('../../assets/sathosa.jpeg')}
            />

        </View>
    ); // propes inside ImageDetails tag we can create by our own 
};  
//Assign a number to a prop it has to be assign inside of a set of curly braces

const styles = StyleSheet.create ({
    textStyle:{
        fontSize: 35
    }
});

export default ImageScreen;
*******/


import React from 'react';
import {StyleSheet, Text, View, Button, Image } from 'react-native';

import ListScreen from './ListScreen';
import firebase from '../../database/firebase';

const ImageScreen = (props) => { //props is an argumentto the function
  //console.log(props.navigation); //console.log(props)  //props.navigation create object with react navigation library from stack navigator
  //navigate function which we can use to change the content that is visible on the screen is inside that library
  const discription = <Text style={styles.discriptionStyle}>Where you want to visit</Text>
  return(
    <View>
        
        <Text style = {styles.textStyle} >Image Screen</Text>
        <ImageDetails 
            title = "Keels" 
            imageSource = {require('../../assets/keels.jpeg')}
        />
        <ImageDetails 
            title = "Arpico"
            imageSource = {require('../../assets/arpico.jpeg')}
        />
        <ImageDetails 
            title = "Cargills"
            imageSource = {require('../../assets/cargills.jpeg')}
        />
        <ImageDetails 
            title = "Sathosa"
            imageSource = {require('../../assets/sathosa.jpeg')}
        />

    </View>
); // propes inside ImageDetails tag we can create by our own 
};  
//Assign a number to a prop it has to be assign inside of a set of curly braces

const styles = StyleSheet.create ({
textStyle:{
    fontSize: 35
}
});

export default ImageScreen;
