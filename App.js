import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CategoryScreen from './screens/categoryScreen';
import MealsOverViewScreen from './screens/mealsOverviewScreen';
import MealDetailScreen from './screens/mealDetailScreen';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
import Favorite from './screens/favorites';
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#351401'},
        headerTintColor: '#fff',
        sceneContainerStyle: {backgroundColor: '#3f2f25'},
      }}>
      <Drawer.Screen
        name="Category"
        component={CategoryScreen}
        options={{title: 'All Categories'}}
      />
      <Drawer.Screen name="Favorite" component={Favorite} />
    </Drawer.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#351401'},
          headerTintColor: '#fff',
          contentStyle: {backgroundColor: '#3f2f25'},
        }}
        initialRouteName="MealsCategory">
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name="MealsOverview" component={MealsOverViewScreen} />
        <Stack.Screen name="MealDetail" component={MealDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
