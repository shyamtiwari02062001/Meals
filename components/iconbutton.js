import React from 'react';

import {Pressable, Image, StyleSheet} from 'react-native';
const IconButton = ({icon, color, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}>
      <Image source={icon} style={[styles.img, {tintColor: color}]} />
    </Pressable>
  );
};
export default IconButton;
const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
  img: {
    height: 24,
    width: 24,
    tintColor: '#fff',
  },
});
