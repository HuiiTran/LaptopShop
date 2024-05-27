/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';


const Profile = ({navigation}) => {
  const logout = () =>{
    AsyncStorage.removeItem('AccessToken');
    AsyncStorage.removeItem('ID');
    AsyncStorage.removeItem('userName');
    AsyncStorage.removeItem('role');
  }
  return (
    <View>
        <Text>Profile</Text>
        <Button
                  onPress={() =>{navigation.replace('Login');}}
                  title="Logout"
                />
    </View>

  );
};

export default Profile;
