import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import MealList from '../components/MealList/MealList';
import {MEALS} from '../data/dummyData';
import {FavoriteContext} from '../store/context/favoriteContext';
const Favorites = () => {
  // const favoriteCTX = useContext(FavoriteContext);
  const favoriteMealsIds = useSelector(state => state.favoriteMeals.ids);
  const favoriteMeals = MEALS.filter(meal =>
    favoriteMealsIds.includes(meal.id),
  );
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet</Text>
      </View>
    );
  }
  return <MealList items={favoriteMeals} />;
};
export default Favorites;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});
