/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    TouchableOpacity,
  } from 'react-native';
import userProfile from '../assets/icons/UserProfile.png'
import searchButton from '../assets/icons/SearchButton.png'
import bulletin from '../assets/icons/Bulletin.png'
import keyboard from '../assets/icons/Keyboard.png'
import headphones from '../assets/icons/Headphones.png'
import mouse from '../assets/icons/Mouse.png'
import ram from '../assets/icons/Ram.png'
import controller from '../assets/icons/Controller.png'
import laptop from '../assets/icons/laptop.png'
import ProductItem from '../Components/ProductItem'
import ProductType from '../Components/ProductType';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ProjectBaseUrl = 'http://10.0.2.2:5156';


const Home = (props) => {
  const [searchText,setSearchText] = useState('');
  const images = props.image;
  const [userId, setUserId] = useState();
  const [userImage, setUserImage] = useState();
    const [data, setData] = useState([{
      id: String,
      storeID: String,
      classify: String,
      name: String,
      description: String,
      price: Number,
      quantity: Number,
      isAvailable: Boolean,
      image: [String],
    }]);
    const [filterData, setFilterData] = useState();
  const getList = async () => {
    try {
      fetch(ProjectBaseUrl + '/catalog-gateway/items')
      .then((response) => response.json())
      .then((responseJson) => {
        setData(responseJson);
        setFilterData(responseJson);
        //console.log(responseJson);
      });
    } catch (error) {
      console.error(error);
    }
  };
  const getUser = async (id) => {
    try {
      fetch(ProjectBaseUrl + '/users/' + id)
      .then((response) => response.json())
      .then((responseJson) => {
        setUserImage(responseJson.image);
        //console.log(responseJson);
      });
    } catch (error) {
      console.error(error);
    } finally{

    }
  };
  useEffect(() => {
    AsyncStorage.getItem('ID').then(ID => setUserId(ID));
    getList();
  },[]);
  useEffect(() => {
    getUser(userId);
  },[userId]);

  useEffect(() => {
    const filtered = data.filter(item =>
      item.classify.toString().toLowerCase().includes(searchText.toLowerCase()),
    );
    if (searchText === '') {
      return setFilterData(data);
    }
    setFilterData(filtered);
  },[searchText]);
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollview}>
      <View style={styles.container}>
        <Image  source={{uri: `data:image/jpeg;base64,${userImage}`}} style={styles.image} />
        <Text style={styles.logo}>L & C</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('SearchScreen', {userId: userId})}>
        <Image source={searchButton} style={{marginLeft: 10,
          marginTop:10,
          marginRight:15,
          resizeMode: 'contain',
          height: 35,
          width: 35,}} 
          />
        </TouchableOpacity>
        </View>

        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ marginLeft:20}}>
            <Image style={styles.bulletin} source={bulletin} />
            <Image style = {styles.bulletin} source={bulletin} />
        </ScrollView>

        <View style = {styles.line}></View>
      
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{marginTop:15}}>
            <TouchableOpacity style={{marginLeft:15, marginRight:15,height:95,}} onPress={() => {setSearchText('Laptop'); }}>
              <ProductType
                placeholderImage={laptop}
                placeholderText="Laptop">
              </ProductType>
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight:15,height:95,}} onPress={() => {setSearchText('Headphone'); }}>
              <ProductType
                placeholderImage={headphones}
                placeholderText="Headphone">
              </ProductType>
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight:15,height:95, }} onPress={() => {setSearchText('Mouse'); }}>
              <ProductType
                placeholderImage={mouse}
                placeholderText="Mouse">
              </ProductType>
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight:15,height:95, }} onPress={() => {setSearchText('Keyboard');}}>
              <ProductType
                placeholderImage={keyboard}
                placeholderText="Keyboard">
              </ProductType>
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight:15,height:95, }} onPress={() => {setSearchText('Ram');}}>
              <ProductType
                placeholderImage={ram}
                placeholderText="Ram">
              </ProductType>
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight:15,height:95, }} onPress={() => {setSearchText('Controller');}}>
              <ProductType
                placeholderImage={controller}
                placeholderText="Controller">
              </ProductType>
            </TouchableOpacity>
        </ScrollView>

        <View style = {styles.line}></View>

        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'flex-end', marginTop:20}}>
            <Text style={{marginLeft:20, fontFamily:'Cuprum-Bold', fontSize:26, color:'#000'}}>New Arrivals</Text>
            <TouchableOpacity onPress={() => {setSearchText('');}}>
            <Text style = {{fontFamily:'Cuprum-SemiBold', fontSize:22, color:'#2E67FF', marginRight:20}}>View All</Text>
            </TouchableOpacity>
        </View>
        
        <FlatList
            style={{marginLeft:10, marginTop:10}}
            data={filterData}
            horizontal={false}
            numColumns={2}
            keyExtractor={(item, index) => item.id}
            renderItem={({item}) => (
            <ProductItem
                image={item.image}
                title={item.name}
                price={item.price}
                onSelect={() => {
                  props.navigation.navigate('ProductDetailScreen', {itemId: item.id});
          }}>
          
            </ProductItem>
          )}/>

    </ScrollView>
    
  )
}

const styles = StyleSheet.create({
    scrollview:{
      backgroundColor:'#FFF'
    },
    image: {
      marginLeft: 10,
      marginTop:10,
      marginRight:15,
      resizeMode: 'contain',
        height: 42,
        width: 42,
    },
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
    bulletin:{
      marginRight:10,
      marginBottom:15
    },
    line:{
        width:'91%',
        height:2,
        backgroundColor:'#382F29',
        opacity: 0.2,
        marginLeft:20,
        marginRight:20
    },
})

export default Home