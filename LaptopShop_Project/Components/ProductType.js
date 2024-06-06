import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet, Image } from 'react-native';

const ProductType = ({ value, placeholderText, placeholderImage}) => {

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={placeholderImage}></Image>

      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholderText}
        editable={false}
      />

    </View>  
    
  );
};

const styles = StyleSheet.create({
  container: {
    width:'90%',
    height:'80%',
    alignItems:'center',
},
  input: {
    fontFamily:'Cuprum-Regular',
    fontSize:16,
  },
  image:{
    width:50,
    height:50,
  },
})


export default ProductType;