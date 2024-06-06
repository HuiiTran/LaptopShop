import React from 'react'
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

export class Product {
    constructor(id, ownerId, title, imageUrl, description, preprice, price) {
      this.id = id;
      this.ownerId = ownerId;
      this.title = title;
      this.imageUrl = imageUrl;
      this.description = description;
      this.preprice = preprice;
      this.price = price;
    }
  }

export  const PRODUCTS = [
    new Product(
      'p1',
      'u1',
      'Red Shirt',
      'https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg',
      'A red t-shirt, perfect for days with non-red weather.',
      120000,
      100000
    ),
    new Product(
      'p2',
      'u1',
      'Blue Carpet',
      'https://images.pexels.com/photos/6292/blue-pattern-texture-macro.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'Fits your red shirt perfectly. To stand on. Not to wear it.',
      120.00,
      99.99
    ),
    new Product(
      'p3',
      'u2',
      'Coffee Mug',
      'https://images.pexels.com/photos/160834/coffee-cup-and-saucer-black-coffee-loose-coffee-beans-160834.jpeg?cs=srgb&dl=bean-beans-black-coffee-160834.jpg&fm=jpg',
      'Can also be used for tea!',
      10,
      8.99
    ),
    new Product(
      'p4',
      'u3',
      'The Book - Limited Edition',
      'https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?cs=srgb&dl=blur-blurred-book-pages-46274.jpg&fm=jpg',
      "What the content is? Why would that matter? It's a limited edition!",
      20,
      15.99
    ),
    new Product(
      'p5',
      'u3',
      'PowerBook',
      'https://get.pxhere.com/photo/laptop-computer-macbook-mac-screen-water-board-keyboard-technology-air-mouse-photo-airport-aircraft-tablet-aviation-office-black-monitor-keys-graphic-hardware-image-pc-exhibition-multimedia-calculator-vector-water-cooling-floppy-disk-phased-out-desktop-computer-netbook-personal-computer-computer-monitor-electronic-device-computer-hardware-display-device-448748.jpg',
      'Awesome hardware, crappy keyboard and a hefty price. Buy now before a new one is released!',
      2300,
      2299.99
    ),
    new Product(
      'p6',
      'u1',
      'Pen & Paper',
      'https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg',
      "Can be used for role-playing (not the kind of role-playing you're thinking about...).",
      10,
      5.49
    ),
    new Product(
      'p7',
      'u1',
      'Pen & Paper',
      'https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg',
      "Can be used for role-playing (not the kind of role-playing you're thinking about...).",
      10,
      5.49
    ),
    new Product(
      'p8',
      'u1',
      'Pen & Paper',
      'https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg',
      "Can be used for role-playing (not the kind of role-playing you're thinking about...).",
      10,
      
      5.49
    ),
    new Product(
      'p9',
      'u1',
      'Pen & Paper',
      'https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg',
      "Can be used for role-playing (not the kind of role-playing you're thinking about...).",
      10,
  
      5.49
    ),
    new Product(
      'p10',
      'u1',
      'Pen & Paper',
      'https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg',
      "Can be used for role-playing (not the kind of role-playing you're thinking about...).",
      
      10,
      5.49
    ),
    new Product(
      'p11',
      'u1',
      'Pen & Paper',
      'https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg',
      "Can be used for role-playing (not the kind of role-playing you're thinking about...).",
      
      10,
      5.49
    )
  ];

const Home = (props) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollview}>
      <View style={styles.container}>
        <Image source={userProfile} style={styles.image} />
        <Text style={styles.logo}>L & C</Text>
        <Image source={searchButton} style={{marginLeft: 10,
          marginTop:10,
          marginRight:15,
          resizeMode: 'contain',
          height: 35,
          width: 35,}} />
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
            data={PRODUCTS}
            horizontal={false}
            numColumns={2}
            keyExtractor={item=> item.id}
            renderItem={itemData => (
            <ProductItem
                image={itemData.item.imageUrl}
                title={itemData.item.title}
                preprice={itemData.item.preprice}
                price={itemData.item.price}
                onSelect={() => {
                  props.navigation.navigate('ProductDetailScreen');
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