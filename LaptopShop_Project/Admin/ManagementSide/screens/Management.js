/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { useEffect } from 'react';
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

import { ProjectBaseUrl } from '../Api_Management/ApiManager';
const Management = ({navigation}) => {
  const [isAdmin, setIsAdmin] = useState(String);

  useEffect(() => {
    AsyncStorage.getItem('role').then(role => setIsAdmin(role));
  }, []);

  return (
    <View style={styles.container}>
        {isAdmin === 'Admin' ? (
          <View style={styles.container}>
          <Button
                onPress={() => {navigation.navigate('StaffList');}}
                title="Staff Management"
              />
          <Button
                onPress={() =>{navigation.navigate('UserList');}}
                title="User Management"
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
        ) :
        (
        <View>
          <Button
                  onPress={() =>{navigation.navigate('ItemList');}}
                  title="Product Management"
                />
          <Button
                  onPress={() =>{navigation.navigate('OrderList');}}
                  title="Order Management"
                />
        </View>
        )}
      
    </View>

  );
};

export default Management;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    gap: 10,
  },
  item_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 30,
  },
  list_health: {
    flexDirection:'column', gap: 10,
    paddingTop: 20,
  },
  red_warning: {
    width: 20,
    height: 20,
    backgroundColor: 'red',
    position: 'absolute',
    right: 10,
  },
  green_warning: {
    width: 20,
    height: 20,
    backgroundColor: 'green',
    position: 'absolute',
    right: 10,
  },
  health_text: {
    fontWeight: 'bold',
    fontSize: 15,
    position: 'absolute',
    right: 40,
  }
});