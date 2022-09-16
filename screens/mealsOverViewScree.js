import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MEALS} from '../data/dummyData';
const MealsOverViewScreen = ({route}) => {
  const id = route.params.categoryId;
  console.log(id);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Meals OverView Screen {id}</Text>
    </View>
  );
};
export default MealsOverViewScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  text: {
    color: '#000',
  },
});
