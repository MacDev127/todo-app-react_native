import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

const TodoItem = ({ item, pressHandler }) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <MaterialIcons name="delete" size={24} color="black" />
        <Text>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'dashed',
    borderRadius: 10,
  },
});
export default TodoItem;
