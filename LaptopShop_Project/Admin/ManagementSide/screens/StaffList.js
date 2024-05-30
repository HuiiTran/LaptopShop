/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  FlatList,
  StyleSheet,
  Text,
  ActivityIndicator,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
} from 'react-native';

import { ProjectBaseUrl } from '../Api_Management/ApiManager';

import AsyncStorage from '@react-native-async-storage/async-storage';


const StaffList = ({navigation}) => {
  const[data, setData] = useState(null);
  const [Refreshing, setRefreshing] = useState(false);

  const getList = async () => {
    try {
      fetch(ProjectBaseUrl + '/staff')
      .then((response) => response.json())
      .then((responseJson) => {
        setData(responseJson);
        //console.log(responseJson);
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
                navigation.navigate('StaffDetails', {userId: item.id});
              }
            }>
              <View
                style={styles.ItemContainer}
                >
                  <View>
                    <Image style={styles.imageSize} source={{uri: `data:image/jpeg;base64,${item.image}`}} />
                  </View>
                <View>
                  <Text>{item.name}</Text>
                  <Text>{item.phoneNumber}</Text>
                  <Text>{item.email}</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          )}
          refreshing ={ Refreshing}
          onRefresh={()=> {
            setRefreshing(true);
          }}
        />
        <TouchableOpacity style={styles.button_style} onPress={() => navigation.navigate('StaffCreate')}>
          <Text style={styles.button_text}>+</Text>
        </TouchableOpacity>
    </View>
  );
};

export default StaffList;


const styles = StyleSheet.create({
  ItemContainer: {
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
  }
});