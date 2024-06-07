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
  FlatList,
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
  const images = props.image;


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
          <TouchableOpacity style={{flexDirection:'row'}} onPress={() => console.log(images)}>
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
