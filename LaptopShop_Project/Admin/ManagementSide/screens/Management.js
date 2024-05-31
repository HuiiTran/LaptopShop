/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { ProjectBaseUrl } from '../Api_Management/ApiManager';
const Management = ({navigation}) => {
  const [isAdmin, setIsAdmin] = useState(String);
  const[authen, setAuthen] = useState('Unhealthy');
  const[admin, setAdmin] = useState('Unhealthy');
  const[staff, setStaff] = useState('Unhealthy');
  const[user, setUser] = useState('Unhealthy');
  const[bill, setBill] = useState('Unhealthy');
  const[item, setItem] = useState('Unhealthy');
  const getAuthenHealthDetails = async () => {
    let controller = new AbortController();
      setTimeout( () => {
          controller.abort();
      }, MINUTE_MS);
    fetch(ProjectBaseUrl + '/authenhealth', {signal: controller.signal})
      .then((result) => result.text())
      .then((resultText) => setAuthen(resultText))
      .catch((e) => {
        console.log(e);
        if(e?.name === 'AbortError'){
          setAuthen('Unhealthy');
        }
      });
  };
  const getAdminHealthDetails = async () => {
    let controller = new AbortController();
      setTimeout( () => {
          controller.abort();
      }, MINUTE_MS);
    fetch(ProjectBaseUrl + '/adminhealth', {signal: controller.signal})
      .then((result) => result.text())
      .then((resultText) => setAdmin(resultText))
      .catch((e) => {
        console.log(e);
        if(e?.name === 'AbortError'){
          setAdmin('Unhealthy');
        }
      });
  };

  const getStaffHealthDetails = async () => {
    let controller = new AbortController();
      setTimeout( () => {
          controller.abort();
      }, MINUTE_MS);
    fetch(ProjectBaseUrl + '/staffhealth', {signal: controller.signal})
      .then((result) => result.text())
      .then((resultText) => setStaff(resultText))
      .catch((e) => {
        console.log(e);
        if(e?.name === 'AbortError'){
          setStaff('Unhealthy');
        }
      });
  };
  const getUserHealthDetails = async () => {
    let controller = new AbortController();
      setTimeout( () => {
          controller.abort();
      }, MINUTE_MS);
    fetch(ProjectBaseUrl + '/usershealth', {signal: controller.signal})
      .then((result) => result.text())
      .then((resultText) => setUser(resultText))
      .catch((e) => {
        console.log(e);
        if(e?.name === 'AbortError'){
          setUser('Unhealthy');
        }
      });
  };
  const getBillHealthDetails = async () => {
    let controller = new AbortController();
      setTimeout( () => {
          controller.abort();
      }, MINUTE_MS);
    fetch(ProjectBaseUrl + '/billhealth', {signal: controller.signal})
      .then((result) => result.text())
      .then((resultText) => setBill(resultText))
      .catch((e) => {
        console.log(e);
        if(e?.name === 'AbortError'){
          setBill('Unhealthy');
        }
      });
  };
  const getItemHealthDetails = async () => {
    let controller = new AbortController();
      setTimeout( () => {
          controller.abort();
      }, MINUTE_MS);
    fetch(ProjectBaseUrl + '/catalog-gatewayhealth', {signal: controller.signal})
      .then((result) => result.text())
      .then((resultText) => setItem(resultText))
      .catch((e) => {
        console.log(e);
        if(e?.name === 'AbortError'){
          setItem('Unhealthy');
        }
      });
  };
  const Refresh = () =>{
    getAuthenHealthDetails();
    getAdminHealthDetails();
    getStaffHealthDetails();
    getUserHealthDetails();
  };
  const MINUTE_MS = 5000;
  useEffect(() => {
    AsyncStorage.getItem('role').then(role => setIsAdmin(role));
      const interval = setInterval(() => {
        getAuthenHealthDetails();
        getAdminHealthDetails();
        getStaffHealthDetails();
        getUserHealthDetails();
        getBillHealthDetails();
        getItemHealthDetails();
      }, MINUTE_MS);
    
      return () => clearInterval(interval);

  }, []);
  const RenderCheckHealth = (input, text) =>{
      return (
            <View style={styles.item_container}>
              <Text>
                <Text>{text}</Text>
                
              </Text>
              <Text style={styles.health_text}>{input}</Text>
              {input != "Healthy" ? (
                  <View style={styles.red_warning}>

                  </View>
                )
                :
                (
                  <View  style={styles.green_warning}>

                  </View>
                )}
            </View>
           
      );
    }

  return (
    <View style={styles.container}>
        {isAdmin === 'Admin' ? (
          <View style={styles.container}>
          <Button
                onPress={() => {navigation.navigate('StaffList');}}
                title="Staff Management"
              />
          <Button
                onPress={() =>{navigation.navigate('UserList');}}
                title="User Management"
              />
          <Button
                onPress={() =>{navigation.navigate('ItemList');}}
                title="Product Management"
              />
          <Button
                onPress={() =>{navigation.navigate('OrderList');}}
                title="Order Management"
              />

          <View style={styles.list_health}>
            <View >
              {RenderCheckHealth(authen, 'Authentication Service: ')}
            </View>
            <View>
              {RenderCheckHealth(admin, 'Admin Service: ')}
            </View>
            <View>
              {RenderCheckHealth(staff, 'Staff Service: ')}
            </View>
            <View>
              {RenderCheckHealth(user, 'User Service: ')}
            </View>
            <View>
              {RenderCheckHealth(bill, 'Bill Service: ')}
            </View>
            <View>
              {RenderCheckHealth(item, 'Product Service: ')}
            </View>
            {/* <Button title="Refresh" onPress={() => Refresh()}/> */}
          </View>
        </View>
        ) :
        (
        <View>
          <Button
                  onPress={() =>{navigation.navigate('ItemList');}}
                  title="Product Management"
                />
          <Button
                  onPress={() =>{navigation.navigate('OrderList');}}
                  title="Order Management"
                />
        </View>
        )}
      
    </View>

  );
};

export default Management;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  item_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 30,
  },
  list_health: {
    flexDirection:'column', gap: 10,
    paddingTop: 20,
  },
  red_warning: {
    width: 20,
    height: 20,
    backgroundColor: 'red',
    position: 'absolute',
    right: 10,
  },
  green_warning: {
    width: 20,
    height: 20,
    backgroundColor: 'green',
    position: 'absolute',
    right: 10,
  },
  health_text: {
    fontWeight: 'bold',
    fontSize: 15,
    position: 'absolute',
    right: 40,
  }
});