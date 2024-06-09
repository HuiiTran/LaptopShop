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

import { ProjectBaseUrl } from '../Api_Management/ApiManager';

import UploadImage from '../assets/icons/Image';

const Profile = ({navigation}) => {

  const[userId, setUserId] = useState();
  const[userData, setUserData] = useState(null);
  const[name, setName] = useState();
  const[phone, setPhone] = useState();
  const[email, setEmail] = useState();
  const[userName, setUserName] = useState();

  const[oldPassword,setOldPassword] = useState();

  const[loading, setLoading] = useState();


  const[image, setImage] = useState();
  const[selectedImage, setSelectedImage] = useState();
  const[isImageSelected, setIsImageSelected] = useState(false);

  useEffect(() => {
    const getInfor = async () => {
      AsyncStorage.getItem('ID').then(ID => setUserId(ID));
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
    };
    getInfor();
  },[userId]);
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
      <View>
        <View style={styles.image_container}>
          <TouchableOpacity style={styles.image_picker}  onPress={() => OpenLibrary()}>
          {isImageSelected ? (<Image style={styles.image_picker} source={{uri: selectedImage}} />) : (<Image style={styles.image_picker} source={{uri: `data:image/jpeg;base64,${image}`}} />)}
          </TouchableOpacity>
        </View>
          {/* <Text>Profile</Text> */}
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
          <TextInput
                  placeholder="UserName"
                  placeholderColor="#c4c3cb"
                  style={styles.loginFormTextInput}
                  editable={false}
                  value={userName}
                  label="OldPassword"
                  returnKeyType="done"
                 // onChangeText={(text) => s(text)}
              />
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