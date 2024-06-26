/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useMemo, useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  Keyboard,
} from 'react-native';
import { ProjectBaseUrl } from '../Api_Management/ApiManager';
import RadioGroup from 'react-native-radio-buttons-group';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {launchImageLibrary} from 'react-native-image-picker';
import { Button } from 'react-native-elements';



const ItemCreate = ({navigation}) => {


  const[data, setData] = useState(null);

  const[name, setName] = useState();
  const[storeId, setStoreId] = useState();
  const[classify, setClassify] = useState();
  const[description, setDescription] = useState();
  const[price, setPrice] = useState();
  const[quantity, setQuantity] = useState();
  const[isAvailable, setIsAvailable] = useState();
  const[selectedImage, setSelectedImage] = useState();
  const[isImageSelected, setIsImageSelected] = useState(false);
  //const [Refreshing, setRefreshing] = useState(false);

  const Create = async () => {
    var form = new FormData();
    form.append('Name', name );
    form.append('StoreID', storeId);
    form.append('Classify', classify);
    form.append('Description', description);
    form.append('Price', price);
    form.append('Quantity', quantity);
    form.append('isAvailable', isAvailable);
    form.append('Image',{
        uri: selectedImage,
        name: 'test.jpg',
        type: 'image/jpeg',
    });
    console.log(form._parts);
    const requestOptions = {
      method: 'POST', // Specify the request method
      headers: {'Content-Type': 'multipart/form-data'}, // Specify the content type
      body: form, // Send the data in JSON format
    };
    fetch(ProjectBaseUrl + '/catalog-gateway/items/',requestOptions)
    // .then(response => response.json()) // Parse the response as JSON
    .then(responseData => console.log(responseData)) // Do something with the data
    .catch(error => console.error(error)); // Handle errors
  };
  useEffect(() => {
  },[]);


  // var form = new FormData();
  // form.append('Name', name );
  // form.append('StoreID', storeId);
  // form.append('Classify', classify);
  // form.append('Description', description);
  // form.append('Price', price);
  // form.append('Quantity', quantity);
  // form.append('isAvailable', isAvailable);
  // form.append('Image', selectedImage);
  // //form.append('Image')


  const radioButtons_isAvailable = useMemo(() => ([
    {
        id: true, // acts as primary key, should be unique and non-empty string
        label: 'Available',
        value: true,
    },
    {
        id: false,
        label: 'Unavailable',
        value: false,
    },
]), []);

const radioButtons_Classify = useMemo(() => ([
  {
      id: 'Laptop', // acts as primary key, should be unique and non-empty string
      label: 'Laptop',
      value: 'Laptop',
  },
  {
      id: 'Accessory',
      label: 'Accessory',
      value: 'Accessory',
  },
]), []);




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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ScrollView>
    <View style={{marginLeft: 20, marginRight: 20}}>
      <View style={styles.image_container}>
          <TouchableOpacity style={styles.image_picker}  onPress={() => OpenLibrary()}>
            {isImageSelected ? (<Image style={styles.image_picker} source={{uri: selectedImage}} />)
             :
             (<Image style={styles.image_picker} source={require('../assets/icons/Upload.png')} />) }
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
      <Text>Store's ID</Text>
          <TextInput
                  placeholder="Store ID"
                  placeholderColor="#c4c3cb"
                  style={styles.loginFormTextInput}
                  label="PhoneNumber"
                  returnKeyType="next"
                  value={storeId}
                  onChangeText={(text) => setStoreId(text)}
                  autoCapitalize="none"
              />
      <Text>Quantity</Text>
      <View>
        <RadioGroup
              radioButtons={radioButtons_Classify}
              onPress={setClassify}
              selectedId={classify}
              layout="row"
              //value={isAvailable}

          />
      </View>
      <Text>Description</Text>
          <TextInput
                  placeholder="Description"
                  placeholderColor="#c4c3cb"
                  style={styles.loginFormTextInput}
                  value={description}
                  label="description"
                  returnKeyType="next"
                  onChangeText={(text) => setDescription(text)}
              />
      <Text>Price</Text>
          <TextInput
                  placeholder="Price"
                  placeholderColor="#c4c3cb"
                  style={styles.loginFormTextInput}
                  value={(isNaN(price) ? ('') : price.toLocaleString('en-US'))}
                  label="price"
                  returnKeyType="next"
                  onChangeText={(text) => setPrice(parseInt(parseFloat(text.replace(/,/g, ''))))}
                  keyboardType="numeric"
              />
      <Text>Quantity</Text>
          <TextInput
                  placeholder="Quantity"
                  placeholderColor="#c4c3cb"
                  style={styles.loginFormTextInput}
                  value={(isNaN(quantity) ? ('') : quantity.toString())}
                  label="Quantity"
                  returnKeyType="done"
                  onChangeText={(text) => setQuantity(parseInt(text))}
                  keyboardType="numeric"
              />
      <Text>Quantity</Text>
      <View>
        <RadioGroup
              radioButtons={radioButtons_isAvailable}
              onPress={setIsAvailable}
              selectedId={isAvailable}
              layout="row"
              //value={isAvailable}

          />
      </View>
              <Button buttonStyle={styles.loginButton} title="Create" onPress={()=> {
                Create();
                navigation.goBack();
              }}/>
              </View>
    </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default ItemCreate;
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
    //backgroundColor: 'green',
    marginLeft: '25%',
  },
  image_picker: {
    width: 200,
    height: 200,
  },

});