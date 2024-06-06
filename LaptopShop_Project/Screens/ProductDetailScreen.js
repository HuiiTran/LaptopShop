/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

class Product {
  constructor(id, ownerId, title, imageUrl, description, preprice, price) {
    this.id = id;
    this.ownerId = ownerId;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
}

const PRODUCTS = [
  new Product(
    'p1',
    'u1',
    'Red Shirt',
    'https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg',
    'A red t-shirt, perfect for days with non-red weather.',
    100000
  ),
];

import ProductDetailItem from '../Components/ProductDetailItem'

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  FlatList
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import cart from '../assets/icons/lucide_shopping-cart.png'
import turnback from '../assets/icons/turnback.png'
import ProductItem from '../Components/ProductDetailItem';



const ProductDetailScreen = ({navigation, route, props}) => {
    //const {itemId} = route.params;
    return (
      <ScrollView showsVerticalScrollIndicator={false}>      
      <View style={styles.container}>
        <Image source={turnback} style={{marginLeft: 5,
          marginTop:10,
          marginRight:15,
          resizeMode: 'contain',
          height: 30,
          width: 30,}} />
        <Text style={styles.logo}>L & C</Text>
        <Image source={cart} style={{marginLeft: 10,
          marginTop:10,
          marginRight:15,
          resizeMode: 'contain',
          height: 35,
          width: 35,}} />
      </View>

      <ProductDetailItem></ProductDetailItem>
        

    </ScrollView>

  );
};

const styles=StyleSheet.create({
  image: {
    marginLeft: 10,
    marginTop:10,
    marginRight:15,
    resizeMode: 'contain',
    height: 42,
    width: 42,
  },
  container: {
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      padding:10
  },
  logo:{
      paddingTop:7,
      fontSize: 25,
      fontFamily: 'Cuprum-Bold',
      color:'#000000',
  },
  bulletin:{
    marginRight:10,
    marginBottom:15
  },
  line:{
      width:'91%',
      height:2,
      backgroundColor:'#382F29',
      opacity: 0.2,
      marginLeft:20,
      marginRight:20

  },
})


export default ProductDetailScreen;
