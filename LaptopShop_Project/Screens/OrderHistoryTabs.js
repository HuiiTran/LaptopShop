/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import OrderHistoryTabsItem from './OrderHistoryTabsItem.js'
import { ProjectBaseUrl } from './Home.js';
const OrderHistoryTabs = props => {
  const [activeTab, setActiveTab] = useState('ongoing');

  const handleTabPress = tab => {
    setActiveTab(tab);
  };
  const[Ongoingdata, setOngoingdata] = useState([]);
  const[Deleveringdata, setDeleveringdata] = useState([]);
  const[Canceldata, setCanceldata] = useState([]);
  const [Refreshing, setRefreshing] = useState(false);

  const getList = async () => {
    try {
      fetch(ProjectBaseUrl + '/bill?userId=' + props.HistoryUserId)
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson[1].result.id);
        for(var i = 0; i < responseJson.length; i++)
          {
              if(responseJson[i].result.state === 'Cancel')
                {
                  Canceldata.push(responseJson[i].result);
                }
          }
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
    <View style={styles.container}>
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'ongoing' ? styles.activeTab : styles.inactiveTab,
          ]}
          onPress={() => handleTabPress('ongoing')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'ongoing'
                ? styles.activeTabText
                : styles.inactiveTabText,
            ]}>
            Ongoing
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'delivered' ? styles.activeTab : styles.inactiveTab,
          ]}
          onPress={() => handleTabPress('delivered')}>
          <Text style={[styles.tabText, activeTab === 'delivered' ? styles.activeTabText : styles.inactiveTabText]}>Delivered</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'cancelled' ? styles.activeTab : styles.inactiveTab,
          ]}
          onPress={() => handleTabPress('cancelled')}>
          <Text style={[styles.tabText, activeTab === 'cancelled' ? styles.activeTabText : styles.inactiveTabText]}>Cancelled</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tabContent}>
        {activeTab === 'ongoing' && <View>
          <OrderHistoryTabsItem ></OrderHistoryTabsItem>
        </View> }
        {activeTab === 'delivered' && <View>
          <OrderHistoryTabsItem></OrderHistoryTabsItem>
        </View>}
        {activeTab === 'cancelled' && <View>
          <OrderHistoryTabsItem data={Canceldata}/>
        </View>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'pace-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#F18825',
    backgroundColor: '#fff',
  },
  inactiveTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#B3B5B6',
    backgroundColor: '#fff',
  },
  activeTabText: {
    color: '#F18825',
    fontSize: 18,
    fontFamily:'Cuprum-Bold'
  },
  inactiveTabText: {
    color: '#B3B5B6',
    fontSize: 16,
    fontFamily:'Cuprum-Regular'
  },
  tabContent: {
    marginTop:20,
  },
});

export default OrderHistoryTabs;
