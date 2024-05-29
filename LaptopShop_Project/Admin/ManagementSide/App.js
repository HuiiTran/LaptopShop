/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import LoginScreen from './screens/LoginScreen.js';
import Home from './screens/Home.js';

import Management from './screens/Management.js';

import ItemList from './screens/ItemList.js';
import ItemDetails from './screens/ItemDetails.js';
import ItemCreate from './screens/ItemCreate.js';

import UserList from './screens/UserList.js';
import UserDetails from './screens/UserDetails.js';
import UserCreate from './screens/UserCreate.js';

import StaffList from './screens/StaffList.js';
import StaffDetails from './screens/StaffDetails.js';
import StaffCreate from './screens/StaffCreate.js';

import OrderList from './screens/OrderList.js';
 

import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry.js';
import { jwtDecode } from 'jwt-decode';

const Stack = createNativeStackNavigator();
const App = (navigation) => {
  const[isExpire, setIsExpire] = useState();

  useEffect(()=>{
    const getToken = async() => {
      var token1 = await AsyncStorage.getItem('AccessToken');//.then(AccessToken => setToken(AccessToken));
      console.log(token1);
      if(token1 === null)
      {
          return;
      }

      let currentDate = new Date();
      let decodedToken = jwtDecode(token1);
      if (decodedToken.exp * 1000 < currentDate.getTime()){
        setIsExpire(false);
        console.log(currentDate.getTime());
        console.log(decodedToken.exp * 1000);
      }
      else {
        setIsExpire(true);
      }
      console.log(isExpire);
    };
    getToken();
  },[isExpire]);
  return (
    <NavigationContainer>
      {isExpire ? (
      <Stack.Navigator>
          <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
          <Stack.Screen options={{headerShown: false}} name="Home" component={Home}/>
          <Stack.Screen options={{headerShown: false}} name="Management" component={Management}/>
          <Stack.Screen options={{headerTitle: ''}} name="StaffList" component={StaffList}/>
          <Stack.Screen options={{headerTitle: ''}} name="ItemList" component={ItemList}/>
          <Stack.Screen options={{headerTitle: ''}} name="OrderList" component={OrderList}/>
          <Stack.Screen options={{headerTitle: ''}} name="UserList" component={UserList}/>
          <Stack.Screen options={{headerTitle: ''}} name="ItemDetails" component={ItemDetails}/>
          <Stack.Screen options={{headerTitle: ''}} name="UserDetails" component={UserDetails}/>
          <Stack.Screen options={{headerTitle: ''}} name="StaffDetails" component={StaffDetails}/>
          <Stack.Screen options={{headerTitle: ''}} name="StaffCreate" component={StaffCreate}/>
          <Stack.Screen options={{headerTitle: ''}} name="UserCreate" component={UserCreate}/>
          <Stack.Screen options={{headerTitle: ''}} name="ItemCreate" component={ItemCreate}/>
        </Stack.Navigator>
      ) :
      (
        <Stack.Navigator>
          <Stack.Screen options={{headerShown: false}} name="Home" component={Home}/>
          <Stack.Screen options={{headerShown: false}} name="Management" component={Management}/>
          <Stack.Screen options={{headerTitle: ''}} name="StaffList" component={StaffList}/>
          <Stack.Screen options={{headerTitle: ''}} name="ItemList" component={ItemList}/>
          <Stack.Screen options={{headerTitle: ''}} name="OrderList" component={OrderList}/>
          <Stack.Screen options={{headerTitle: ''}} name="UserList" component={UserList}/>
          <Stack.Screen options={{headerTitle: ''}} name="ItemDetails" component={ItemDetails}/>
          <Stack.Screen options={{headerTitle: ''}} name="UserDetails" component={UserDetails}/>
          <Stack.Screen options={{headerTitle: ''}} name="StaffDetails" component={StaffDetails}/>
          <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
          <Stack.Screen options={{headerTitle: ''}} name="StaffCreate" component={StaffCreate}/>
          <Stack.Screen options={{headerTitle: ''}} name="UserCreate" component={UserCreate}/>
          <Stack.Screen options={{headerTitle: ''}} name="ItemCreate" component={ItemCreate}/>
        </Stack.Navigator>
      )}
  </NavigationContainer>
  );
};

export default App;
