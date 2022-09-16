import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import CategoryScreen from './screens/categoryScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style={'light'} />
      <CategoryScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#24180f',
  },
});
