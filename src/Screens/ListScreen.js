import React from 'react';
import {StyleSheet, View, Text, FlatList, Button, TouchableOpacity  } from 'react-native';

import Details from '../components/Details';


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