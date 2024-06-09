/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
} from 'react-native';
import { ProjectBaseUrl } from '../Api_Management/ApiManager';

import AsyncStorage from '@react-native-async-storage/async-storage';


const OrderList = ({navigation}) => {
  const[data, setData] = useState(null);
  const [Refreshing, setRefreshing] = useState(false);

  const getList = async () => {
    try {
      fetch(ProjectBaseUrl + '/bill/all')
      .then((response) => response.json())
      .then((responseJson) => {
        setData(responseJson);
        //console.log(responseJson[0].result);
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
    <View style={{flex: 1}}>
        <FlatList
          data={data}
          initialNumToRender={20}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <TouchableWithoutFeedback 
            onPress={() =>
              {
                navigation.navigate('OrderDetails', {billId: item.result.id});
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
        {/* <TouchableOpacity style={styles.button_style} onPress={() => navigation.navigate('ItemCreate')}>
          <Text style={styles.button_text}>+</Text>
        </TouchableOpacity> */}
    </View>

  );
};

export default OrderList;
const styles = StyleSheet.create({
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
});