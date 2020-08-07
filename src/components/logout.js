import React from 'react';
import {StyleSheet, View, Text, FlatList, Button, TouchableOpacity  } from 'react-native'

const logout = () => {
    return(
        <View>
            <Text>would you like to logout</Text>
            <Button
                title = "Log out"
            />
        </View>

    );
};

const style =StyleSheet.create ({
    logoutStyle:
        {
            fontSize: 20,
        }

});

export default logout;