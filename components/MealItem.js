import React from 'react';
import {View, StyleSheet, Pressable, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
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
        <View style={styles.details}>
          <Text style={styles.text}>{duration} min</Text>
          <Text style={styles.text}>{complexity.toUpperCase()}</Text>
          <Text style={styles.text}>{affordability.toUpperCase()}</Text>
        </View>
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
  text: {
    color: '#000',
    fontSize: 16,
    marginHorizontal: 4,
  },
  img: {
    height: 200,
    width: '100%',
  },
  details: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
