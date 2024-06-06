/* eslint-disable prettier/prettier */
import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  ScrollView,
} from 'react-native';

import customText from '../Components/CustomText'
import Card from '../UI/Card';
import legion from '../assets/icons/Legion9i.png'
import ChangeStyleButton from '../assets/icons/ChangeProductLook.png'
import favorite from '../assets/icons/Favorite.png'
import addToCartButton from '../assets/icons/AddtoCartButton.png'

const ProductItem = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View>
      <ScrollView horizontal={true}style={styles.ScrollView}>
        <Image style={styles.Productsimage} source={legion}></Image>
        <Image style={styles.Productsimage} source={legion}></Image>
        <Image style={styles.Productsimage} source={legion}></Image>
        {/* truyền props vô đây */}

      </ScrollView>

      <Image style={{alignSelf:'center', marginTop:20}} source={ChangeStyleButton}></Image>
      {/* navigate hình */}

      <View style={styles.descriptionContainer}>
        <Text style={styles.productName}>Legion9i</Text>
        <Text style={styles.productPrice}>$123123123</Text>
        <Text style={styles.productDescription}>Key specifications:{"\n"}
        Display:  16-inch 3.2K Mini LED with 165Hz refresh rateCPU: 13th Generation Intel Core i9-13980HX (E-Core Max 4.00 GHz, P-Core Max 5.60 GHz with Turbo Boost, 24 Cores)GPU: NVIDIA GeForce RTX 4090 Laptop GPU, 16GB GDDR6 (150W TGP +25W Boost)Storage: Up to 2TB SSD and 64GB (2x32GB) 5600Mhz DDR5 RAM</Text>

        <View style={styles.style}>
          <TouchableOpacity style={styles.touchableOpacity}>
            <Image style={{marginLeft:1, borderRadius:7}}source={favorite}></Image>
          </TouchableOpacity>
          <View style={{width:'9%'}}></View>
          <TouchableOpacity style={{flexDirection:'row'}}>
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
  }
});

export default ProductItem;
