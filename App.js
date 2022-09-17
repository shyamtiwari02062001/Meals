import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoryScreen from './screens/categoryScreen';
import MealsOverViewScreen from './screens/mealsOverviewScreen';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MealsCategory">
        <Stack.Screen name="MealsCategory" component={CategoryScreen} />
        <Stack.Screen name="MealsOverview" component={MealsOverViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
