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
  useColorScheme,
  ActivityIndicator,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Image,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UploadImage from '../assets/icons/Image';
import { Button } from 'react-native-elements';

const UserDetails = ({navigation, route}) => {
    const {userId} = route.params;
    const[isLoading, setIsLoading] = useState(true);
    const[data, setData] = useState(null);
    const[newPassword, setNewPassword] = useState();
    const[oldPassword, setOldPassword] = useState();

    const[userName, setUserName] = useState();
    const[email, setEmail] = useState();
    const[address, setAddress] = useState();
    const[name, setName] = useState();
    const[phoneNumber, setPhoneNumber] = useState();
    const[image, setImage] = useState();

    const[selectedImage, setSelectedImage] = useState();
    const[isImageSelected, setIsImageSelected] = useState(false);

  //const [Refreshing, setRefreshing] = useState(false);
  const Update = async () => {
    var form = new FormData();
    form.append('UserName', userName );
    form.append('PassWord', newPassword);
    form.append('Email', email);
    form.append('Address', address);
    form.append('Name', name);
    form.append('PhoneNumber', phoneNumber);
    if(isImageSelected === true)
    {
      form.append('Image', {
      uri: selectedImage,
      name: 'test.jpg',
      type: 'image/jpeg',
    });
  }
    console.log(form._parts);
    const requestOptions = {
      method: 'PUT', // Specify the request method
      headers: {'Content-Type': 'multipart/form-data'}, // Specify the content type
      body: form, // Send the data in JSON format
    };
    fetch(ProjectBaseUrl + '/users/' + userId,requestOptions)
    // .then(response => response.json()) // Parse the response as JSON
    .then(responseData => console.log(responseData)) // Do something with the data
    .catch(error => console.error(error)); // Handle errors
  };
  const getList = async () => {
    try {
      fetch(ProjectBaseUrl + '/users/' + userId)
      .then((response) => response.json())
      .then((responseJson) => {
        setData(responseJson);
        setOldPassword(responseJson.passWord);
        setNewPassword(responseJson.passWord);
        setEmail(responseJson.email);
        setAddress(responseJson.address);
        setName(responseJson.name);
        setPhoneNumber(responseJson.phoneNumber);
        setUserName(responseJson.userName);
        setImage(responseJson.image);
        //console.log(responseJson);
      });
    } catch (error) {
      console.error(error);
    } finally{
      setIsLoading(false);
    }
  };
  useEffect(() => {
    setIsLoading(true);
    getList();
  // if(Refreshing === true)
  //     {
  //       getList();
  //       setRefreshing(false);
  //     }
  },[]);



  // var form = new FormData();
  // form.append('UserName', userName );
  // form.append('PassWord', newPassword);
  // form.append('Email', email);
  // form.append('Address', address);
  // form.append('Name', name);
  // form.append('PhoneNumber', phoneNumber);





  const OpenLibrary = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };
    console.log('hello')
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
        setIsImageSelected(false);
        setImage(UploadImage);
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
        setIsImageSelected(false);
        setImage(UploadImage);
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
        <View style={{marginLeft: 20, marginRight: 20}}>
          <View style={styles.image_container}>
              <TouchableOpacity style={styles.image_picker}  onPress={() => OpenLibrary()}>
              {isImageSelected ? (<Image style={styles.image_picker} source={{uri: selectedImage}} />) : (<Image style={styles.image_picker} source={{uri: `data:image/jpeg;base64,${image}`}} />)}
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
          <Text>UserName</Text>
              <TextInput
                      placeholder="UserName"
                      placeholderColor="#c4c3cb"
                      style={styles.loginFormTextInput}
                      label="UserName"
                      returnKeyType="next"
                      value={userName}
                      //onChangeText={(text) => setUserName(text)}
                      editable={false}
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
                      value={newPassword}
                      onChangeText={(text) => setNewPassword(text)}
                      //editable={false}
                      //selectTextOnFocus={false}
                      autoCapitalize="none"
                  />
          <Text>User's address</Text>
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
                  <Button buttonStyle={styles.loginButton} title="Update" onPress={() => {Update(); navigation.goBack();}}/>
                  {/* <Button title="Delete" onPress={() => navigation.goBack()}/> */}
                  </View>
              </ScrollView>
              </TouchableWithoutFeedback>
            )}
    </View>

  );
};

export default UserDetails;
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
    backgroundColor: '#753f00',
    borderRadius: 5,
    height: 65,
    marginTop: 40,
    width: 370,
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 30,
  },
  warning: {
      color: 'red',
  },
  image_container: {
    width: 200,
    height: 200,
    borderRadius: 50,
    marginLeft: '25%',
  },
  image_picker: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },

});