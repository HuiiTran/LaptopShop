/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
  ToastAndroid,
} from 'react-native';

import turnback from '../assets/icons/turnback.png';
import blank from '../assets/icons/blank.png';
import OrderDetailLocation from './OrderDetailLocation';
import OrderHistoryTabsItem from './OrderHistoryTabsItem';
import ReOrder from '../assets/icons/ReOrder.png'

import { ProjectBaseUrl } from '../ApiManagement/ApiManager';

const OrderDetail = ({navigation, route}) => {
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
    state: 'Cancel',
  };
  const requestOptions = {
    method: 'PUT', // Specify the request method
    headers: { 'Content-Type': 'application/json' }, // Specify the content type
    body: JSON.stringify(putData) // Send the data in JSON format
  };
  const Update = async () => {
    fetch(ProjectBaseUrl + '/bill/' + billId, requestOptions);
    ToastAndroid.showWithGravityAndOffset(
      'Cancel success',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
    navigation.goBack();
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
      });
    } catch (error) {
      console.error(error);
    } finally{
    }
  };

  useEffect(() => {
    getList();
  },[]);
  return (
    <View showsVerticalScrollIndicator={false} style={{backgroundColor:'#fff', height: 1000}}>
        <View style={{ marginLeft: 15, marginRight: 15, gap: 15,}}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => {navigation.goBack();}}>
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

          <Text style={styles.logo}>Order Information</Text>

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
      <View>
      <Text  style={styles.text_title}>Order product</Text>
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
      <View style={{gap: 15}}>
        <Text>
          <Text style={styles.text_title}>Total price: </Text>
          <Text style={styles.font_size}>{parseInt(totalPrice).toLocaleString()} vnđ</Text>
        </Text>
        <Text>
          <Text style={styles.text_title}>Address: </Text>
          <Text style={styles.font_size}>{userAddress}</Text>
        </Text>
        <Text>
          <Text style={styles.text_title}>Phone number: </Text>
          <Text style={styles.font_size}>{userPhoneNumber}</Text>
        </Text>
        <Text>
          <Text style={styles.text_title}>Status: </Text>
          <Text>{state}</Text>
        </Text>
        </View>


        </View>
        {
          (state !== 'Confirmed' && state !== 'Delivering' && state !== 'Delivered') ? (
            <TouchableOpacity
            style={styles.loginButton_2}
            onPress={() =>{
              Update();
              // console.log(userData);
              // console.log(userData.id);
            }}
          >
            <Text style={styles.log_out} >Cancel</Text>
          </TouchableOpacity>
          )
          :
          (
            <View/>
          )
        }
    </View>
  );
};

const styles = StyleSheet.create({
  log_out:{
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 15,
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
  orderID: {
    textAlign: 'right',
    fontFamily: 'Cuprum-Bold',
    fontSize: 20,
    color: '#F18825',
    marginRight: 30,
    marginTop: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 30,
    marginRight: 30,
  },
  priceText: {
    fontFamily: 'Cuprum-SemiBold',
    fontSize: 20,
    color: '#000',
    marginTop: 5,
  },
  totalPriceTextr: {
    fontFamily: 'Cuprum-Bold',
    fontSize: 24,
    color: '#F18825',
    marginTop: 10,
  },
  line: {
    width: '86%',
    height: 2,
    backgroundColor: '#382F29',
    opacity: 0.2,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20,
  },
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

export default OrderDetail;