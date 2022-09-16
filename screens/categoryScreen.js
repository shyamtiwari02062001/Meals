import React from 'react';
import {FlatList} from 'react-native';
import CategoryGriteTile from '../components/categoryGridTile';
import {CATEGORIES} from '../data/dummyData';

const CategoryScreen = () => {
  const renderCategoryItem = itemData => {
    return (
      <CategoryGriteTile
        title={itemData.item.title}
        color={itemData.item.color}
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