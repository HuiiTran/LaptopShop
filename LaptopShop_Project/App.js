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
import CartDetail from './Screens/CartDetailScreen.js'
import AddCreditCardScreen from './Screens/AddCreditCardScreen';
import SuccessfulOverlayMsg from './Components/SuccessfulOverlayMsg.js'
import Menu from './Screens/Menu.js';
import FavoriteList from './Screens/FavoriteList.js';
import OrderHistory from './Screens/OrderHistory.js';
import OrderDetail from './Screens/OrderDetail.js';
import Setting from './Screens/Setting.js';
import EditProfile from './Screens/EditProfile.js';
import ChangePassword from './Screens/ChangePassword.js';
import BottomNavScreen from './Screens/BottomNavScreen.js';
import LoginScreen from './Screens/Login.js';
import RegisterScreen from './Screens/RegisterScreen.js';

const Stack = createNativeStackNavigator();
export default function App(){
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen options={{headerShown:false}}name="BottomNavScreen" component={BottomNavScreen}/>
      <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
      <Stack.Screen options={{headerShown: false}} name="LoginScreen" component={LoginScreen} />
      <Stack.Screen options={{headerShown: false}} name="ChangePassword" component={ChangePassword} />
      <Stack.Screen options={{headerShown: false}} name="EditProfile" component={EditProfile} />
      <Stack.Screen options={{headerShown: false}} name="SettingScreen" component={Setting} />
      <Stack.Screen options={{headerShown: false}} name="OrderDetailScreen" component={OrderDetail} />
      <Stack.Screen options={{headerShown: false}} name="OrderHistoryScreen" component={OrderHistory} />
      <Stack.Screen options={{headerShown: false}} name="Menu" component={Menu} />
      <Stack.Screen options={{headerShown: false}} name="FavoriteList" component={FavoriteList} />
      <Stack.Screen options={{headerShown: false}} name="CartDetail" component={CartDetail} />
      <Stack.Screen options={{headerShown: false}} name="OverlayMsg" component={SuccessfulOverlayMsg} />
      <Stack.Screen options={{headerShown: false}} name="AddCreditCard" component={AddCreditCardScreen} />
      <Stack.Screen options={{headerShown: false}} name="Search" component={SearchScreen} />
      <Stack.Screen options={{headerShown: false}} name="ProductListScreen" component={ProductListScreen} />
      <Stack.Screen options={{headerShown:false}}name="ProductDetailScreen" component={ProductDetail}/>
      <Stack.Screen options={{headerShown:false}}name="SearchScreen" component={SearchScreen}/>
      <Stack.Screen options={{headerShown:false}}name="RegisterScreen" component={RegisterScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}
