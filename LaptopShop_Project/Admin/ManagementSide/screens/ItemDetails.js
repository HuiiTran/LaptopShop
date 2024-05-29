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
  Button,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  Keyboard,
} from 'react-native';
import { ProjectBaseUrl } from '../Api_Management/ApiManager';
import RadioGroup from 'react-native-radio-buttons-group';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {launchImageLibrary} from 'react-native-image-picker';




const ItemDetails = ({navigation, route}) => {
  const {itemId} = route.params;


  const[data, setData] = useState(null);
  const[name, setName] = useState();
  const[storeId, setStoreId] = useState();
  const[classify, setClassify] = useState();
  const[description, setDescription] = useState();
  const[price, setPrice] = useState();
  const[quantity, setQuantity] = useState();
  const[isAvailable, setIsAvailable] = useState();

  const[image, setImage] = useState();

    const[selectedImage, setSelectedImage] = useState();
  //const [Refreshing, setRefreshing] = useState(false);

  const getList = async () => {
    try {
      fetch(ProjectBaseUrl + '/catalog-gateway/items/' + itemId)
      .then((response) => response.json())
      .then((responseJson) => {
        setData(responseJson);
        setName(responseJson.name);
        setStoreId(responseJson.storeID);
        setDescription(responseJson.description);
        setPrice(responseJson.price);
        setQuantity(responseJson.quantity);
        setIsAvailable(responseJson.isAvailable);
        setClassify(responseJson.classify);
        setImage(responseJson.image[0]);
        //console.log(responseJson);
      });
    } catch (error) {
      console.error(error);
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


  var form = new FormData();
  form.append('Name', name );
  form.append('StoreID', storeId);
  form.append('Classify', classify);
  form.append('Description', description);
  form.append('Price', price);
  form.append('Quantity', quantity);
  form.append('isAvailable', isAvailable);
  //form.append('Image')


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
  console.log('hello')
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View>
      <View style={styles.image_container}>
          <TouchableOpacity style={styles.image_picker}  onPress={() => OpenLibrary()}>
            <Image style={styles.image_picker} source={{uri: `data:image/jpeg;base64,${image}`}} />
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
              <Button title="Update" onPress={()=> {
                console.log(form);
              }}/>
    </View>
    </TouchableWithoutFeedback>
  );
};

export default ItemDetails;
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