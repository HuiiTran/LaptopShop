/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, FlatList,TouchableWithoutFeedback } from 'react-native'
import React, { useEffect, useState } from 'react'


import turnback from '../assets/icons/turnback.png';
import blank from '../assets/icons/blank.png';

import OrderHistoryTabs from '../Screens/OrderHistoryTabs.js'
import { ProjectBaseUrl } from './Home.js';
const OrderHistory = ({navigation, route}) => {
  const {userId} = route.params;
  const[data, setData] = useState(null);
  const [Refreshing, setRefreshing] = useState(false);
  const getList = async () => {
    try {
      fetch(ProjectBaseUrl + '/bill?userId=' + userId)
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson[1].result.id);
        setData(responseJson);
      });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getList();
  if(Refreshing === true)
      {
        getList();
        setRefreshing(false);
      }
  },[Refreshing]);
  return (
    <View style={{backgroundColor: '#fff'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => {navigation.goBack()}}>
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
      <FlatList
          data={data}
          initialNumToRender={20}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <TouchableWithoutFeedback 
            onPress={() =>
              {
                navigation.navigate('OrderDetailScreen', {billId: item.result.id});
                //console.log(typeof(item.result.createdDate));
              }
            }>
              <View
                style={styles.ItemContainer}
                >
                <View>
                  <Text>
                    <Text style={styles.text_title}>Order's id: </Text>
                    <Text>{item.result.id}</Text>
                  </Text>
                  <Text>
                    <Text style={styles.text_title}>Created date: </Text>
                    <Text>{new Date(item.result.createdDate).toLocaleDateString()}</Text>
                  </Text>
                  <Text>
                    <Text style={styles.text_title}>Total price: </Text>
                    <Text>{item.result.totalPrice.toLocaleString('en-US')} vnđ</Text>
                  </Text>
                  <Text>
                    <Text style={styles.text_title}>Status: </Text>
                    <Text>{item.result.state}</Text>
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          )}
          refreshing ={ Refreshing}
          onRefresh={()=> {
            setRefreshing(true);
          }}
        />

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
      ItemContainer: {
        borderRadius: 15,
        borderColor: 'black',
        borderWidth: 1,
                    margin: 5,
                    padding: 5,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: 15,
      },
      imageSize: {
        width: 70,
        height: 70,
      },
      button_style : {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#ee6e73',
        position: 'absolute',
        bottom: 10,
        right: 10,
      },
      button_text: {
        alignSelf: 'center',
        fontSize: 40,
      },
      text_title: {
        fontWeight: 'bold',
        color: 'black',
      }
})

export default OrderHistory