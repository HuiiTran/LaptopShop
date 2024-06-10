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
  FlatList,
  TouchableWithoutFeedback,
  Image,
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

  const[dataItemList, setDataItemList] = useState();
  const getList = async () => {
    try {
      fetch(ProjectBaseUrl + '/catalog-gateway/items')
      .then((response) => response.json())
      .then((responseJson) => {
        responseJson.sort((a,b) => a.soldQuantity - b.soldQuantity);
        setDataItemList((responseJson.reverse()).slice(0,10));
      });
    } catch (error) {
      console.error(error);
    }
  };
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
        getList();
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
              <Text style={styles.header_text}>API SERVICES STATUS</Text>
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
            {/* <Button title="Refresh" onPress={() => console.log(dataItemList)}/> */}
          </View>
          <View style = {styles.line}></View>
          <View style={{marginLeft: 15,}}>
          <Text  style={styles.header_text}>TOP 10 BEST SALE</Text>
          <FlatList
          horizontal={true}
          data={dataItemList}
          initialNumToRender={20}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <TouchableWithoutFeedback 
            onPress={() =>
              {
                navigation.navigate('ItemDetails', {itemId: item.id});
              }
            }>
              <View
                style={styles.ItemContainer}
                >
                  <View>
                    <Image style={styles.imageSize} source={{uri: `data:image/jpeg;base64,${item.image[0]}`}} />
                  </View>
                <View>
                  <Text>{item.name}</Text>
                  <Text>{parseFloat(item.price).toLocaleString()}vnđ</Text>
                  <Text>{item.soldQuantity}</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          )}
        />
          </View>
        </View>
    </ScrollView>

  );
};

export default DashBoard;
const styles = StyleSheet.create({
  ItemContainer: {
    borderColor: 'black',
    borderRadius: 15,
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
  container: {
    paddingTop: 20,
    gap: 10,
    backgroundColor: 'white'
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
  },
  line:{
    width:'86%',
    height:2,
    backgroundColor:'#382F29',
    opacity: 0.2,
    marginLeft:30,
    marginRight:30,
    marginTop:15
},
});