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


const StaffCreate = ({navigation, route}) => {
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
    const[salary, setSalary] = useState();
    const[image, setImage] = useState();

    const[selectedImage, setSelectedImage] = useState();
  //const [Refreshing, setRefreshing] = useState(false);

  const getList = async () => {
    try {
      fetch(ProjectBaseUrl + '/staff/' + userId)
      .then((response) => response.json())
      .then((responseJson) => {
        setData(responseJson);
        setOldPassword(responseJson.passWord);
        setEmail(responseJson.email);
        setAddress(responseJson.address);
        setName(responseJson.name);
        setPhoneNumber(responseJson.phoneNumber);
        setSalary(responseJson.salary);
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



  var form = new FormData();
  form.append('UserName', userName );
  form.append('PassWord', newPassword);
  form.append('Email', email);
  form.append('Address', address);
  form.append('Name', name);
  form.append('PhoneNumber', phoneNumber);
  form.append('Salary', salary);




  const OpenLibrary = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
      }
    });
  }
  return (
    <View>
      {isLoading ? (
              <ActivityIndicator />
            ) : (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View >
      <View style={styles.image_container}>
          <TouchableOpacity style={styles.image_picker}  onPress={() => OpenLibrary()}>
            <Image style={styles.image_picker} source={{uri: `data:image/jpeg;base64,${image}`}} />
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
        <Text>Staff's name</Text>
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
        <Text>Staff's phone number</Text>
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
        <Text>Staff's salary</Text>
          <TextInput
                  placeholder="Salary"
                  placeholderColor="#c4c3cb"
                  style={styles.loginFormTextInput}
                  value={(isNaN(salary) ? ('') : salary.toLocaleString('en-US'))}
                  label="Salary"
                  returnKeyType="done"
                  onChangeText={(text) => setSalary(parseInt(parseFloat(text.replace(/,/g, ''))))}
                  keyboardType="numeric"
              />
              <Button title="Update" onPress={() => console.log(form)}/>
              </View>
              </TouchableWithoutFeedback>
            )}
    </View>

  );
};

export default StaffCreate;
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