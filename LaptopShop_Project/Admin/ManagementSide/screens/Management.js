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
  Button
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';


const Management = ({navigation}) => {

  return (
    <View style={styles.container}>
        <Button
              onPress={() => {navigation.navigate('StaffList');}}
              title="Staff Management"
            />
         <Button
              onPress={() =>{navigation.navigate('ItemList');}}
              title="Product Management"
            />
        <Button
              onPress={() =>{navigation.navigate('OrderList');}}
              title="Order Management"
            />
    </View>

  );
};

export default Management;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  }
});