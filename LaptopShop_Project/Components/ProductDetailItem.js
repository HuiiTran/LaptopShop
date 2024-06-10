/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  ScrollView,
  ToastAndroid,
  FlatList,
} from 'react-native';

import customText from '../Components/CustomText'
import Card from '../UI/Card';
import legion from '../assets/icons/Legion9i.png'
import ChangeStyleButton from '../assets/icons/ChangeProductLook.png'
import favorite from '../assets/icons/Favorite.png'
import addToCartButton from '../assets/icons/AddtoCartButton.png'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ProjectBaseUrl } from '../ApiManagement/ApiManager';

const ProductItem = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  const images = props.image;
  const [userId, setUserId] = useState();

  useEffect(() => {
    AsyncStorage.getItem('ID').then(ID => setUserId(ID));

  },[]);
  const AddToCart = async () => {
    const requestOptions = {
      method: 'POST', // Specify the request method
      headers: {'Content-Type': 'application/json'}, // Specify the content type
      body: JSON.stringify({
        'userId': userId,
        'catalogLaptopId': props.ItemId,
        'quantity': 1,
      }), // Send the data in JSON format
    };
    fetch(ProjectBaseUrl + '/inventory-gateway/cart',requestOptions)
    // .then(response => response.json()) // Parse the response as JSON
    .then(responseData => console.log(responseData)) // Do something with the data
    .catch(error => console.error(error))
    .finally(() => {
      ToastAndroid.showWithGravityAndOffset(
        'Success add to cart',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    }) // Handle errors
  };

  return (
    <View>
      <FlatList
          horizontal
          data={images}
          initialNumToRender={20}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <View style={styles.ScrollView}>
              <Image style={styles.Productsimage} source={{uri: `data:image/jpeg;base64,${item}`}}></Image>
            </View>
          )}
        />
      <View style={styles.descriptionContainer}>
        <Text style={styles.productName}>{props.name}</Text>
        <Text style={styles.productPrice}>{parseFloat(props.price).toLocaleString()} vnđ</Text>
        <Text style={styles.productDescription}>Product description:{"\n"}
        {props.description}
        </Text>

        <View style={styles.style}>
          <TouchableOpacity style={styles.touchableOpacity}>
            <Image style={{marginLeft:1, borderRadius:7}}source={favorite}></Image>
          </TouchableOpacity>
          <View style={{width:'9%'}}></View>
          <TouchableOpacity style={{flexDirection:'row'}} onPress={() => AddToCart()}>
            <Image style={{width:'80%', borderRadius:10}} source={addToCartButton}></Image>
          </TouchableOpacity>
        </View>

      <View style={{marginTop:30}}></View>

      </View>

      
    </View>
  );
};

const styles = StyleSheet.create({
  ScrollView: {
    marginTop:5,
    width:'200%',
    height:'auto',
    marginLeft: 70,
  },
  Productsimage:{
    marginHorizontal:25,
    width: 200,
    height: 200,
  },
  descriptionContainer:{
    marginTop:20,
    borderWidth:2,
    width:'101%',
    height:'auto',
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    flexDirection:'column',
    marginLeft:-1,
    color:'#fff'

  },
  productName:{
    fontFamily:'Cuprum-Bold',
    fontSize:35,
    marginLeft:30,
    color:'#000',
    marginTop:20
  },
  productPrice:{
    fontFamily:'Cuprum-Medium',
    color:'#F18825',
    fontSize:30,
    marginLeft:30,
    marginTop:20
  },
  productDescription:{
    fontFamily:'Cuprum-Regular',
    color:'#000',
    fontSize:24,
    marginLeft:30,
    marginTop:15,
    textAlign:'justify',
    width:'85%'
  },
  touchableOpacity:{
    marginLeft:30,
    width:'12%'
  },
  style:{
    flexDirection:'row',
    marginTop:20,
  }
});

export default ProductItem;
