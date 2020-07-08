import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
    const discription = <Text style={styles.discriptionStyle}>Find, Where you want.</Text>
  return (
    <View>
      <Text style={styles.homeStyle}>Tracky</Text>
      {discription}
    </View>
  );
};

const styles = StyleSheet({
  homeStyle: {
    fontSize: 30
  },
  discriptionStyle: {
    fontSize: 20
  }
});

export default HomeScreen;
