import React, {useState} from 'react'
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    TextInput,
    TouchableOpacity
  } from 'react-native';
import userProfile from '../assets/icons/UserProfile.png'
import searchButton from '../assets/icons/SearchButton.png'
import ProductItem from '../Components/ProductItem'
import CustomInput from '../Components/CustomInputField'
import searchIcon from '../assets/icons/ion_search.png'
import sortIcon from '../assets/icons/Sort.png'

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

const Search = (props) => {
    const handleInputChange = (text) => {
        console.log(text);
      };

    const [searchText,setSearchText] = useState('');
    const [products, setProducts] = useState([
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
]);
    const handleSearch = (text) => {
        setSearchText(text);

        const filteredProducts = products.filter((product) =>
            product.title.toLowerCase().includes(text.toLowerCase())
        );

        const sortedProducts = filteredProducts.sort((a, b) => a.title.localeCompare(b.title));

        setProducts(sortedProducts);
    }

    const handleSortPress = () => {
      // Your logic for handling sort  here
      console.log('Image pressed!');
    };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollview}>
      
        <View style={styles.container}>
            <Image source={userProfile} style={styles.image} />
            <Text style={styles.logo}>L & C</Text>
            <Image source={searchButton} style={{marginLeft: 10,
        marginTop:10,
        marginRight:15,
        resizeMode: 'contain',
          height: 40,
          width: 35,}} />
        </View>
        
        <View style={styles.container}>
          <CustomInput
            placeholderImage={searchIcon}
            value={searchText}
            onChangeText={handleSearch}
            placeholder="Search"
          ></CustomInput>

          <TouchableOpacity onPress={handleSortPress}>
            <Image
            source={sortIcon}
            style={styles.sortImage}
            />
          </TouchableOpacity>
        </View>
        
        
      
        <FlatList
            style={{marginLeft:10}}
            data={products}
            horizontal={false}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => (
              <ProductItem
                image={itemData.item.imageUrl}
                title={itemData.item.title}
                preprice={itemData.item.preprice}
                price={itemData.item.price}
                onSelect={() => {
                  props.navigation.navigate('ProductDetailScreen');
                }}
              />
            )}
          />

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
    },
    line:{
        width:'91%',
        height:2,
        backgroundColor:'#382F29',
        opacity: 0.2,
        marginLeft:20,
        marginTop:20,
        marginRight:20

    },
    productType:{
      flexDirection:'column', 
      gap:2, 
      alignItems:'center',
      marginRight:20
    },
    productTypeText:{
        fontFamily:'Cuprum-Regular',
        fontSize:16,
    },
    productTypeImage: {
        width:50,
        height:50,
    },
    sortImage:{
      marginRight:10,
      resizeMode: 'contain',
          height: 50,
          width: 50,
    },
})

export default Search