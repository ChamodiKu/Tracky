import React from 'react';
import {StyleSheet, View, Text, FlatList, Button, TouchableOpacity } from 'react-native'

import ImageDetails from '../component/ImageDetails'
const Template = () => {
    return(
        <View>
            <Text>
                <ImageDetails ImageTitle = "Arpico"/>
                <ImageDetails ImageTitle = "Cargills"/>
                <ImageDetails ImageTitle = "Keels"/>
                <ImageDetails ImageTitle = "Sathosa"/>
            </Text>
        </View>

    );
};


const style =StyleSheet.create ({
    /********************
    TemplateStyle:
        {
            fontSize: 20,
        }
    *********************/
});


export default Template;