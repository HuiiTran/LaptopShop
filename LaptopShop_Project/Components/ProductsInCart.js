import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import checkBox from '../assets/icons/checkbox.png'
import legion from '../assets/icons/Legion9i.png'
import minus from '../assets/icons/Minus.png'
import plus from '../assets/icons/Plus.png'
import TrashBin from '../assets/icons/TrashBin.png'



const ProductsInCart = ({ initialQuantity}) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.checkbox}>
        <Image source={checkBox}></Image>
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        <Image style={styles.image} source={legion}></Image>
      </View>

      <View style={styles.descriptionContainer}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.productName}>SDFSDFSDSDFSDFFFFFFFFFFFFFFFFFFF</Text>
        <Text style={styles.productPrice}>$4.444</Text>

        <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={decreaseQuantity}>
          <Image source={minus}></Image>
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity onPress={increaseQuantity}>
          <Image source={plus}></Image>
        </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.TrashBin}>
        <Image source={TrashBin}></Image>
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
    height:'100%'
  },
  imageContainer:{
    width: 80, // Set container width
    height: 80, // Set container height
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius:15,
    marginLeft:15
  },
  descriptionContainer:{
    marginLeft:15,
    flexDirection:'column',
  },
  productName:{
    fontFamily:'Cuprum-Bold',
    color:'#000',
    fontSize:18,
    maxWidth: 200,
  },
  productPrice:{
    marginTop:3,
    fontFamily:'Cuprum-Bold',
    fontSize:22,
    color:'#F18825'
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 18,
  },
  TrashBin:{
    flexDirection:'row', 
    justifyContent:'flex-end', 
    alignItems:'center', 
    flex:1,
    marginRight:30
  }

})

export default ProductsInCart