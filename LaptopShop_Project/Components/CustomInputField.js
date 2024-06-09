import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet, Image } from 'react-native';

const CustomInputField = ({ placeholderText, placeholderImage}) => {
  const [text, setText] = useState('');

  const onChangeText = (inputText) => {
    setText(inputText);
  };

  return (
    <View style={styles.container}>
      <Image source={placeholderImage} style={styles.placeholderImage}></Image>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={onChangeText}
        placeholder={placeholderText}
        placeholderTextColor="#999"
      />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#382F29',
    borderRadius: 10,
    opacity: 0.75,
    width:'80%',
    flexDirection:'row',
    alignItems:'center',
    marginLeft:10,
  },
  input: {
    fontSize: 20,
    color: '#333',
    width:'93%',
  },
  placeholderImage: {
    marginLeft:7,
},
})


export default CustomInputField;