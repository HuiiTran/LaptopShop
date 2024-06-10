/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, TextInput, FlatList, Button } from 'react-native'
import React, {useEffect, useId, useState} from 'react'
import turnback from '../assets/icons/turnback.png'
import blank from '../assets/icons/blank.png'
import ProductsInCart from '../Components/ProductsInCart.js'
import PaymentMethod from '../Components/PaymentMethod.js'
import cash from '../assets/icons/Cash.png'
import momo from '../assets/icons/Momo.png'
import visa from '../assets/icons/Visa.png'
import turnRight from '../assets/icons/turnright.png'
import location from '../assets/icons/Location.png'
import CenterDot from '../assets/icons/CenterDot.png'
import circlewithoutdot from '../assets/icons/circlewithoutdot.png'
import Delivery from '../Components/Delivery.js'
import ApplyCouponCode from '../assets/icons/ApplyCouponCode.png'
import CheckoutButton from '../assets/icons/CheckoutButton.png'
import addPaymentMethodIcon from '../assets/icons/AddPaymentMethod.png'
import AddCreditCardScreen from './AddCreditCardScreen.js'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ProjectBaseUrl } from '../ApiManagement/ApiManager.js'
const OrderDetail = (props, navigation) => {
  const [userId, setUserId] = useState();
  const [searchText,setSearchText] = useState('');
  const [itemList, setItemList] = useState();
  const [Refreshing, setRefreshing] = useState(false);
  const [total, setTotal] = useState(0);
  const getList = async () => {
    try {
      fetch(ProjectBaseUrl + '/inventory-gateway/cart?userId=' + userId)
      .then((response) => response.json())
      .then((responseJson) => {
        setItemList(responseJson);
        CaculationTotal();
      });
    } catch (error) {
      console.error(error);
    } finally{
    }
  };
  const CaculationTotal = () =>{
    var sum = 0;
    for(var i = 0; i < itemList.length; i++)
      {
        sum += itemList[i].price * itemList[i].quantity;
      }
      setTotal(sum);
  };
  const MINUTE_MS = 3000;
  useEffect(() =>{
    AsyncStorage.getItem('ID').then(ID => setUserId(ID));
    const interval = setInterval(() => {
      getList();
      //console.log(total);
    }, MINUTE_MS);
    return () => clearInterval(interval);
  },[getList])
  useEffect(() => {
  if(Refreshing === true)
      {
        getList();
        setRefreshing(false);
        setSearchText('');
      }
  },[Refreshing]);
  return (
    <View style={{backgroundColor:'#fff'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <TouchableOpacity /*</View>onPress={() => {navigation.goBack();}}*/>
          <Image source={turnback} style={{marginLeft: 5,
            marginTop:10,
            marginRight:15,
            resizeMode: 'contain',
            height: 30,
            width: 30,}}
          />
        </TouchableOpacity>
        
        <Text style={styles.logo}>Order Details</Text>

        <Image source={blank} style={{marginLeft: 10,
          marginTop:10,
          marginRight:15,
          resizeMode: 'contain',
          height: 35,
          width: 35,
          opacity:0}} />
      </View>
      <View>
        <Text style={styles.cart}>My Cart</Text>
      </View>
      
      <FlatList
            data={itemList}
            keyExtractor={({id}) => id}
            renderItem={({item, index}) => (
                <View>
                  {/* <Text>{item.name}</Text> */}
                  <ProductsInCart idItem={item.catalogLaptopId} userId={userId} price={parseFloat(item.price).toLocaleString()} name={item.name} initialQuantity={item.quantity} image={item.image}/>
                </View>
          )}
            refreshing ={ Refreshing}
            onRefresh={()=> {
              setRefreshing(true);
          }}
        />
      
      <Text style={styles.cart}>Delivery</Text>
      
      <Delivery
        methodOption={location}
        deliveryName='Jan Pawel II St. 19/2'
        deliveryDescription='32-581 Cracow'
        anotherOption={turnRight}>
      </Delivery>

      {/* <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
        <Text style={styles.cart}>Payment Method</Text>
    
        <TouchableOpacity onPress={() => props.navigation.navigate('AddCreditCard')} style={{marginRight:30, marginTop:10}}>
          <Image source={addPaymentMethodIcon}></Image>
        </TouchableOpacity>
      </View>
      
      

      <PaymentMethod
        methodOption={momo}
        PaymentName='Momo Wallet'
        PaymentDescription='*** **** *** 4130'
        ></PaymentMethod>
      <PaymentMethod
        methodOption={visa}
        PaymentName='VISA Business+'
        PaymentDescription='**** **** **** 4130'
        ></PaymentMethod>
      <PaymentMethod
        methodOption={cash}
        PaymentName='Cash+'
        PaymentDescription='John Smith'
        ></PaymentMethod> */}

      <Text style={styles.cart}>Order Summary</Text>
      {/* <Button title='hello'  onPress={() => CaculationTotal()}/> */}

      {/* <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={{marginLeft:30, fontFamily:'Cuprum-Regular', fontSize:20, color:'#000'}}>Name of product</Text>
        <Text style ={{fontFamily:'Cuprum-Regular', fontSize:20, color:'#F18825',marginRight:30}}> Price</Text>
      </View>

      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={{marginLeft:30, fontFamily:'Cuprum-Regular', fontSize:20, color:'#000'}}>Name of product</Text>
        <Text style ={{fontFamily:'Cuprum-Regular', fontSize:20, color:'#F18825',marginRight:30}}> Price</Text>
      </View>

      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={{marginLeft:30, fontFamily:'Cuprum-Regular', fontSize:20, color:'#000'}}>Name of product</Text>
        <Text style ={{fontFamily:'Cuprum-Regular', fontSize:20, color:'#F18825',marginRight:30}}> Price</Text>
      </View>

      <View style = {styles.line}></View> */}

      {/* <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:15}}>
        <Text style={{marginLeft:30, fontFamily:'Cuprum-Regular', fontSize:20, color:'#000'}}>Subtotal</Text>
        <Text style ={{fontFamily:'Cuprum-Regular', fontSize:20, color:'#F18825',marginRight:30}}> {parseFloat(total).toLocaleString()} vnđ</Text>
      </View>

      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={{marginLeft:30, fontFamily:'Cuprum-Regular', fontSize:20, color:'#000'}}>Shipping Cost</Text>
        <Text style ={{fontFamily:'Cuprum-Regular', fontSize:20, color:'#F18825',marginRight:30}}> Price</Text>
      </View> */}

      {/* <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={{marginLeft:30, fontFamily:'Cuprum-Regular', fontSize:20, color:'#000'}}>Discount</Text>
        <Text style ={{fontFamily:'Cuprum-Regular', fontSize:20, color:'#F18825',marginRight:30}}> Price</Text>
      </View> */}
{/*       
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <View style={styles.couponContainer}>
          <TextInput
            style={styles.textInputCoupon}
            value={searchText}
            onChangeText={text => {setSearchText(text);}}
            placeholder='Coupon Code'
            placeholderColor="#c4c3cb"
          ></TextInput>

        </View>

        <TouchableOpacity style={{  marginTop:15,}}>
          <Image style={{marginRight:30}}source={ApplyCouponCode}></Image>
        </TouchableOpacity>
      </View> */}
      
      <View style = {styles.line}></View>
    
      <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:15}}>
        <Text style={{marginLeft:30, fontFamily:'Cuprum-Bold', fontSize:26, color:'#000'}}>Total</Text>
        <Text style ={{fontFamily:'Cuprum-Bold', fontSize:26, color:'#F18825',marginRight:30}}>{parseFloat(total).toLocaleString()} vnđ</Text>
      </View>

      <TouchableOpacity style={{marginTop:20, alignSelf:'center'}}>
        <Image source={CheckoutButton}></Image>
      </TouchableOpacity>
        
      <View style={{height:20}}></View>

      
    </ScrollView>
    </View>
    
  )
}

const styles=StyleSheet.create({
  container: {
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      padding:10
  },
  logo:{
      paddingTop:7,
      fontSize: 25,
      fontFamily: 'Cuprum-Bold',
      color:'#000000',
  },
  cart:{
    fontFamily:'Cuprum-Bold',
    fontSize:30,
    color:'#000',
    marginLeft:30,
    marginTop:10
  },
  line:{
    width:'86%',
    height:2,
    backgroundColor:'#382F29',
    opacity: 0.2,
    marginLeft:30,
    marginRight:30,
    marginTop:15
},
couponContainer:{
  flexDirection:'row',
  alignItems:'center',
  borderWidth:1,
  borderColor:'#B3B5B6',
  borderRadius:10,
  marginLeft:30,
  marginTop:15,
  height:'70%',
  width:'65%',
},
textInputCoupon: {
  height: 'auto',
  fontSize: 14,
  borderColor: '#eaeaea',
  marginLeft:10,
},
 
})

export default OrderDetail