import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
const List = ({data}) => {
  return data.map(item => (
    <View key={item} style={styles.listItem}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  ));
};
export default List;
const styles = StyleSheet.create({
  listItem: {
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 12,
    marginVertical: 4,
    backgroundColor: '#e2b497',
  },
  itemText: {
    color: '#351401',
    textAlign: 'center',
    fontSize: 20,
  },
});
