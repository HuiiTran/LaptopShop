import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import mapsLocation from '../assets/icons/MapsLocation.png';
import smallLocation from '../assets/icons/small_location.png';
import phoneNumber from '../assets/icons/solar_phone-bold.png';

const OrderDetailLocation = () => {
  return (
    <View style={styles.container}>
      <Image source={mapsLocation}></Image>

      <View style={{flexDirection: 'column', gap:15}}>
        <View style={styles.locationContainer}>
          <Image style={{marginTop:4}} source={smallLocation}></Image>
          <Text numberOfLines={1} ellipsizeMode='tail' style={styles.locationName}>Jan Pawel II St. 19/2</Text>
        </View>

        <View style={styles.phoneNumberContainer}>
          <Image style={{marginTop:4}} source={phoneNumber}></Image>
          <Text style={styles.phoneNumberData}>+1 454 1234 8761</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderRadius: 10,
    width: '86%',
    flexDirection: 'row',
    padding: 8,
    marginLeft: 30,
    marginTop: 20,
    alignItems: 'center',
    borderColor:'#787064'
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  locationName: {
    fontFamily: 'Cuprum-Bold',
    fontSize: 24,
    color: '#000',
    marginLeft:10,
    width:'80%'
  },
  phoneNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  phoneNumberData:{
    fontFamily: 'Cuprum-Bold',
    fontSize: 24,
    color: '#000',
    marginLeft:10
  }
});

export default OrderDetailLocation;
