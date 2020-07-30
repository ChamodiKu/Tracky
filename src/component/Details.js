import React from 'react';
import {StyleSheet, View, Text, FlatList, Button, TouchableOpacity  } from 'react-native'

const Details = props => {//(props) => {
    //console.log(props);  //console.log() is a function in Js which is used to print any kind of variables defined before in it or to just print any message that needs to be displayed to the user
    return(
        <View>
            <Text>{props.ShopName}</Text>
        </View>
        //<Text>Details of the Shop List</Text>
        //display text
        //{props.ShopName} is a js variable
    );
};

const style =StyleSheet.create ({
    DetailsStyle:
        {
            fontSize: 20,
        }

});

export default Details;