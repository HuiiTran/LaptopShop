/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  ToastAndroid,
  Alert,

} from 'react-native';
import React, {useState, useEffect} from 'react';

import turnback from '../assets/icons/turnback.png';
import blank from '../assets/icons/blank.png';
import saveChanges from '../assets/icons/saveChanges.png'

import { ProjectBaseUrl } from './Home';

const ChangePassword = ({navigation, route}) => {
  const {userId} = route.params;
  
    const[data, setData] = useState(null);
    const[newPassword, setNewPassword] = useState('');
    const[confirmPassword, setConfirmPassword] = useState('');
    const[oldPassword, setOldPassword] = useState();
    const[currentPassword, setCurrentPassword] = useState('');

    const[userName, setUserName] = useState();
    const[email, setEmail] = useState();
    const[address, setAddress] = useState();
    const[name, setName] = useState();
    const[phoneNumber, setPhoneNumber] = useState();
    const[image, setImage] = useState();

    const[selectedImage, setSelectedImage] = useState();
    const[isImageSelected, setIsImageSelected] = useState(false);

    const Update = async () => {
      console.log(newPassword, confirmPassword, currentPassword);
      if(currentPassword !== oldPassword)
        {
          Alert.alert('Input Error', 'Your current password input is incorrect, please check again', [
            {text: 'OK'},
          ]);
          return;
        }
      if(newPassword !== confirmPassword)
        {
          Alert.alert('Input Error', 'Your new password and confirm password must be the same', [
            {text: 'OK'},
          ]);
          return;
        }
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
      .then(responseData => {
        console.log(responseData);
        if(responseData.status === 400)
          {
            ToastAndroid.showWithGravityAndOffset(
              'Update fail',
              ToastAndroid.LONG,
              ToastAndroid.BOTTOM,
              25,
              50,
            );
          }
          else if(responseData.status === 204)
            {
              ToastAndroid.showWithGravityAndOffset(
                'Update success',
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50,
              );
            }
      }) // Do something with the data
      .catch(error => console.error(error))
      .finally(() => {
        
      }); // Handle errors
    };
    const getList = async () => {
      try {
        fetch(ProjectBaseUrl + '/users/' + userId)
        .then((response) => response.json())
        .then((responseJson) => {
          setData(responseJson);
          setOldPassword(responseJson.passWord);
          //setNewPassword(responseJson.passWord);
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
      }
    };
    useEffect(() => {
      getList();
    // if(Refreshing === true)
    //     {
    //       getList();
    //       setRefreshing(false);
    //     }
    },[]);

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <TouchableOpacity /*</View>onPress={() => {navigation.goBack();}}*/>
            <Image
              source={turnback}
              style={{
                marginLeft: 5,
                marginTop: 10,
                marginRight: 15,
                resizeMode: 'contain',
                height: 30,
                width: 30,
              }}
            />
          </TouchableOpacity>

          <Text style={styles.logo}>Change Password</Text>

          <Image
            source={blank}
            style={{
              marginLeft: 10,
              marginTop: 10,
              marginRight: 15,
              resizeMode: 'contain',
              height: 35,
              width: 35,
              opacity: 0,
            }}
          />
        </View>
      </ScrollView>

    <View style={{height:150}}></View>

      <TextInput
        style={styles.input}
        placeholder="Current Password"
        placeholderTextColor='#B3B5B6'
        value={currentPassword}
        onChangeText={(text) => setCurrentPassword(text)}
        secureTextEntry
      />
      {/* <TouchableOpacity style={{marginLeft:34,marginTop:4, width:'40%'}}>
        <Text style={{fontFamily:'Cuprum-Bold', fontSize:22, color:'#000'}}>Forgor Password?</Text>
      </TouchableOpacity> */}

      <TextInput
        style={styles.input}
        placeholder="New Password"
        placeholderTextColor='#B3B5B6'
        value={newPassword}
        onChangeText={(text) => setNewPassword(text)}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm New Password"
        placeholderTextColor='#B3B5B6'
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        secureTextEntry
      />

      <TouchableOpacity style={{alignSelf:'center', marginTop:50}} onPress={() => Update()}>
        <Image source={saveChanges}>
        </Image>
      </TouchableOpacity>
{/* add onPress handle this changes */}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  logo: {
    paddingTop: 7,
    fontSize: 25,
    fontFamily: 'Cuprum-Bold',
    color: '#000000',
  },
  input: {
    borderColor: '#B3B5B6',
    borderBottomWidth: 1,
    fontFamily: 'Cuprum-Bold',
    fontSize: 24,
    color: '#B3B5B6',
    width: '82%',
    marginLeft: 30,
    marginTop:20
  },
});

export default ChangePassword;
