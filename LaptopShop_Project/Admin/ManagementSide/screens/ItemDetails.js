/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
} from 'react-native';
import { ProjectBaseUrl } from '../Api_Management/ApiManager';

import AsyncStorage from '@react-native-async-storage/async-storage';


const ItemDetails = ({navigation, route}) => {
  const {itemId} = route.params;

  const[data, setData] = useState(null);
  const[name, setName] = useState();
  const[storeId, setStoreId] = useState();
  const[classify, setClassify] = useState();
  const[description, setDescription] = useState();
  const[price, setPrice] = useState();
  const[quantity, setQuantity] = useState();
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
  return (
    <View>
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
    </View>

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

});