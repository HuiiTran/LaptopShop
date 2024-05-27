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

import Profile from './Profile';
import DashBoard from './DashBoard';
import Management from './Management';

const Tab = createBottomTabNavigator();


const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={{ 
        tabBarShowLabel: false,
        headerShown: false,
      }}
      >
      <Tab.Screen name="DashBoard" component={DashBoard}
       options={{
        tabBarIcon: ({focused}) => (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
          source={require('../assets/icons/DashBoard.png')}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
            tintColor: focused ? '#753f00' : '#748c94',
          }}/>
            <Text
             style={{
              color: focused ? '#753f00' : '#748c94',
              fontSize: 12,
             }}>
              DashBoard
              </Text>
        </View>
      )}} />
      <Tab.Screen name="Management" component={Management}
       options={{
        tabBarIcon: ({focused}) => (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
          source={require('../assets/icons/Management.png')}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
            tintColor: focused ? '#753f00' : '#748c94',
          }}/>
            <Text
             style={{
              color: focused ? '#753f00' : '#748c94',
              fontSize: 12,
             }}>
              Management
              </Text>
        </View>
      )}} />
      <Tab.Screen name="Profile" component={Profile}
       options={{
        tabBarIcon: ({focused}) => (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
          source={require('../assets/icons/Profile.png')}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
            tintColor: focused ? '#753f00' : '#748c94',
          }}/>
            <Text
             style={{
              color: focused ? '#753f00' : '#748c94',
              fontSize: 12,
             }}>
              Profile
              </Text>
        </View>
      )}} />
    </Tab.Navigator>

  );
};

export default Home;
