import React, {useContext, useLayoutEffect} from 'react';
import {Text, Image, View, StyleSheet, ScrollView} from 'react-native';
import IconButton from '../components/iconbutton';
import List from '../components/MealDetail/list';
import Subtitle from '../components/MealDetail/subtitle';
import MealDetail from '../components/MealDetails';
import {MEALS} from '../data/dummyData';
import {FavoriteContext} from '../store/context/favoriteContext';
const MealDetailScreen = ({route, navigation}) => {
  const FavoriteMealCTX = useContext(FavoriteContext);
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  const mealIsFavorite = FavoriteMealCTX.ids.includes(mealId);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={
              mealIsFavorite
                ? require('../assets/star.png')
                : require('../assets/star1.png')
            }
            color="#fff"
            onPress={() => {
              if (mealIsFavorite) {
                FavoriteMealCTX.removeFavorite(mealId);
              } else {
                FavoriteMealCTX.addFavorite(mealId);
              }
            }}
          />
        );
      },
    });
  });
  return (
    <ScrollView
      style={styles.rootConatiner}
      showsVerticalScrollIndicator={false}>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.img} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetail
        textStyle={styles.detailText}
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <View style={styles.listOutterContainer}>
        <View style={styles.listContainer}>
          <Subtitle title="Ingredients" />
          <List data={selectedMeal.ingredients} />
          <Subtitle title="Steps" />
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};
export default MealDetailScreen;
const styles = StyleSheet.create({
  rootConatiner: {
    marginBottom: 32,
  },
  img: {
    height: 350,
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    margin: 8,
    textAlign: 'center',
  },
  detailText: {
    color: '#fff',
  },
  listContainer: {
    maxWidth: '80%',
  },
  listOutterContainer: {
    alignItems: 'center',
  },
});
