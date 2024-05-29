/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { useEffect, useState } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { ProjectBaseUrl } from '../Api_Management/ApiManager';



const Profile = ({navigation}) => {
  const[userId, setUserId] = useState();
  const[userData, setUserData] = useState(null);
  const[name, setName] = useState();
  const[phone, setPhone] = useState();


  const[oldPassword,setOldPassword] = useState();

  const[loading, setLoading] = useState();

  useEffect(() => {
    const getInfor = async () => {
      AsyncStorage.getItem('ID').then(ID => setUserId(ID));
      try {
        fetch(ProjectBaseUrl + '/admin/' + userId)
        .then((response) => response.json())
        .then((responseJson) => {
          setUserData(responseJson[0]);
          setName(responseJson[0].name);
          setPhone(responseJson[0].phoneNumber);
        });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getInfor();
  },[userId]);
  const logout = () =>{
    AsyncStorage.removeItem('AccessToken');
    AsyncStorage.removeItem('ID');
    AsyncStorage.removeItem('userName');
    AsyncStorage.removeItem('role');
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
          <Text>Profile</Text>
          <TextInput
                  placeholder="Name"
                  placeholderColor="#c4c3cb"
                  style={styles.loginFormTextInput}
                  label="Name"
                  returnKeyType="next"
                  value={name}
                  onChangeText={(text) => setName(text)}
                  autoCapitalize="none"
              />
          <TextInput
                  placeholder="Phone number"
                  placeholderColor="#c4c3cb"
                  style={styles.loginFormTextInput}
                  label="PhoneNumber"
                  returnKeyType="next"
                  value={phone}
                  onChangeText={(text) => setPhone(text)}
                  autoCapitalize="none"
                  keyboardType="numeric"
              />
          <TextInput
                  placeholder="Old Password"
                  placeholderColor="#c4c3cb"
                  style={styles.loginFormTextInput}
                  secureTextEntry={true}
                  label="OldPassword"
                  returnKeyType="done"
                  onChangeText={(text) => setOldPassword(text)}
              />
          <TextInput
                  placeholder="New Password"
                  placeholderColor="#c4c3cb"
                  style={styles.loginFormTextInput}
                  secureTextEntry={true}
                  label="NewPassword"
                  returnKeyType="done"
                  onChangeText={(text) => setOldPassword(text)}
              />
          <TextInput
                  placeholder="Confirm New Password"
                  placeholderColor="#c4c3cb"
                  style={styles.loginFormTextInput}
                  secureTextEntry={true}
                  label="ConfirmNewPassword"
                  returnKeyType="done"
                  onChangeText={(text) => setOldPassword(text)}
              />
          <Button
                    onPress={() =>{
                      //navigation.replace('Login');
                    }}
                    title="Change"
                  />
          <Button
                    onPress={() =>{
                      navigation.replace('Login');
                      // console.log(userData);
                      // console.log(userData.id);
                    }}
                    title="Logout"
                  />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Profile;
const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    alignItems: 'center',
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 40,
    fontWeight: '800',
    marginTop: 150,
    marginBottom: 30,
    textAlign: 'center',
  },
  loginFormView: {
    flex: 1,
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  loginButton: {
    backgroundColor: '#000000',
    borderRadius: 5,
    height: 45,
    marginTop: 10,
    width: 350,
    alignItems: 'center',
  },
  warning: {
      color: 'red',
  },

});