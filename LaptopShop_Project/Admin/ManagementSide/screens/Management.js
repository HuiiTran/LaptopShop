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
} from 'react-native';
import { Button } from 'react-native-elements';
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
                buttonStyle={styles.loginButton}
                onPress={() => {navigation.navigate('StaffList');}}
                title="STAFF MANAGEMENT"
              />
          <Button
                buttonStyle={styles.loginButton}
                onPress={() =>{navigation.navigate('UserList');}}
                title="USER MANAGEMENT"
              />
          <Button
                buttonStyle={styles.loginButton}
                onPress={() =>{navigation.navigate('ItemList');}}
                title="PRODUCT MANAGEMENT"
              />
          <Button
                buttonStyle={styles.loginButton}
                onPress={() =>{navigation.navigate('OrderList');}}
                title="ORDER MANAGEMENT"
              />
        </View>
        ) :
        (
        <View>
          <Button
                  buttonStyle={styles.loginButton}
                  onPress={() =>{navigation.navigate('ItemList');}}
                  title="PRODUCT MANAGEMENT"
                />
          <Button
                  buttonStyle={styles.loginButton}
                  onPress={() =>{navigation.navigate('OrderList');}}
                  title="ORDER MANAGEMENT"
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
    gap: 30,
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
  },
  loginButton: {
    backgroundColor: '#753f00',
    borderRadius: 5,
    height: 65,
    marginTop: 10,
    width: 350,
    alignItems: 'center',
    alignSelf: 'center',
  },
});