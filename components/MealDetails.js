import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MealDetail = ({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.text, textStyle]}>{duration} min</Text>
      <Text style={[styles.text, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.text, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};
export default MealDetail;
const styles = StyleSheet.create({
  details: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  text: {
    color: '#000',
    fontSize: 16,
    marginHorizontal: 4,
  },
});
