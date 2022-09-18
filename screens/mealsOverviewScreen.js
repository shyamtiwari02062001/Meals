import React, {useLayoutEffect} from 'react';
import MealList from '../components/MealList/MealList';
import {CATEGORIES, MEALS} from '../data/dummyData';
const MealsOverViewScreen = ({route, navigation}) => {
  const id = route.params.categoryId;
  const displayedMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(id) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(category => category.id === id).title;
    navigation.setOptions({title: categoryTitle});
  });
  return <MealList items={displayedMeals} />;
};
export default MealsOverViewScreen;
