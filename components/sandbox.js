import { StyleSheet, View, Text } from 'react-native';
import React from 'react';

const Sandbox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>One</Text>
      <Text style={styles.boxTwo}>Two</Text>
      <Text style={styles.boxThree}>Three</Text>
      <Text style={styles.boxFour}>Four</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: '#555',
  },
  boxOne: {
    backgroundColor: 'green',
    padding: 10,
  },
  boxTwo: {
    backgroundColor: 'red',
    padding: 10,
  },
  boxThree: {
    backgroundColor: 'blue',
    padding: 10,
  },
  boxFour: {
    backgroundColor: 'yellow',
    padding: 10,
  },
});

export default Sandbox;
