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
import {Image} from 'react-native';
import Favorite from './screens/favorites';
import {Provider} from 'react-redux';
import {store} from './store/redux/store';
import FavoriteContextProvider from './store/context/favoriteContext';
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#351401'},
        headerTintColor: '#fff',
        sceneContainerStyle: {backgroundColor: '#3f2f25'},
        drawerContentStyle: {backgroundColor: '#351401'},
        drawerInactiveTintColor: '#fff',
        drawerActiveTintColor: '#e4baa1',
      }}>
      <Drawer.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({color, size}) => (
            <Image
              source={require('./assets/list.png')}
              style={{tintColor: color, height: size, width: size}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorite"
        component={Favorite}
        options={{
          drawerIcon: ({color, size}) => (
            <Image
              source={require('./assets/star.png')}
              style={{tintColor: color, height: size, width: size}}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
export default function App() {
  return (
    // <FavoriteContextProvider>
    <Provider store={store}>
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
    </Provider>
    // </FavoriteContextProvider>
  );
}
