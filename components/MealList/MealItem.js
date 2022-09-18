import React from 'react';
import {View, StyleSheet, Pressable, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MealDetail from '../MealDetails';
const MealItem = ({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={() =>
          navigation.navigate('MealDetail', {
            mealId: id,
          })
        }
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => (pressed ? styles.buttonPressed : null)}>
        <View>
          <Image source={{uri: imageUrl}} style={styles.img} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetail
          complexity={complexity}
          duration={duration}
          affordability={affordability}
        />
      </Pressable>
    </View>
  );
};
export default MealItem;
const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 8,
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    margin: 8,
  },
  img: {
    height: 200,
    width: '100%',
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
