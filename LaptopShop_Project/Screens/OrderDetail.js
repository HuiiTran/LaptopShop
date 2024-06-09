import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

import turnback from '../assets/icons/turnback.png';
import blank from '../assets/icons/blank.png';
import OrderDetailLocation from './OrderDetailLocation';
import OrderHistoryTabsItem from './OrderHistoryTabsItem';
import ReOrder from '../assets/icons/ReOrder.png'

const OrderDetail = () => {
  
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:'#fff'}}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <TouchableOpacity /*</View>onPress={() => {navigation.goBack();}}*/>
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

      <Text style={styles.orderID}>ID: abcsedf</Text> 
      {/* add ID: {order.id} in the text below */}

      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:15}}>
        <Text style={{fontFamily:'Cuprum-SemiBold', fontSize:20, marginLeft:30, color:'#000'}}>Delivery to</Text>
        <TouchableOpacity >
            <Text style={{fontFamily:'Cuprum-Bold', fontSize:20, color:'#F18825', marginRight:30}}>Add New Address</Text>
            {/* add change location if needed or just let it like normal text */}
        </TouchableOpacity>
      </View>
    
    <OrderDetailLocation></OrderDetailLocation>
     <View style={{height:20}}></View>
     <View style = {styles.line}></View>

    <OrderHistoryTabsItem></OrderHistoryTabsItem>
    <OrderHistoryTabsItem></OrderHistoryTabsItem>
    <OrderHistoryTabsItem></OrderHistoryTabsItem>
    <OrderHistoryTabsItem></OrderHistoryTabsItem>
    <OrderHistoryTabsItem></OrderHistoryTabsItem>


    <View style={styles.priceContainer}>
        <Text style={styles.priceText}>Subtotal </Text>
        {/* add {product.amount after subtotal} */}
        <Text style={styles.priceText}>$30000</Text>
    </View>

    <View style={styles.priceContainer}>
        <Text style={styles.priceText}>Ship fee </Text>
        {/* add {product.amount after subtotal} */}
        <Text style={styles.priceText}>$30000</Text>
    </View>

    <View style={styles.priceContainer}>
        <Text style={styles.totalPriceTextr}>Ship fee </Text>
        {/* add {product.amount after subtotal} */}
        <Text style={styles.totalPriceTextr}>$30000</Text>
    </View>

    <TouchableOpacity style={{marginTop:40, alignSelf:'center'}}>
        <Image source={ReOrder}></Image>
    </TouchableOpacity>

    {/* add onPress event for reOrder is order information, navigate to Cart Detail include these ordered products */}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
});

export default OrderDetail;