import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'


import turnback from '../assets/icons/turnback.png';
import blank from '../assets/icons/blank.png';

import OrderHistoryTabs from '../Screens/OrderHistoryTabs.js'

const OrderHistory = () => {
  return (
    <View style={{backgroundColor: '#fff'}}>
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

          <Text style={styles.logo}>Order History</Text>

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

      <OrderHistoryTabs></OrderHistoryTabs>

    </View>
  )
}

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
})

export default OrderHistory