import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // Import the icon library


const BottomNavigation = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesome5 name="home" size={20} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesome5 name="shopping-cart" size={20} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesome5 name="search" size={20} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesome5 name="star" size={20} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesome5 name="th-large" size={20} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BottomNavigation;