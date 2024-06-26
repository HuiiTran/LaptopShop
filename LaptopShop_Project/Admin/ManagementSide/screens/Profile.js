/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useId } from 'react';
import { useEffect, useState } from 'react';
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
  Keyboard,
  TouchableOpacity,
  Image,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ProjectBaseUrl } from '../Api_Management/ApiManager';

import UploadImage from '../assets/icons/Image';
import { Button } from 'react-native-elements';

const Profile = ({navigation}) => {

  const[userId, setUserId] = useState();
  const[userData, setUserData] = useState(null);

  const[name, setName] = useState();
  const[phone, setPhone] = useState();
  const[email, setEmail] = useState();
  const[userName, setUserName] = useState();
  const[oldPassword,setOldPassword] = useState();
  const[salary, setSalary] = useState();
  const[address, setAddress] = useState();

  const[loading, setLoading] = useState();


  const[image, setImage] = useState();
  const[selectedImage, setSelectedImage] = useState();
  const[isImageSelected, setIsImageSelected] = useState(false);


  const [isAdmin, setIsAdmin] = useState('Admin');
  useEffect(() => {
    AsyncStorage.getItem('ID').then(ID => setUserId(ID));
    AsyncStorage.getItem('role').then(role => setIsAdmin(role));
    const getInfor = async () => {
      console.log(isAdmin, useId);
      if(isAdmin === 'Admin'){
        try {
          fetch(ProjectBaseUrl + '/admin/' + userId)
          .then((response) => response.json())
          .then((responseJson) => {
            setUserData(responseJson);
            setName(responseJson.name);
            setPhone(responseJson.phoneNumber);
            setImage(responseJson.image);
            setOldPassword(responseJson.passWord);
            setEmail(responseJson.email);
            setUserName(responseJson.userName);
          });
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      }
      else if(isAdmin === 'Staff') {
        try {
          fetch(ProjectBaseUrl + '/staff/' + userId)
          .then((response) => response.json())
          .then((responseJson) => {
            setUserData(responseJson);
            setName(responseJson.name);
            setPhone(responseJson.phoneNumber);
            setImage(responseJson.image);
            setOldPassword(responseJson.passWord);
            setEmail(responseJson.email);
            setUserName(responseJson.userName);
            setAddress(responseJson.address);
            setSalary(responseJson.salary);
          });
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      }
    };
    getInfor();
  },[isAdmin, userId]);
  const Update = async () => {
    if(isAdmin === 'Admin'){
      var form = new FormData();
    form.append('UserName', userName );
    form.append('PassWord', oldPassword);
    form.append('Email', email);
    form.append('Name', name);
    form.append('PhoneNumber', phone);
    form.append('Image', {
      uri: selectedImage,
      name: 'test.jpg',
      type: 'image/jpeg',
    });
    console.log(form._parts);
    const requestOptions = {
      method: 'PUT', // Specify the request method
      headers: {'Content-Type': 'multipart/form-data'}, // Specify the content type
      body: form, // Send the data in JSON format
    };
    fetch(ProjectBaseUrl + '/admin/' + userId,requestOptions)
    // .then(response => response.json()) // Parse the response as JSON
    .then(responseData => console.log(responseData)) // Do something with the data
    .catch(error => console.error(error)); // Handle errors
    }
    else if(isAdmin === 'Staff') {
      var form = new FormData();
    form.append('UserName', userName );
    form.append('PassWord', oldPassword);
    form.append('Email', email);
    form.append('Address', address);
    form.append('Name', name);
    form.append('PhoneNumber', phone);
    form.append('Salary', salary);
    form.append('Image', {
      uri: selectedImage,
      name: 'test.jpg',
      type: 'image/jpeg',
    });
    console.log(form._parts);
    const requestOptions = {
      method: 'PUT', // Specify the request method
      headers: {'Content-Type': 'multipart/form-data'}, // Specify the content type
      body: form, // Send the data in JSON format
    };
    fetch(ProjectBaseUrl + '/staff/' + userId,requestOptions)
    // .then(response => response.json()) // Parse the response as JSON
    .then(responseData => console.log(responseData)) // Do something with the data
    .catch(error => console.error(error)); // Handle errors
    }
  };



  const logout = () =>{
    AsyncStorage.removeItem('AccessToken');
    AsyncStorage.removeItem('ID');
    AsyncStorage.removeItem('userName');
    AsyncStorage.removeItem('role');
  };
  const OpenLibrary = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };
    //setIsImageSelected(false);
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView>
        <View style={styles.image_container}>
          <TouchableOpacity style={styles.image_picker}  onPress={() => OpenLibrary()}>
          {isImageSelected ? (<Image style={styles.image_picker} source={{uri: selectedImage}} />) : (<Image style={styles.image_picker} source={{uri: `data:image/jpeg;base64,${image}`}} />)}
          </TouchableOpacity>
        </View>
          <Text>Name</Text>
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
          <Text>Phone number</Text>
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
          <Text>Email</Text>
          <TextInput
                  placeholder="Email"
                  placeholderColor="#c4c3cb"
                  style={styles.loginFormTextInput}
                  label="Email"
                  returnKeyType="next"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  autoCapitalize="none"
                  keyboardType="numeric"
              />
          <Text>Username</Text>
          <TextInput
                  placeholder="UserName"
                  placeholderColor="#c4c3cb"
                  style={styles.loginFormTextInput}
                  editable={false}
                  value={userName}
                  label="UserName"
                  returnKeyType="done"
                 //onChangeText={(text) => set(text)}
              />
          <Text>Password</Text>
          <TextInput
                  placeholder="Password"
                  placeholderColor="#c4c3cb"
                  style={styles.loginFormTextInput}
                 // secureTextEntry={true}
                  label="OldPassword"
                  value={oldPassword}
                  returnKeyType="done"
                  onChangeText={(text) => setOldPassword(text)}
              />
          {isAdmin === 'Staff' ? (
            <View>
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
                  <Text>Staff's salary</Text>
          <TextInput
                  placeholder="Salary"
                  placeholderColor="#c4c3cb"
                  style={styles.loginFormTextInput}
                  value={(isNaN(salary) ? ('') : salary.toLocaleString('en-US'))}
                  label="Salary"
                  returnKeyType="done"
                  //onChangeText={(text) => setSalary(parseInt(parseFloat(text.replace(/,/g, ''))))}
                  keyboardType="numeric"
                  editable={false}
              />
                </View>
            
          )
          :
          (
            <View></View>
          )
        }
          {/* <TextInput
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
              /> */}
          <Button
                    buttonStyle={styles.loginButton_1}
                    onPress={() => Update()}
                    title="UPDATE"
                  />
          <TouchableOpacity
                    style={styles.loginButton_2}
                    onPress={() =>{
                      navigation.replace('Login');
                      // console.log(userData);
                      // console.log(userData.id);
                    }}
                  >
                    <Text style={styles.log_out} >LOGOUT</Text>
                  </TouchableOpacity>
      </ScrollView>
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
  loginButton_1: {
    backgroundColor: '#753f00',
    borderRadius: 5,
    height: 65,
    marginTop: 20,
    width: 350,
    alignItems: 'center',
    alignSelf: 'center',
  },
  loginButton_2: {
    backgroundColor: '#fff',
    borderRadius: 5,
    height: 65,
    marginTop: 50,
    width: 350,
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: 'red',
    borderWidth: 1,
    marginBottom: 20,
  },
  log_out:{
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 15,
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