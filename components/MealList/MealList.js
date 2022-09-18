import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import MealItem from './MealItem';
const MealList = ({items}) => {
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
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};
export default MealList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  text: {
    color: '#000',
  },
});
