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


export const ProjectBaseUrl = 'http://10.0.2.2:5156';

  
  
const Home = (props) => {
  const [data, setData] = useState()
  const getList = async () => {
    try {
      fetch(ProjectBaseUrl + '/catalog-gateway/items')
      .then((response) => response.json())
      .then((responseJson) => {
        setData(responseJson);
        //console.log(responseJson);
      });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getList();

  },[]);
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollview}>
      <View style={styles.container}>
        <Image source={userProfile} style={styles.image} />
        <Text style={styles.logo}>L & C</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('SearchScreen')}>
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
            <TouchableOpacity style={{marginLeft:15, marginRight:15,height:95,}}>
              <ProductType
                placeholderImage={laptop}
                placeholderText="Laptop">
              </ProductType>
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight:15,height:95,}}>
              <ProductType
                placeholderImage={headphones}
                placeholderText="Headphone">
              </ProductType>
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight:15,height:95, }}>
              <ProductType
                placeholderImage={mouse}
                placeholderText="Mouse">
              </ProductType>
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight:15,height:95, }}>
              <ProductType
                placeholderImage={keyboard}
                placeholderText="Keyboard">
              </ProductType>
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight:15,height:95, }}>
              <ProductType
                placeholderImage={ram}
                placeholderText="Ram">
              </ProductType>
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight:15,height:95, }}>
              <ProductType
                placeholderImage={controller}
                placeholderText="Controller">
              </ProductType>
            </TouchableOpacity>
        </ScrollView>

        <View style = {styles.line}></View>

        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'flex-end', marginTop:20}}>
            <Text style={{marginLeft:20, fontFamily:'Cuprum-Bold', fontSize:26, color:'#000'}}>New Arrivals</Text>
            <Text style = {{fontFamily:'Cuprum-SemiBold', fontSize:22, color:'#2E67FF', marginRight:20}}>View All</Text>
        </View>
        
        <FlatList
            style={{marginLeft:10, marginTop:10}}
            data={data}
            horizontal={false}
            numColumns={2}
            keyExtractor={({id}) => id}
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