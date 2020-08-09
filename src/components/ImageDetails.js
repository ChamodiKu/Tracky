import React from 'react';
import {
    StyleSheet, View, Text, FlatList, Button, TouchableOpacity, 
    Image      //import Image (a new primitive component)
} from 'react-native'

import firebase from '../../database/firebase';

const ImageDetails = props => {
    return(
        <View>
            <Image source={require('../../assets/beach.jpg')}/>
            <Text>{props.ImageTitle}</Text>
        </View>
    );
};


const style =StyleSheet.create ({
    ImageDetailsStyle:
        {
            fontSize: 20,
        }

});


export default ImageDetails;