import React from 'react';
import {Text} from 'react-native';

const MealDetailScreen = ({route, navigation}) => {
  const mealId = route.params.mealId;
  return <Text>Meal detail {mealId}</Text>;
};
export default MealDetailScreen;
