/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { ProjectBaseUrl } from '../Api_Management/ApiManager';
import { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  ActivityIndicator,
  TextInput,
  View,
  Button,
  Keyboard,
  TouchableOpacity,
  Image,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

import AsyncStorage from '@react-native-async-storage/async-storage';


const UserCreate = ({navigation}) => {

    const[isLoading, setIsLoading] = useState(false);
    const[data, setData] = useState(null);

    const[userName, setUserName] = useState();
    const[email, setEmail] = useState();
    const[address, setAddress] = useState();
    const[name, setName] = useState();
    const[phoneNumber, setPhoneNumber] = useState();
    const[image, setImage] = useState();
    const[password, setPassword] = useState();

    const[selectedImage, setSelectedImage] = useState();
    const[isImageSelected, setIsImageSelected] = useState(false);
  //const [Refreshing, setRefreshing] = useState(false);

  const getList = async () => {
    // try {
    //   fetch(ProjectBaseUrl + '/staff/' + userId)
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     setData(responseJson);
    //     setOldPassword(responseJson.passWord);
    //     setEmail(responseJson.email);
    //     setAddress(responseJson.address);
    //     setName(responseJson.name);
    //     setPhoneNumber(responseJson.phoneNumber);
    //     setSalary(responseJson.salary);
    //     setUserName(responseJson.userName);
    //     setImage(responseJson.image);
    //     //console.log(responseJson);
    //   });
    // } catch (error) {
    //   console.error(error);
    // } finally{
    //   setIsLoading(false);
    // }
  };
  useEffect(() => {
    //setIsLoading(true);
    getList();
  // if(Refreshing === true)
  //     {
  //       getList();
  //       setRefreshing(false);
  //     }
  },[]);



  var form = new FormData();
  form.append('UserName', userName );
  form.append('PassWord', password);
  form.append('Email', email);
  form.append('Address', address);
  form.append('Name', name);
  form.append('PhoneNumber', phoneNumber);
  form.append('Image', selectedImage);





  const OpenLibrary = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };
    setIsImageSelected(false);
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
        setIsImageSelected(false);
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
        setIsImageSelected(false);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
        setIsImageSelected(true);
      }
    });
  }
  return (
    <View>
      {isLoading ? (
              <ActivityIndicator />
            ) : (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView >
      <View style={styles.image_container}>
          <TouchableOpacity style={styles.image_picker}  onPress={() => OpenLibrary()}>
            {
            isImageSelected ? (<Image style={styles.image_picker} source={{uri: selectedImage}} />) :
            (<Image style={styles.image_picker} source={require('../assets/icons/Upload.png')} />)
            }
          </TouchableOpacity>
        </View>
      <Text>E-mail</Text>
          <TextInput
                  placeholder="E-mail"
                  placeholderColor="#c4c3cb"
                  style={styles.loginFormTextInput}
                  label="Email"
                  returnKeyType="next"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  autoCapitalize="none"
              />
      <Text>Address</Text>
          <TextInput
                  placeholder="Address"
                  placeholderColor="#c4c3cb"
                  style={styles.loginFormTextInput}
                  value={address}
                  label="Address"
                  returnKeyType="next"
                  onChangeText={(text) => setAddress(text)}
              />
        <Text>User's name</Text>
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
        <Text>User's phone number</Text>
          <TextInput
                  placeholder="Phone number"
                  placeholderColor="#c4c3cb"
                  style={styles.loginFormTextInput}
                  value={phoneNumber}
                  label="PhoneNumber"
                  returnKeyType="next"
                  onChangeText={(text) => setPhoneNumber(text)}
                  keyboardType="phone-pad"
              />
        <Text>UserName</Text>
          <TextInput
                  placeholder="UserName"
                  placeholderColor="#c4c3cb"
                  style={styles.loginFormTextInput}
                  label="UserName"
                  returnKeyType="next"
                  value={userName}
                  onChangeText={(text) => setUserName(text)}
                  //selectTextOnFocus={false}
                  autoCapitalize="none"
              />
        <Text>Password</Text>
          <TextInput
                  placeholder="Password"
                  placeholderColor="#c4c3cb"
                  style={styles.loginFormTextInput}
                  label="Password"
                  returnKeyType="next"
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  //selectTextOnFocus={false}
                  autoCapitalize="none"
              />

              <Button title="Create" onPress={() => console.log(form)}/>
              </ScrollView>
              </TouchableWithoutFeedback>
            )}
    </View>

  );
};

export default UserCreate;
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
  image_container: {
    width: 200,
    height: 200,
    //backgroundColor: 'green',
    marginLeft: '25%',
  },
  image_picker: {
    width: 200,
    height: 200,
  },


});