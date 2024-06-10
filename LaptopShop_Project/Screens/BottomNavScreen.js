/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
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
  Image,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProductListScreen from './ProductListScreen';
import ProductDetail from './ProductDetailScreen';
import HomeScreen from './Home';
import SearchScreen from './Search'
import CartDetail from './CartDetailScreen.js'
import AddCreditCardScreen from './AddCreditCardScreen';
import Menu from './Menu.js';
import FavoriteList from './FavoriteList.js';
import OrderHistory from './OrderHistory.js';
import OrderDetail from './OrderDetail.js';
import Setting from './Setting.js';
import EditProfile from './EditProfile.js';
import ChangePassword from './ChangePassword.js';

const Tab = createBottomTabNavigator();


const BottomNavScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
      >
      <Tab.Screen name="Home" component={HomeScreen}
       options={{
        tabBarIcon: ({focused}) => (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
          source={require('../assets/icons/HomeIcon.png')}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
            tintColor: focused ? '#000000' : '#748c94',
          }}/>
            <Text
             style={{
              color: focused ? '#000000' : '#748c94',
              fontSize: 12,
             }}>
              Home
              </Text>
        </View>
      )}} />
      <Tab.Screen name="Cart" component={CartDetail}
       options={{
        tabBarIcon: ({focused}) => (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
          source={require('../assets/icons/CartIcon.png')}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
            tintColor: focused ? '#000000' : '#748c94',
          }}/>
            <Text
             style={{
              color: focused ? '#000000' : '#748c94',
              fontSize: 12,
             }}>
              Cart
              </Text>
        </View>
      )}} />
      <Tab.Screen name="Menu" component={Menu}
       options={{
        tabBarIcon: ({focused}) => (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
          source={require('../assets/icons/MenuIcon.png')}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
            tintColor: focused ? '#000000' : '#748c94',
          }}/>
            <Text
             style={{
              color: focused ? '#000000' : '#748c94',
              fontSize: 12,
             }}>
              Menu
              </Text>
        </View>
      )}} />
    </Tab.Navigator>

  );
};

export default BottomNavScreen;