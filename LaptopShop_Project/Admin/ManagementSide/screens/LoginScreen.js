/* eslint-disable prettier/prettier */
import React from 'react';
import { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  Keyboard,
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Button } from 'react-native-elements';

import { emailValidator } from '../Validation/emailValidator';
import { passwordValidator } from '../Validation/passwordValidator';


import { user_login } from '../Api_Management/loginAPI';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({navigation}) {
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    const [data_, setData] = useState({});

  const onLoginPress = async () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    user_login({
      userName: email.value,
      password: password.value,
    }).then((result) => {
      console.log(result);
      if(result.status === 200 ){
        console.log("hello");
        // AsyncStorage.setItem("AccessToken", result.data.jwtToken);
        // AsyncStorage.setItem("ID", result.data.id);
        // AsyncStorage.setItem("userName", result.data.userName);
        // AsyncStorage.setItem("role", result.data.role);
        // if(result.data.role === 'Admin' || result.data.role === 'Staff'){
        //   navigation.replace("Home");
        // }
      }
    }).catch(err =>{
      console.error(err);}
    );
  };



  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Text style={styles.logoText}>Login</Text>
            <TextInput
                placeholder="Username"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
                label="Email"
                returnKeyType="next"
                value={email.value}
                onChangeText={(text) => setEmail({ value: text, error: '' })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
            />
            <Text style={ styles.warning}>{(email.error === '') ? '' : email.error}</Text>
            <TextInput
                placeholder="Password"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
                secureTextEntry={true}
                label="Password"
                returnKeyType="done"
                value={password.value}
                onChangeText={(text) => setPassword({ value: text, error: '' })}
                error={!!password.error}
                errorText={password.error}
            />
            <Text style={ styles.warning}>{(password.error === '') ? '' : password.error}</Text>
            <Button
              buttonStyle={styles.loginButton}
              onPress={() => onLoginPress()}
              title="Login"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};


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