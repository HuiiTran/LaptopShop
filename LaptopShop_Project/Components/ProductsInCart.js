/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import checkBox from '../assets/icons/checkbox.png'
import legion from '../assets/icons/Legion9i.png'
import minus from '../assets/icons/Minus.png'
import plus from '../assets/icons/Plus.png'
import TrashBin from '../assets/icons/TrashBin.png'
import { ProjectBaseUrl } from '../ApiManagement/ApiManager'


const ProductsInCart = (props) => {
  const [quantity, setQuantity] = useState();
  useEffect(() => {
    setQuantity(props.initialQuantity);
  },[props.initialQuantity]);
  const UpdateIncreate = async () => {
    const requestOptions = {
      method: 'POST', // Specify the request method
      headers: {'Content-Type': 'application/json'}, // Specify the content type
      body: JSON.stringify({
        'userId': props.userId,
        'catalogLaptopId': props.idItem,
        'quantity': 1,
      }), // Send the data in JSON format
    };
    fetch(ProjectBaseUrl + '/inventory-gateway/cart',requestOptions)
    // .then(response => response.json()) // Parse the response as JSON
    .then(responseData => console.log(responseData)) // Do something with the data
    .catch(error => console.error(error)); // Handle errors
  };
  const UpdateDecreate = async () => {
    const requestOptions = {
      method: 'PUT', // Specify the request method
      headers: {'Content-Type': 'application/json'}, // Specify the content type
      body: JSON.stringify({
        'userId': props.userId,
        'catalogLaptopId': props.idItem,
        'quantity': 1,
      }), // Send the data in JSON format
    };
    fetch(ProjectBaseUrl + '/inventory-gateway/cart',requestOptions)
    // .then(response => response.json()) // Parse the response as JSON
    .then(responseData => console.log(responseData)) // Do something with the data
    .catch(error => console.error(error)); // Handle errors
  };
  const Delete = async () => {
    const requestOptions = {
      method: 'DELETE', // Specify the request method
      headers: {'Content-Type': 'application/json'}, // Specify the content type
      body: JSON.stringify({
        'userId': props.userId,
        'catalogLaptopId': props.idItem,
        'quantity': 1,
      }), // Send the data in JSON format
    };
    fetch(ProjectBaseUrl + '/inventory-gateway/cart',requestOptions)
    // .then(response => response.json()) // Parse the response as JSON
    .then(responseData => console.log(responseData)) // Do something with the data
    .catch(error => console.error(error)); // Handle errors
  };
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    UpdateIncreate();
  };

  const decreaseQuantity = () => {
    if(quantity > 0)
    {
      setQuantity(quantity - 1);
      UpdateDecreate();
    }
    else {
      Delete();
    }
  };
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity style={styles.checkbox}>
        <Image source={checkBox}></Image>
      </TouchableOpacity> */}

      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: `data:image/jpeg;base64,${props.image}`}} />
      </View>

      <View style={styles.descriptionContainer}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.productName}>{props.name}</Text>
        <Text style={styles.productPrice}>{props.price} vnđ</Text>

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

      <TouchableOpacity style={styles.TrashBin} onPress={() => Delete()}>
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