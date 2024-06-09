import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

import turnback from '../assets/icons/turnback.png';
import blank from '../assets/icons/blank.png';
import UploadIMG from '../assets/icons/UploadIMG.png';
import saveChanges from '../assets/icons/saveChanges.png'

const EditProfile = () => {
  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

  const [phone, setPhone] = useState('');

  const [address, setAddress] = useState('');


  const handleNameChange = text => {
    setName(text);
  };

  const handleEmailChange = text => {
    setEmail(text);
  };

  const handlePhoneChange = text => {
    setPhone(text);
  };

  const handleAddressChange = text => {
    setAddress(text);
  };

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
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

          <Text style={styles.logo}>Edit Profile</Text>

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
      </ScrollView>

      <TouchableOpacity style={styles.upLoadImageContainer}>
        <Image source={UploadIMG}></Image>
        <Text
          style={{
            fontFamily: 'Cuprum-Regular',
            fontSize: 20,
            color: '#46A4CE',
            marginLeft: 20,
          }}>
          {' '}
          Photo Upload +
        </Text>
      </TouchableOpacity>

      <View style={styles.userInformationContainer}>
        <Text
          style={{
            fontFamily: 'Cuprum-Regular',
            fontSize: 20,
            color: '#B3B5B6',
          }}>
          Name
        </Text>
        <TextInput
          style={styles.input}
          placeholder="David"
          value={name}
          onChangeText={handleNameChange}
        />
      </View>

      <View style={styles.userInformationContainer}>
        <Text
          style={{
            fontFamily: 'Cuprum-Regular',
            fontSize: 20,
            color: '#B3B5B6',
          }}>
          Email ID
        </Text>
        <TextInput
          style={styles.input}
          placeholder="David@gmail.com"
          value={email}
          onChangeText={handleEmailChange}
        />
      </View>

      <View style={styles.userInformationContainer}>
        <Text
          style={{
            fontFamily: 'Cuprum-Regular',
            fontSize: 20,
            color: '#B3B5B6',
          }}>
          Phone
        </Text>
        <TextInput
          style={styles.input}
          placeholder="+1 1234 4359"
          value={phone}
          onChangeText={handlePhoneChange}
        />
      </View>

      <View style={styles.userInformationContainer}>
        <Text
          style={{
            fontFamily: 'Cuprum-Regular',
            fontSize: 20,
            color: '#B3B5B6',
          }}>
          Address
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Jan Pawel II St. 19/2"
          value={address}
          onChangeText={handleAddressChange}
        />
      </View>

    <TouchableOpacity style={{alignSelf:'center', marginTop:40}}>
        <Image source={saveChanges}></Image>
    </TouchableOpacity>
      {/* process handle change option */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  logo: {
    paddingTop: 7,
    fontSize: 25,
    fontFamily: 'Cuprum-Bold',
    color: '#000000',
  },
  upLoadImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 30,
    alignContent: 'center',
    width: '86%',
    marginTop:100
  },
  userInformationContainer: {
    flexDirection: 'row',
    marginLeft: 30,
    alignItems: 'center',
    marginTop:20,
    justifyContent:'space-between',
    width:'86%'
  },
  input: {
    borderColor: '#B3B5B6',
    borderBottomWidth: 1,
    fontFamily: 'Cuprum-Bold',
    fontSize: 24,
    color: '#000',
    width: '75%',
  },
});

export default EditProfile;
