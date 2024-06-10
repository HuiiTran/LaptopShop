/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageComponent,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import turnback from '../assets/icons/turnback.png';
import blank from '../assets/icons/blank.png';
import Cart from '../assets/icons/Cart.png';
import FavoriteInMenu from '../assets/icons/FavoriteInMenu.png';
import LaptopInMenu from '../assets/icons/LaptopInMenu.png';
import Logout from '../assets/icons/Logout.png';
import Order from '../assets/icons/Order.png';
import Report from '../assets/icons/Report.png';
import Setting from '../assets/icons/Setting.png';

import MenuItem from '../Components/MenuItem.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Menu = ({navigation}) => {
  const [userId, setUserId] = useState();

  useEffect(() =>{
    AsyncStorage.getItem('ID').then(ID => setUserId(ID));
  },[userId]);
  const ToProfile = () => {
    navigation.navigate('EditProfile', {userId: userId});
  };
  const ToOrderHistory = () => {
    navigation.navigate('OrderHistoryScreen', {userId: userId});
  }
  const ToChangePassword = () => {
    navigation.navigate('ChangePassword', {userId: userId});
  }
  return (
    <View style={{backgroundColor: '#fff'}}>
      <View showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <TouchableOpacity /*</View>onPress={() => {navigation.goBack();}}*/>
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
            }}/>
          </TouchableOpacity>

          <Text style={styles.logo}>Menu</Text>

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
      </View>
      <View style={{height:20}}></View>

      {/* <MenuItem methodOption={LaptopInMenu} menuName="Products"></MenuItem>
      <MenuItem methodOption={FavoriteInMenu} menuName="Favorite"></MenuItem> */}
      {/* <MenuItem methodOption={Cart} onPress={ToProfile()} menuName="Cart"></MenuItem>
      <MenuItem methodOption={Order} menuName="Order"></MenuItem>
      <MenuItem methodOption={Setting}  menuName="Profile"></MenuItem> */}
      {/* <MenuItem methodOption={Setting} menuName="Setting"></MenuItem> */}
      <TouchableOpacity onPress={() => ToProfile()} style={styles.container_2}>
      <View style={styles.locationContainer}>
        <Image style={styles.image} source={Setting}></Image>
      </View>

      <View style={styles.descriptionContainer}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.locationName}>Edit profile</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => ToOrderHistory()} style={styles.container_2}>
      <View style={styles.locationContainer}>
        <Image style={styles.image} source={Order}></Image>
      </View>

      <View style={styles.descriptionContainer}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.locationName}>Order history</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => ToChangePassword()} style={styles.container_2}>
      <View style={styles.locationContainer}>
        <Image style={styles.image} source={Setting}></Image>
      </View>

      <View style={styles.descriptionContainer}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.locationName}>Change password</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={{alignSelf:'center', marginTop:60}} onPress={() => navigation.replace('LoginScreen')}>
      <Image source={Logout}></Image>
    </TouchableOpacity>

    <View style={{height:400}}></View>
    </View>
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
  container_2:{
    flexDirection:'row',
    marginTop:30,
    marginLeft:30,
    alignItems:'center',
  },
  image:{
    width:'100%',
    height:'100%',
  },
  locationContainer:{
    width: 50, // Set container width
    height: 50, // Set container height
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
  },
  descriptionContainer:{
    marginLeft:30,
    flexDirection:'column',
  },
  locationName:{
    fontFamily:'Cuprum-Bold',
    color:'#000',
    fontSize:30,
    maxWidth: 250,
  },
});

export default Menu;
