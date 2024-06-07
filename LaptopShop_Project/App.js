/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProductListScreen from './Screens/ProductListScreen';
import ProductDetail from './Screens/ProductDetailScreen';
import HomeScreen from './Screens/Home';
import SearchScreen from './Screens/Search'


const Stack = createNativeStackNavigator();
export default function App(){
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      {/* <Stack.Screen options={{headerShown: false}} name="Search" component={SearchScreen} /> */}
      <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
      <Stack.Screen options={{headerShown: false}} name="ProductListScreen" component={ProductListScreen} />
      <Stack.Screen options={{headerShown:false}}name="ProductDetailScreen" component={ProductDetail}/>
      <Stack.Screen options={{headerShown:false}}name="SearchScreen" component={SearchScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}
