import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoryScreen from './screens/categoryScreen';
import MealsOverViewScreen from './screens/mealsOverviewScreen';
import MealDetailScreen from './screens/mealDetailScreen';
const Stack = createNativeStackNavigator();
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
          name="MealsCategory"
          component={CategoryScreen}
          options={{
            title: 'Meals Categories',
          }}
        />
        <Stack.Screen
          name="MealsOverview"
          component={MealsOverViewScreen}
          // options={({route, navigation}) => {
          //   const catId = route.params.categoryId;
          //   return {
          //     title: catId,
          //   };
          // }}
        />
        <Stack.Screen name="MealDetail" component={MealDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
