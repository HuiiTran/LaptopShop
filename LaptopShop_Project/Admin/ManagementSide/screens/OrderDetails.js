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
  FlatList,
  Keyboard,
} from 'react-native';
import { Button } from 'react-native-elements';
import { ProjectBaseUrl } from '../Api_Management/ApiManager';
import RadioGroup from 'react-native-radio-buttons-group';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {launchImageLibrary} from 'react-native-image-picker';
import UploadImage from '../assets/icons/Image';



const OrderDetails = ({navigation, route}) => {
    const {billId} = route.params;


    const[data, setData] = useState(null);
    const[state, setState] = useState();
    const[itemList, setItemList] = useState([]);
    const[totalPrice, setTotalPrice] = useState();
    const[quantity, setQuantity] = useState([]);
    const[userId, setUserId] = useState();
    const[userAddress, setUserAddress] = useState();
    const[userPhoneNumber, setUserPhoneNumber] = useState();
    const[name, setName] = useState();
  const putData = {
    state: state,
  };
  const requestOptions = {
    method: 'PUT', // Specify the request method
    headers: { 'Content-Type': 'application/json' }, // Specify the content type
    body: JSON.stringify(putData) // Send the data in JSON format
  };
  const Update = async () => {
    fetch(ProjectBaseUrl + '/bill/' + billId, requestOptions);
    navigation.goBack();
  };
  const getUser = async (id) => {
    try {
      fetch(ProjectBaseUrl + '/users/' + id)
      .then((response) => response.json())
      .then((responseJson) => {
        setName(responseJson.name);
      });
    } catch (error) {
      console.error(error);
    } finally{
    }
  };
  const getList = async () => {
    try {
      fetch(ProjectBaseUrl + '/bill/' + billId)
      .then((response) => response.json())
      .then((responseJson) => {
        setData(responseJson);
        //console.log(responseJson[0].result);
        setState(responseJson[0].result.state);
        setItemList(responseJson[0].result.catalogItems);
        setTotalPrice(responseJson[0].result.totalPrice);
        setQuantity(responseJson[0].result.quantity);
        setUserId(responseJson[0].result.userId);
        setUserAddress(responseJson[0].result.address);
        setUserPhoneNumber(responseJson[0].result.phone);
        getUser(responseJson[0].result.userId);
      });
    } catch (error) {
      console.error(error);
    } finally{
    }
  };

  useEffect(() => {
    getList();
  },[]);
  const radioButtons_isAvailable = useMemo(() => ([
    {
        id: 'Pending', // acts as primary key, should be unique and non-empty string
        label: 'Pending',
        value: 'Pending',
        size: 25,
    },
    {
        id: 'Confirmed',
        label: 'Confirmed',
        value:'Confirmed',
        size: 25,
    },
    {
        id: 'Cancel',
        label: 'Cancel',
        value: 'Cancel',
        size: 25,
    },
    {
      id: 'Delivering',
      label: 'Delivering',
      value: 'Delivering',
      size: 25,
    },
    {
        id: 'Delivered',
        label: 'Delivered',
        value: 'Delivered',
        size: 25,
    },
]), []);





  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={{flex: 1, marginLeft: 15, marginRight: 15,}}>
        <View>
          <Text style={styles.text_title}>Product list</Text>
            <FlatList
            data={itemList}
            extraData={quantity}
            keyExtractor={({id}) => id}
            renderItem={({item, index}) => (
                <View
                    style={styles.ItemContainer}
                    >
                    <View>
                        <Image style={styles.imageSize} source={{uri: `data:image/jpeg;base64,${item.image}`}} />
                    </View>
                    <View>
                      <Text>{item.name}</Text>
                      <Text>{item.storeID}</Text>
                      <Text>{item.price.toLocaleString()} vnđ</Text>
                    </View>
                    <View>
                      <Text>x{quantity[index]}</Text>
                    </View>
                    <View>
                      <Text>{(quantity[index] * item.price).toLocaleString()} vnđ</Text>
                    </View>
                </View>
          )}
        />
        </View>
        <View>
        <Text>
          <Text style={styles.text_title}>Total price: </Text>
          <Text style={styles.font_size}>{parseInt(totalPrice).toLocaleString()} vnđ</Text>
        </Text>
        <Text>
          <Text style={styles.text_title}>User's name: </Text>
          <Text style={styles.font_size}>{name}</Text>
        </Text>
        <Text>
          <Text style={styles.text_title}>Address: </Text>
          <Text style={styles.font_size}>{userAddress}</Text>
        </Text>
        <Text>
          <Text style={styles.text_title}>Phone number: </Text>
          <Text style={styles.font_size}>{userPhoneNumber}</Text>
        </Text>
        <Text style={styles.text_title}>Status:</Text>
        <ScrollView horizontal={true}>
        <RadioGroup
                radioButtons={radioButtons_isAvailable}
                onPress={setState}
                selectedId={state}
                layout="row"
                //value={isAvailable}

            />
        </ScrollView>
        </View>
        <Button buttonStyle={styles.loginButton} title="UPDATE" onPress={() => Update()}/>
    </View>
    </TouchableWithoutFeedback>
  );
};

export default OrderDetails;
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
  ItemContainer: {
    borderColor: 'black',
    borderWidth: 1,
                margin: 5,
                padding: 5,
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: 15,
  },
  imageSize: {
    width: 70,
    height: 70,
  },
  text_title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
  },
  font_size:{
    fontSize: 15,
  },
});