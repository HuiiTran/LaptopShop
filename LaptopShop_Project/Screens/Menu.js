import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageComponent,
} from 'react-native';
import React from 'react';

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

const Menu = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
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
      </ScrollView>
      <View style={{height:20}}></View>

      <MenuItem methodOption={LaptopInMenu} menuName="Products"></MenuItem>
      <MenuItem methodOption={FavoriteInMenu} menuName="Favorite"></MenuItem>
      <MenuItem methodOption={Cart} menuName="Cart"></MenuItem>
      <MenuItem methodOption={Order} menuName="Order"></MenuItem>
      <MenuItem methodOption={Report} menuName="Report"></MenuItem>
      <MenuItem methodOption={Setting} menuName="Setting"></MenuItem>
    
    <TouchableOpacity style={{alignSelf:'center', marginTop:120}} onPress={() => navigation.replace('LoginScreen')}>
      <Image source={Logout}></Image>
    </TouchableOpacity>

    <View style={{height:100}}></View>
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
});

export default Menu;
