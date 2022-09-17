import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const Subtitle = ({title}) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{title}</Text>
    </View>
  );
};
export default Subtitle;
const styles = StyleSheet.create({
  subtitle: {
    fontWeight: 'bold',
    color: '#e2b497',
    fontSize: 24,
    textAlign: 'center',
  },
  subtitleContainer: {
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 4,
  },
});
