import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import legion from '../assets/icons/Legion9i.png';

const OrderHistoryTabsItem = ({quantity, date}) => {
  return (
    <View style={styles.container}>
      <Image source={legion} style={styles.image} />
      <View>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.productName}>
          {' '}
          ProductName 111111111111111111111{' '}
        </Text>

        <View style={styles.descriptionContainer}>
          <Text style={styles.quantity}>Quantity: {quantity}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
    width: '86%',
    paddingVertical:20,
    alignSelf:'center'
  },
  image: {
    width: '25%',
    height: '150%',
    marginRight: 15,
    marginLeft: 0,
  },
  productName: {
    fontSize: 22,
    marginBottom: 8,
    width: '90%',
    fontFamily:'Cuprum-Bold',
    color:'#000'
  },
  quantity: {
    fontSize: 16,
    marginBottom: 4,
    fontFamily:'Cuprum-Bold',
    marginLeft:6
  },
  descriptionContainer: {
    textAlign:'right',
    flexDirection: 'row',
    justifyContent:'space-between',
    width:'70%'
  },
});

export default OrderHistoryTabsItem;
