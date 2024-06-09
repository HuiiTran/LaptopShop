import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
  TouchableHighlight
} from 'react-native';
import React, { useState } from 'react';
import blank from '../assets/icons/blank.png';
import turnback from '../assets/icons/turnback.png';
import visa from '../assets/icons/cib_visa.png';
import mastercard from '../assets/icons/mastercard.png';
import addcreditcard from '../assets/icons/AddCreditCard.png'

const AddCreditCardScreen = ({ }) => {
  const [text, setText] = useState('');

  const onChangeText = inputText => {
    setText(inputText);
  };

  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={{ flexDirection: 'column', }}>
      <View style={styles.container}>
        <TouchableOpacity /*</View>onPress={() => {navigation.goBack();}}*/>
          <Image
            source={turnback}
            style={{
              marginLeft: 5,
              marginTop: 10,
              marginRight: 15,
              resizeMode: 'contain',
              height: 30,
              width: 30,
            }}
          />
        </TouchableOpacity>

        <Text style={styles.logo}>Payment</Text>

        <Image
          source={blank}
          style={{
            marginLeft: 10,
            marginTop: 10,
            marginRight: 15,
            resizeMode: 'contain',
            height: 35,
            width: 35,
            opacity: 0,
          }}
        />
      </View>

      <Text style={styles.text}>Card holder</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="John Smith"
          placeholderTextColor="#999"
        />
      </View>

      <Text style={styles.text}>Card Details</Text>

      <View style={styles.VisaContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="John Smith"
          placeholderTextColor="#999"
        />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 5,
            marginRight: 10,
          }}>
          <Image source={visa}></Image>
          <Image source={mastercard}></Image>
        </View>
      </View>
      <View style={styles.VisaContainer1}>
        <TextInput
          style={styles.expDate}
          onChangeText={onChangeText}
          placeholder="MM / YY"
          placeholderTextColor="#999"
        />
        <View style={styles.verticalLine} />

        <TextInput
          style={{ fontSize: 20, color: '#333', width: '50%' }}
          onChangeText={onChangeText}
          placeholder="CVC"
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.defaultCardContainer}>
        <TouchableHighlight
          underlayColor='transparent'
          onPress={toggleCheckbox}
        >
          <Image
            source={
              isChecked
                ? require('../assets/icons/switch-on.png')
                : require('../assets/icons/switch.png')
            }></Image>
        </TouchableHighlight>

        <Text style={styles.defaultCardText}>Mark as default</Text>

      </View>

      <TouchableOpacity style={{ marginTop: 20 }}>
        <Image style={{ alignSelf: 'center' }} source={addcreditcard}></Image>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: 130
  },
  logo: {
    paddingTop: 7,
    fontSize: 25,
    fontFamily: 'Cuprum-Bold',
    color: '#000000',
  },
  text: {
    fontFamily: 'Cuprum-Bold',
    fontSize: 20,
    marginLeft: 30,
    marginTop: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#382F29',
    borderRadius: 10,
    opacity: 0.75,
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 30,
    marginTop: 20,
  },
  input: {
    fontSize: 20,
    color: '#333',
    width: '60%',
    marginLeft: 10,
  },
  VisaContainer: {
    borderWidth: 1,
    borderColor: '#382F29',
    opacity: 0.75,
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 30,
    marginTop: 20,
    justifyContent: 'space-between',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  VisaContainer1: {
    borderWidth: 1,
    borderColor: '#382F29',
    opacity: 0.75,
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 30,
    marginTop: 20,
    justifyContent: 'space-between',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginTop: -1,
  },
  verticalLine: {
    position: 'absolute',
    height: '100%',
    width: 1,
    backgroundColor: 'black',
    left: '50%',
  },
  expDate: {
    fontSize: 20,
    color: '#333',
    width: '50%',
    marginLeft: 10,
  },
  defaultCardContainer: {
    flexDirection: 'row',
    marginLeft: 30,
    marginTop: 20,
    alignItems: 'center'
  },
  defaultCardText: {
    color: '#F18825',
    fontFamily: 'Cuprum-Bold',
    fontSize: 20,
    marginLeft: 10,
    marginTop: -3,
  }
});

export default AddCreditCardScreen;
