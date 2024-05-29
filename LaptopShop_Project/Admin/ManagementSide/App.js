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
import StaffList from './screens/StaffList.js';
import Management from './screens/Management.js';
import ItemList from './screens/ItemList.js';
import OrderList from './screens/OrderList.js';
import UserList from './screens/UserList.js';
import ItemDetails from './screens/ItemDetails.js';
import UserDetails from './screens/UserDetails.js';
import StaffDetails from './screens/StaffDetails.js';

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
      if (decodedToken.exp < currentDate.getTime()){
        setIsExpire(false);
        console.log('false');
      }
      else {
        setIsExpire(true);
      }
    };
    getToken();

  },[]);
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
        </Stack.Navigator>
      ) :
      (
        <Stack.Navigator>
          {/* <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} /> */}
          <Stack.Screen options={{headerShown: false}} name="Home" component={Home}/>
          <Stack.Screen options={{headerShown: false}} name="Management" component={Management}/>
          <Stack.Screen options={{headerTitle: ''}} name="StaffList" component={StaffList}/>
          <Stack.Screen options={{headerTitle: ''}} name="ItemList" component={ItemList}/>
          <Stack.Screen options={{headerTitle: ''}} name="OrderList" component={OrderList}/>
          <Stack.Screen options={{headerTitle: ''}} name="UserList" component={UserList}/>
          <Stack.Screen options={{headerTitle: ''}} name="ItemDetails" component={ItemDetails}/>
          <Stack.Screen options={{headerTitle: ''}} name="UserDetails" component={UserDetails}/>
          <Stack.Screen options={{headerTitle: ''}} name="StaffDetails" component={StaffDetails}/>
        </Stack.Navigator>
      )}
  </NavigationContainer>
  );
};

export default App;
