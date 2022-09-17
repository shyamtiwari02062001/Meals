import React, {useLayoutEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import MealItem from '../components/MealItem';
import {CATEGORIES, MEALS} from '../data/dummyData';
const MealsOverViewScreen = ({route, navigation}) => {
  const id = route.params.categoryId;
  const displayedMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(id) >= 0;
  });
  const renderMealItem = itemData => {
    return (
      <MealItem
        id={itemData.item.id}
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        duration={itemData.item.duration}
      />
    );
  };
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(category => category.id === id).title;
    navigation.setOptions({title: categoryTitle});
  });
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
