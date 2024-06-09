import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import OrderHistoryTabsItem from './OrderHistoryTabsItem.js'

const OrderHistoryTabs = ({props}) => {
  const [activeTab, setActiveTab] = useState('ongoing');

  const handleTabPress = tab => {
    setActiveTab(tab);
  };
  

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
          <Text style={[styles.tabText, activeTab==='cancelled' ? styles.activeTabText : styles.inactiveTabText]}>Cancelled</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tabContent}>
        {activeTab === 'ongoing' && <View>
          <OrderHistoryTabsItem></OrderHistoryTabsItem>
        </View> }
        {activeTab === 'delivered' && <View>
          <OrderHistoryTabsItem></OrderHistoryTabsItem>
        </View>}
        {activeTab === 'cancelled' && <Text>Cancelled content</Text>}
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
