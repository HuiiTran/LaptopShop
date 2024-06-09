import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import addicon from '../assets/icons/AddPaymentMethod.png';


const FavoriteItem = ({productImage, productName, price}) => {
  return (
    <View>
      <View style={styles.item}>
        <View></View>
        <Image source={productImage} style={styles.itemImage} />
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>{productName}</Text>
          <Text style={styles.itemPrice}>{price}</Text>
        </View>
        <TouchableOpacity style={styles.addIcon}>
          <Image source={addicon}></Image>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles= StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        marginTop: 20,
        marginLeft: 10,
      },
      itemImage: {
        width: '20%',
        height: '200%',
      },
      itemDetails: {
        flex: 1,
        marginLeft: 20,
      },
      itemName: {
        fontSize: 23,
        fontFamily: 'Cuprum-Bold',
        color: '#000',
      },
      itemPrice: {
        fontSize: 25,
        color: '#F18825',
        fontFamily: 'Cuprum-Bold',
      },
      addIcon:{
        justifyContent:'center'
      }
})

export default FavoriteItem