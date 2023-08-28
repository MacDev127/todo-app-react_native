import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Todo list</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: '#3AAFA9',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
});

export default Header;
