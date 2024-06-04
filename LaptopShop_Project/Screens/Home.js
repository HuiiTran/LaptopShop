import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    FlatList
  } from 'react-native';
import userProfile from '../assets/icons/UserProfile.png'
import searchButton from '../assets/icons/SearchButton.png'
import bulletin from '../assets/icons/Bulletin.png'
import laptop from '../assets/icons/Laptop.png'
import keyboard from '../assets/icons/Keyboard.png'
import headphones from '../assets/icons/Headphones.png'
import mouse from '../assets/icons/Mouse.png'
import ram from '../assets/icons/Ram.png'
import controller from '../assets/icons/Controller.png'
import ProductItem from '../Components/ProductItem'
class Product {
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

  const PRODUCTS = [
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
    <View style={{ flexDirection: 'column', gap:20, backgroundColor:'#FFF' }}>
      
        <View style={styles.container}>
            <Image source={userProfile} style={styles.image} />
            <Text style={styles.logo}>L & C</Text>
            <Image source={searchButton} style={styles.image} />
        </View>

        <View style={{ flexDirection: 'row', marginLeft:15 }}>
            <Image style={styles.bulletin} source={bulletin} />
            <Image style = {styles.bulletin} source={bulletin} />
        </View>

        <View style = {styles.line}></View>
      
        <View style={{flexDirection: 'row', marginLeft:15, gap:20}}>
            <View style={{flexDirection:'column', gap:2, alignItems:'center'}}>
                <Image style={styles.productTypeImage}source={laptop}></Image>
                <Text style={styles.productTypeText}>Laptop</Text>
            </View>
            <View style={{flexDirection:'column', gap:2, alignItems:'center'}}>
                <Image style={styles.productTypeImage}source={headphones}></Image>
                <Text style={styles.productTypeText}>Laptop</Text>
            </View>
            <View style={{flexDirection:'column', gap:2, alignItems:'center'}}>
                <Image style={styles.productTypeImage}source={mouse}></Image>
                <Text style={styles.productTypeText}>Laptop</Text>
            </View>
            <View style={{flexDirection:'column', gap:2, alignItems:'center'}}>
                <Image style={styles.productTypeImage}source={keyboard}></Image>
                <Text style={styles.productTypeText}>Laptop</Text>
            </View>
            <View style={{flexDirection:'column', gap:2, alignItems:'center'}}>
                <Image style={styles.productTypeImage}source={ram}></Image>
                <Text style={styles.productTypeText}>Laptop</Text>
            </View>
            <View style={{flexDirection:'column', gap:2, alignItems:'center'}}>
                <Image style={styles.productTypeImage}source={controller}></Image>
                <Text style={styles.productTypeText}>Laptop</Text>
            </View>
        </View>

        <View style = {styles.line}></View>

        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'flex-end'}}>
            <Text style={{marginLeft:15, fontFamily:'Cuprum-Bold', fontSize:26, color:'#000'}}>New Arrivals</Text>
            <Text style = {{fontFamily:'Cuprum-SemiBold', fontSize:22, color:'#2E67FF', marginRight:15}}>View All</Text>
        </View>
        
        <FlatList
            style={{marginLeft:10}}
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

    </View>
    
  )
}

const styles = StyleSheet.create({
    image: {
        marginLeft: 10,
        marginTop:10,
        marginRight:10,

    },
    container: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    logo:{
        paddingTop:15,
        fontSize: 30,
        fontFamily: 'Cuprum-Bold',
        color:'#000000',
    },
    bulletin:{
        marginRight:10
    },
    line:{
        width:'100%',
        height:2,
        backgroundColor:'#382F29',
        opacity: 0.2,
        marginLeft:15
    },
    productTypeText:{
        fontFamily:'Cuprum-Regular',
        fontSize:16,
    },
    productTypeImage: {
        width:50,
        height:50,
    }
    
})

export default Home