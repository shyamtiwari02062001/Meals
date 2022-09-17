import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import MealItem from '../components/MealItem';
import {MEALS} from '../data/dummyData';
const MealsOverViewScreen = ({route}) => {
  const id = route.params.categoryId;
  const displayedMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(id) >= 0;
  });
  const renderMealItem = itemData => {
    return <MealItem title={itemData.item.title} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
      />
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
