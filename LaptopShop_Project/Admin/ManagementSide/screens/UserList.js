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
  View,
} from 'react-native';

import { ProjectBaseUrl } from '../Api_Management/ApiManager';

import AsyncStorage from '@react-native-async-storage/async-storage';


const UserList = ({navigation}) => {
  const[data, setData] = useState(null);

  const[loading, setLoading] = useState(true);

  useEffect(() => {
    const getInfor = async () => {
      try {
        fetch(ProjectBaseUrl + '/users')
        .then((response) => response.json())
        .then((responseJson) => {
          setData(responseJson);
          console.log(responseJson);
        });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getInfor();
    setLoading(false);
  },[]);

  return (
    <View>
      {loading ?
      (
        <ActivityIndicator />
      ) :
      (
        <FlatList
          data={data}
          initialNumToRender={20}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
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
          )}
        />
      )}
    </View>

  );
};

export default UserList;


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
});