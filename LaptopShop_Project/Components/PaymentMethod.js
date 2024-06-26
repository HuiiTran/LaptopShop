import { View, Text, StyleSheet, TouchableOpacity, Image, CheckBox} from 'react-native'
import React, {useState} from 'react'

import checkBox from '../assets/icons/checkbox.png'
import legion from '../assets/icons/Legion9i.png'
import minus from '../assets/icons/Minus.png'
import plus from '../assets/icons/Plus.png'
import TrashBin from '../assets/icons/TrashBin.png'
import turnright from '../assets/icons/turnright.png'
import CenterDot from '../assets/icons/CenterDot.png'
import circlewithoutdot from '../assets/icons/circlewithoutdot.png'


const PaymentMethod = ({methodOption, PaymentName, PaymentDescription}) => {
  
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.paymentMethodContainer}>
        <Image style={styles.image} source={methodOption}></Image>
      </View>

      <View style={styles.descriptionContainer}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.paymentName}>{PaymentName}</Text>
        <Text style={styles.paymentDescription}>{PaymentDescription}</Text>

      </View>

      <TouchableOpacity onPress={toggleCheckbox} style={styles.imageOptionHolder}>
        <Image source={ isChecked ? require('../assets/icons/CenterDot.png') : require('../assets/icons/circlewithoutdot.png')}></Image>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flexDirection:'row',
      marginTop:20,
      marginLeft:30,
      alignItems:'center',
    },
    checkbox:{
  
    },
    image:{
      width:'100%',
      height:'100%',
      borderRadius:15,
    },
    paymentMethodContainer:{
      width: 50, // Set container width
      height: 50, // Set container height
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 0.5,
      borderColor: 'black',
      borderRadius:15,
    },
    descriptionContainer:{
      marginLeft:30,
      flexDirection:'column',
    },
    paymentName:{
      fontFamily:'Cuprum-Bold',
      color:'#000',
      fontSize:24,
      maxWidth: 250,
    },
    paymentDescription:{
      marginTop:3,
      fontFamily:'Cuprum-Regular',
      fontSize:16,
      color:'#787064'
    },
    imageOptionHolder:{
      flexDirection:'row', 
      justifyContent:'flex-end', 
      alignItems:'center', 
      flex:1,
      marginRight:30
    }
  
  })

export default PaymentMethod