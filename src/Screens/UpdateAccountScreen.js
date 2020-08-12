import React from 'react';
import {StyleSheet, View, Text, FlatList, Button, TouchableOpacity  } from 'react-native'

const UpdateAccountScreen = () => {
    return(
        <View>
            <Text>would you like to UpdateAccount</Text>
            <Button
                color="#28B463"
                title = "Update"
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

export default UpdateAccountScreen;