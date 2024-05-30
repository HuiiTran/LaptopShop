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
  FlatList,
  Keyboard,
} from 'react-native';
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


  const putData = {
    state: state,
  };
  const requestOptions = {
    method: 'PUT', // Specify the request method
    headers: { 'Content-Type': 'application/json' }, // Specify the content type
    body: JSON.stringify(putData) // Send the data in JSON format
  };
  const Update = async () => {
    fetch(ProjectBaseUrl + '/bill/' + billId, requestOptions)
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
  const radioButtons_isAvailable = useMemo(() => ([
    {
        id: 'Pending', // acts as primary key, should be unique and non-empty string
        label: 'Pending',
        value: 'Pending',
        size: 15,
    },
    {
        id: 'Confirmed',
        label: 'Confirmed',
        value:'Confirmed',
        size: 15,
    },
    {
        id: 'Cancel',
        label: 'Cancel',
        value: 'Cancel',
        size: 15,
    },
    {
        id: 'Delivered',
        label: 'Delivered',
        value: 'Delivered',
        size: 15,
    },
]), []);





  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={{flex: 1}}>
        <View>
          <Text>Product list</Text>
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
          <Text>{parseInt(totalPrice).toLocaleString()} vnđ</Text>
        </Text>
        <Text>Status</Text>
        <RadioGroup
                radioButtons={radioButtons_isAvailable}
                onPress={setState}
                selectedId={state}
                layout="row"
                //value={isAvailable}

            />
        </View>
        <Button title="Update" onPress={() => Update()}/>
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
  }
});