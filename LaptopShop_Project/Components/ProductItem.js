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
} from 'react-native';

import Card from '../UI/Card';


const ProductItem = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <Card style={styles.product}>
      <View style={styles.touchable}>
        <TouchableCmp onPress={props.onSelect}>
          <View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{uri: props.image}} />
            </View>

            <View style={styles.details}>
              <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
              <Text style={styles.preprice}>{props.preprice.toLocaleString()}vnđ</Text>
              <Text style={styles.price}>{props.price.toLocaleString()}vnđ</Text>
            </View>
            <View style={styles.actions}>{props.children}</View>
          </View>
        </TouchableCmp>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  product: {
    height: 300,
    margin: 10,
    width: 185,
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  details: {
    alignItems: 'center',
    height: '20%',
    width:'100%',
    fontFamily: 'Cuprum-Bold',
  },
  title: {
    fontSize: 22,
    fontFamily: 'Cuprum-Bold',
    marginVertical: 2,
    color:'#000000',
  },
  price: {
    fontSize: 22,
    fontFamily: 'Cuprum-Bold',
    color: '#F18825',
  },
  preprice:{
    marginTop:10,
    fontSize: 16,
    fontFamily: 'Cuprum-Regular',
    color: '#000000',
    opacity: 0.5,
    textDecorationLine: 'line-through',

  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '23%',

    paddingHorizontal: 60,
  },
});

export default ProductItem;
