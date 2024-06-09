import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

import turnback from '../assets/icons/turnback.png';
import blank from '../assets/icons/blank.png';
import saveChanges from '../assets/icons/saveChanges.png'

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSaveChanges = () => {
    // Implement password validation logic here.
    // You should check if passwords match and meet your criteria.

    // For example:
    //   if (newPassword !== confirmPassword) {
    //     alert('Passwords do not match!');
    //     return;
    //   }
    // ... More validation checks ...

    // If validation passes, update password in your backend.
    // This involves sending an API request.

    // For demonstration purposes, we'll just log the values:
    //   console.log(
    //     `Current Password: ${currentPassword}\nNew Password: ${newPassword}`
    //   );

    // Clear input fields
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
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

          <Text style={styles.logo}>Change Password</Text>

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

    <View style={{height:150}}></View>

      <TextInput
        style={styles.input}
        placeholder="Current Password"
        placeholderTextColor='#B3B5B6'
        value={currentPassword}
        onChangeText={setCurrentPassword}
        secureTextEntry
      />
      <TouchableOpacity style={{marginLeft:34,marginTop:4, width:'40%'}}>
        <Text style={{fontFamily:'Cuprum-Bold', fontSize:22, color:'#000'}}>Forgor Password?</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="New Password"
        placeholderTextColor='#B3B5B6'
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm New Password"
        placeholderTextColor='#B3B5B6'
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <TouchableOpacity style={{alignSelf:'center', marginTop:50}}>
        <Image source={saveChanges}>
        </Image>
      </TouchableOpacity>
{/* add onPress handle this changes */}

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
  input: {
    borderColor: '#B3B5B6',
    borderBottomWidth: 1,
    fontFamily: 'Cuprum-Bold',
    fontSize: 24,
    color: '#B3B5B6',
    width: '82%',
    marginLeft: 30,
    marginTop:20
  },
});

export default ChangePassword;
