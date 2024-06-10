/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  Alert,Keyboard,
  TouchableWithoutFeedback,
  ToastAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import turnback from '../assets/icons/turnback.png';
import blank from '../assets/icons/blank.png';
import UploadImage from '../assets/icons/Image';
import saveChanges from '../assets/icons/saveChanges.png';

import { launchImageLibrary } from 'react-native-image-picker';

import { ProjectBaseUrl } from '../ApiManagement/ApiManager';

const EditProfile = ({navigation, route}) => {
  const[isLoading, setIsLoading] = useState(true);
    const[data, setData] = useState(null);
    const[newPassword, setNewPassword] = useState('');
    const[confirmPassword, setConfirmPassword] = useState('');
    const[oldPassword, setOldPassword] = useState();

    const[userName, setUserName] = useState();
    const[email, setEmail] = useState();
    const[address, setAddress] = useState();
    const[name, setName] = useState();
    const[phoneNumber, setPhoneNumber] = useState();
    const[image, setImage] = useState();

    const[selectedImage, setSelectedImage] = useState();
    const[isImageSelected, setIsImageSelected] = useState(false);
    const {userId} = route.params;
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
    .catch(error => console.error(error))
    .finally(() => {
      ToastAndroid.showWithGravityAndOffset(
        'Update success',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    }); // Handle errors
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
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ScrollView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => {navigation.goBack()}} >
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

          <Text style={styles.logo}>Edit Profile</Text>

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

      <View style={styles.image_container}>
              <TouchableOpacity style={styles.image_picker}  onPress={() => OpenLibrary()}>
              {isImageSelected ? (<Image style={styles.image_picker} source={{uri: selectedImage}} />) : (<Image style={styles.image_picker} source={{uri: `data:image/jpeg;base64,${image}`}} />)}
              </TouchableOpacity>
            </View>

      <View style={styles.userInformationContainer}>
        <Text
          style={{
            fontFamily: 'Cuprum-Regular',
            fontSize: 20,
            color: '#B3B5B6',
          }}>
          Name
        </Text>
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
      </View>

      <View style={styles.userInformationContainer}>
        <Text
          style={{
            fontFamily: 'Cuprum-Regular',
            fontSize: 20,
            color: '#B3B5B6',
          }}>
          Email ID
        </Text>
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
      </View>

      <View style={styles.userInformationContainer}>
        <Text
          style={{
            fontFamily: 'Cuprum-Regular',
            fontSize: 20,
            color: '#B3B5B6',
          }}>
          Phone
        </Text>
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
      </View>

      <View style={styles.userInformationContainer}>
        <Text
          style={{
            fontFamily: 'Cuprum-Regular',
            fontSize: 20,
            color: '#B3B5B6',
          }}>
          Address
        </Text>
        <TextInput
                      placeholder="Address"
                      placeholderColor="#c4c3cb"
                      style={styles.loginFormTextInput}
                      value={address}
                      label="Address"
                      returnKeyType="next"
                      onChangeText={(text) => setAddress(text)}
                  />
      </View>

    <TouchableOpacity style={{alignSelf:'center', marginTop:40}} onPress={() => Update()}>
        <Image source={saveChanges}></Image>
    </TouchableOpacity>
      {/* process handle change option */}
      
    </ScrollView>
    </TouchableWithoutFeedback>
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
  upLoadImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 150,
    alignContent: 'center',
    width: 100,
    marginTop: 50,
  },
  userInformationContainer: {
    flexDirection: 'row',
    marginLeft: 30,
    alignItems: 'center',
    marginTop:20,
    justifyContent:'space-between',
    width:'86%'
  },
  input: {
    borderColor: '#B3B5B6',
    borderBottomWidth: 1,
    fontFamily: 'Cuprum-Bold',
    fontSize: 24,
    color: '#000',
    width: '75%',
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

export default EditProfile;
