import React from 'react';
import {View, Pressable, Text, StyleSheet} from 'react-native';
const CategoryGriteTile = ({title, color, onPress}) => {
  return (
    <View style={[styles.gridItem, {backgroundColor: color}]}>
      <Pressable
        android_ripple={{color: '#fff'}}
        onPress={onPress}
        style={({pressed}) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};
export default CategoryGriteTile;
const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    elevation: 4,
    borderRadius: 8,
    overflow: 'hidden',
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#000',
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
