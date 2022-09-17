import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
const MealItem = ({title}) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};
export default MealItem;
const styles = StyleSheet.create({
  text: {
    color: '#000',
  },
});
