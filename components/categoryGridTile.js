import React from 'react';
import {View, Pressable, Text, StyleSheet} from 'react-native';
const CategoryGriteTile = ({title, color}) => {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};
export default CategoryGriteTile;
const styles = StyleSheet.create({});
