import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import React from 'react'

const Menu = ({methodOption, menuName,onPress, props}) => {

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.locationContainer}>
        <Image style={styles.image} source={methodOption}></Image>
      </View>

      <View style={styles.descriptionContainer}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.locationName}>{menuName}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
      flexDirection:'row',
      marginTop:30,
      marginLeft:30,
      alignItems:'center',
    },
    image:{
      width:'100%',
      height:'100%',
    },
    locationContainer:{
      width: 50, // Set container width
      height: 50, // Set container height
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'black',
    },
    descriptionContainer:{
      marginLeft:30,
      flexDirection:'column',
    },
    locationName:{
      fontFamily:'Cuprum-Bold',
      color:'#000',
      fontSize:30,
      maxWidth: 250,
    },
  })

export default Menu