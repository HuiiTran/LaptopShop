/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { ProjectBaseUrl } from '../Api_Management/ApiManager';

const DashBoard = ({navigation}) => {
  const [isAdmin, setIsAdmin] = useState(String);
  const[authen, setAuthen] = useState('Unhealthy');
  const[admin, setAdmin] = useState('Unhealthy');
  const[staff, setStaff] = useState('Unhealthy');
  const[user, setUser] = useState('Unhealthy');
  const[bill, setBill] = useState('Unhealthy');
  const[item, setItem] = useState('Unhealthy');

  const[authenTime, setAuthenTime] = useState();
  const[adminTime, setAdminTime] = useState();
  const[staffTime, setStaffTime] = useState();
  const[userTime, setUserTime] = useState();
  const[billTime, setBillTime] = useState();
  const[itemTime, setItemTime] = useState();

  const getAuthenHealthDetails = async () => {
    let controller = new AbortController();
      setTimeout( () => {
          controller.abort();
      }, MINUTE_MS);
    const start = new Date();
    fetch(ProjectBaseUrl + '/authenhealth', {signal: controller.signal})
      .then((result) => result.text())
      .then((resultText) => {setAuthen(resultText); setAuthenTime(parseFloat((new Date() - start)).toFixed(2));})
      .catch((e) => {
        console.log(e);
        if(e?.name === 'AbortError'){
          setAuthen('Unhealthy');
          setAuthenTime(parseFloat((new Date() - start)).toFixed(2));
        }
      });
  };
  const getAdminHealthDetails = async () => {
    let controller = new AbortController();
      setTimeout( () => {
          controller.abort();
      }, MINUTE_MS);
      const start = new Date();
    fetch(ProjectBaseUrl + '/adminhealth', {signal: controller.signal})
      .then((result) => result.text())
      .then((resultText) => {setAdmin(resultText); setAdminTime(parseFloat((new Date() - start)).toFixed(2));})
      .catch((e) => {
        console.log(e);
        if(e?.name === 'AbortError'){
          setAdmin('Unhealthy');
          setAdminTime(parseFloat((new Date() - start)).toFixed(2));
        }
      });
      
  };

  const getStaffHealthDetails = async () => {
    let controller = new AbortController();
      setTimeout( () => {
          controller.abort();
      }, MINUTE_MS);
      const start = new Date();
    fetch(ProjectBaseUrl + '/staffhealth', {signal: controller.signal})
      .then((result) => result.text())
      .then((resultText) => {setStaff(resultText); setStaffTime(parseFloat((new Date() - start)).toFixed(2));})
      .catch((e) => {
        console.log(e);
        if(e?.name === 'AbortError'){
          setStaff('Unhealthy');
          setStaffTime(parseFloat((new Date() - start)).toFixed(2));
        }
      });
      
  };
  const getUserHealthDetails = async () => {
    let controller = new AbortController();
      setTimeout( () => {
          controller.abort();
      }, MINUTE_MS);
      const start = new Date();
    fetch(ProjectBaseUrl + '/usershealth', {signal: controller.signal})
      .then((result) => result.text())
      .then((resultText) => {setUser(resultText); setUserTime(parseFloat((new Date() - start)).toFixed(2));})
      .catch((e) => {
        console.log(e);
        if(e?.name === 'AbortError'){
          setUser('Unhealthy');
          setUserTime(parseFloat((new Date() - start)).toFixed(2));
        }
      });
  };
  const getBillHealthDetails = async () => {
    let controller = new AbortController();
      setTimeout( () => {
          controller.abort();
      }, MINUTE_MS);
      const start = new Date();
    fetch(ProjectBaseUrl + '/billhealth', {signal: controller.signal})
      .then((result) => result.text())
      .then((resultText) =>{ setBill(resultText); setBillTime(parseFloat((new Date() - start)).toFixed(2));})
      .catch((e) => {
        console.log(e);
        if(e?.name === 'AbortError'){
          setBill('Unhealthy');
          setBillTime(parseFloat((new Date() - start)).toFixed(2));
        }
      });
  };
  const getItemHealthDetails = async () => {
    let controller = new AbortController();
      setTimeout( () => {
          controller.abort();
      }, MINUTE_MS);
      const start = new Date();
    fetch(ProjectBaseUrl + '/catalog-gatewayhealth', {signal: controller.signal})
      .then((result) => result.text())
      .then((resultText) =>{ setItem(resultText); setItemTime(parseFloat((new Date() - start)).toFixed(2));})
      .catch((e) => {
        console.log(e);
        if(e?.name === 'AbortError'){
          setItem('Unhealthy');
          setItemTime(parseFloat((new Date() - start)).toFixed(2));
        }
      });
  };
  const MINUTE_MS = 10000;
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
  const RenderCheckHealth = (input, text, time) =>{
      return (
            <View style={styles.item_container}>
              <Text>
                <Text style={{fontWeight: 'bold', color: 'black'}}>{text}</Text>
                <Text >{time} ms</Text>
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
    <ScrollView style={styles.container}>
          <View style={styles.container}>

          <View style={styles.list_health}>
            <View style={{alignSelf: 'center'}}>
              <Text style={styles.header_text}>API SERIVCES STATUS</Text>
            </View>
            <View >
              {RenderCheckHealth(authen, 'Authentication Service: ', authenTime)}
            </View>
            <View>
              {RenderCheckHealth(admin, 'Admin Service: ', adminTime)}
            </View>
            <View>
              {RenderCheckHealth(staff, 'Staff Service: ', staffTime)}
            </View>
            <View>
              {RenderCheckHealth(user, 'User Service: ', userTime)}
            </View>
            <View>
              {RenderCheckHealth(bill, 'Bill Service: ', billTime)}
            </View>
            <View>
              {RenderCheckHealth(item, 'Product Service: ', itemTime)}
            </View>
            {/* <Button title="Refresh" onPress={() => Refresh()}/> */}
          </View>
        </View>
    </ScrollView>

  );
};

export default DashBoard;
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    gap: 10,
  },
  item_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 30,
  },
  list_health: {
    flexDirection:'column', gap: 10,
    paddingTop: 20,
    marginLeft: 10,
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
    color: 'black',
  },
  header_text: {
    fontWeight: 'bold',
    fontSize: 35,
    color: 'black',
  }
});