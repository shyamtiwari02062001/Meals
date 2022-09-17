import React from 'react';
import {FlatList} from 'react-native';
import CategoryGriteTile from '../components/categoryGridTile';
import {CATEGORIES} from '../data/dummyData';

const CategoryScreen = ({navigation}) => {
  const renderCategoryItem = itemData => {
    const pressHandler = () => {
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id,
      });
    };
    return (
      <CategoryGriteTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      keyExtractor={item => item.id}
      numColumns={2}
    />
  );
};
export default CategoryScreen;
