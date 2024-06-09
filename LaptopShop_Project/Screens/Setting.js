import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import React,{useState} from 'react';

import turnback from '../assets/icons/turnback.png';
import blank from '../assets/icons/blank.png';
import UserProfileIMG from '../assets/icons/UserProfileIMG.png';
import rightfill from '../assets/icons/mingcute_right-fill.png'

const Setting = () => {

const [isCheckedNotification, setIsCheckedNotification] = useState(false);

const togglePushNotification = () => {
    setIsCheckedNotification(!isCheckedNotification);
  };

  const [isCheckedDarkMode, setIsCheckedDarkMode] = useState(false);

const toggleDarkMode = () => {
    setIsCheckedDarkMode(!isCheckedDarkMode);
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

          <Text style={styles.logo}>Setting</Text>

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

      <Image
        style={{alignSelf: 'center', marginTop: 20}}
        source={UserProfileIMG}></Image>

      <Text
        style={{
          marginLeft: 30,
          fontFamily: 'Cuprum-Regular',
          fontSize: 26,
          marginTop: 30,
        }}>
        Account Setting
      </Text>

{/* add onPress for each setting option for navigate */}
      <TouchableOpacity style={styles.settingOption}>
        <Text style={styles.settingText}>Edit Profile</Text>
        <Image style={{marginTop:7}} source={rightfill}></Image>
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingOption}>
        <Text style={styles.settingText}>Change Password</Text>
        <Image style={{marginTop:7}} source={rightfill}></Image>
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingOption}>
        <Text style={styles.settingText}>New Updates</Text>
        <Image style={{marginTop:7}} source={rightfill}></Image>
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingOption}>
        <Text style={styles.settingText}>Push Notification</Text>
        <TouchableHighlight
          underlayColor='transparent'
          onPress={togglePushNotification}
        >
          <Image
            source={
                isCheckedNotification
                ? require('../assets/icons/switch-on.png')
                : require('../assets/icons/switch.png')
            }></Image>
        </TouchableHighlight>
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingOption}>
        <Text style={styles.settingText}>Dark Mode</Text>
        <TouchableHighlight
          underlayColor='transparent'
          onPress={toggleDarkMode}
        >
          <Image
            source={
              isCheckedDarkMode
                ? require('../assets/icons/switch-on.png')
                : require('../assets/icons/switch.png')
            }></Image>
        </TouchableHighlight>
      </TouchableOpacity>

      <Text
        style={{
          marginLeft: 30,
          fontFamily: 'Cuprum-Regular',
          fontSize: 26,
          marginTop: 30,
        }}>
        More
      </Text>

      <TouchableOpacity style={styles.settingOption}>
        <Text style={styles.settingText}>About Us</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingOption}>
        <Text style={styles.settingText}>Privacy Policy</Text>
        <Image style={{marginTop:7}} source={rightfill}></Image>
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingOption}>
        <Text style={styles.settingText}>Terms and Conditions</Text>
        <Image style={{marginTop:7}} source={rightfill}></Image>
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
  },
  logo: {
    paddingTop: 7,
    fontSize: 25,
    fontFamily: 'Cuprum-Bold',
    color: '#000000',
  },
  settingOption: {
    flexDirection:'row',
    marginLeft: 30,
    fontFamily: 'Cuprum-SemiBold',
    fontSize: 26,
    marginTop: 20,
    justifyContent:'space-between',
    width:'86%',
    alignItems:'center'
  },
  settingText:{
          fontFamily: 'Cuprum-Bold',
          fontSize: 26,
          color:'#000'
  }
});

export default Setting;
