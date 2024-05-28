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

import AsyncStorage from '@react-native-async-storage/async-storage';


const UserDetails = ({navigation, route}) => {
    const {itemId} = route.params;
    return (
    <View>
        <Text>{itemId}</Text>
    </View>

  );
};

export default UserDetails;