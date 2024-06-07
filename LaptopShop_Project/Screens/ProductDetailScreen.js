/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';

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
  FlatList,
  TouchableOpacity
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import cart from '../assets/icons/lucide_shopping-cart.png'
import turnback from '../assets/icons/turnback.png'
import ProductItem from '../Components/ProductDetailItem';
import { ProjectBaseUrl } from './Home';
import ChangeStyleButton from '../assets/icons/ChangeProductLook.png'
import favorite from '../assets/icons/Favorite.png'
import addToCartButton from '../assets/icons/AddtoCartButton.png'

const ProductDetailScreen = ({navigation, route, props}) => {
    const {itemId} = route.params;
    const[data, setData] = useState();
    
    const[name, setName] = useState();
    const[storeId, setStoreId] = useState();
    const[classify, setClassify] = useState();
    const[description, setDescription] = useState();
    const[price, setPrice] = useState();
    const[quantity, setQuantity] = useState();
    const[isAvailable, setIsAvailable] = useState();
    const[image, setImage] = useState([]);
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
        setImage(responseJson.image);
        //console.log(responseJson.image[0]);
      });
    } catch (error) {
      console.error(error);
    }
  };
    useEffect(() => {
      getList();
    },[]);
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {navigation.goBack();}}>
          <Image source={turnback} style={{marginLeft: 5,
            marginTop:10,
            marginRight:15,
            resizeMode: 'contain',
            height: 30,
            width: 30,}}
          />
        </TouchableOpacity>
        <Text style={styles.logo}>L & C</Text>
        <TouchableOpacity>
          <Image source={cart} style={{marginLeft: 10,
            marginTop:10,
            marginRight:15,
            resizeMode: 'contain',
            height: 35,
            width: 35,}} />
        </TouchableOpacity>
      </View>
      <ProductDetailItem
        name={name}
        price={price}
        description={description}
        image={image}
      />

    </ScrollView>

  );
};

const styles=StyleSheet.create({
  imageSize: {
    width: '100%',
    height: '100%',
  },
  ScrollView: {
    marginTop:5,
    width:'200%',
    height:'auto',
    marginLeft:-170,
  },
  Productsimage:{
    marginHorizontal:25
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
  },
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
