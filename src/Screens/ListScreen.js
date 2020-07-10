import React from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';
//import StyleSheet to add styles
//import Text to return texts
//import View to give same affect to a group
//import FlatList to insert list 
//import Button to insert a very simple component for showing a button and detecting a press
//import TouchableOpacity to insert highly customizable component that can detect a press on just about any kind of element


//Create ListScreen component
const ListScreen = () => {
    const details = [
        { name : 'Name1' ,   key : '0'},
        { address : 'Address1',  key : '1'},
        { contactNumber : 'Contact Number1',  key : '2'},
        { email : 'Email1' , key : '3'}
        //can asign a key manualy for every item in the array
    ];

  return (
    //create list 
    <FlatList     
        //horizontal     // ={true}  //can move horizontally with scroll bar
        //showsHorizontalScrollIndicator = {false}       //hide scroll bar in the bottom of screen
        keyExtractor = {detail => detail.name}   // can asign a key auto for every item in the array
        data={details} 
        //take one item and display(render) it as list
        renderItem = {({item}) => {   
            //element === {item: {name: 'Name'}, index : 0}
            return (
                <View>
                    <Text style={styles.textStyle}> Name:{item.name} 
                                                    Address:{item.address} 
                                                    Contact Number:{item.contactNumber} 
                                                    Email:{item.email}
                    </Text>

                    <Button      //create button element
                        onPress={() => console.log('Button pressed')}  //pressable button //to detect the press event use onPress prop.  using error function
                        title= "Edit details"    //display button name as Edit details
                    />

                    <TouchableOpacity onPress = {() => props.navigation.navigate('HelpScreen')}>      
                        <Text>Help</Text>      
                    </TouchableOpacity>

                </View>
                //<Text>{item.address}</Text>
                //<Text>{item.contactNumber}</Text>
                //<Text>{item.email}</Text>
                //<TouchableOpacity onPress = {() => console.log('Help Pressed')}>  use to create a touchable part 
                //onPress is not an element
                //the element(Help) inside the <Text></Text> tag are working as a touchable button
            );
        }}
    />
  );
};

//create styles
const styles = StyleSheet.create({     
    textStyle: {
        marginVertical: 50 //can move vertically and create spaces between every two items in the list
    }
});

export default ListScreen;    //after export ListScreen can access any place in this project
