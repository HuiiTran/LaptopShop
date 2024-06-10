/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react'
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
import searchIcon from '../assets/icons/ion_search.png'

import { ProjectBaseUrl } from './Home';

const Search = (props) => {
    const handleInputChange = (text) => {
        console.log(text);
      };
      const {userId} = props.route.params;
    const [searchText,setSearchText] = useState('');
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

  const [userImage, setUserImage] = useState();
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
    getList();
    getUser(userId);
  },[userId]);
  useEffect(() => {

    const filtered = data.filter(item =>
      item.name.toString().toLowerCase().includes(searchText.toLowerCase()),
    );
    if (searchText === '') {
      return setFilterData(data);
    }

    setFilterData(filtered);
  },[searchText]);

    const handleSortPress = () => {
      // Your logic for handling sort  here
      console.log('Image pressed!');
    };

  return (
    <View showsVerticalScrollIndicator={false} style={styles.scrollview}>
      
      <View style={styles.container}>
            <Image  source={{uri: `data:image/jpeg;base64,${userImage}`}} style={styles.image} />
            <Text style={styles.logo}>L & C</Text>
            <View style={{marginLeft: 10,
        marginTop:10,
        marginRight:15,
        resizeMode: 'contain',
          height: 40,
          width: 35,}} />
        </View>
        
        <View style={styles.container}>
          <Image source={searchIcon} />
          <TextInput
            style={styles.textInputSearch}
            value={searchText}
            onChangeText={text => {setSearchText(text);}}
            placeholder='Search'
            placeholderColor="#c4c3cb"
          ></TextInput>

          {/* <TouchableOpacity onPress={handleSortPress}>
            <Image
            source={sortIcon}
            style={styles.sortImage}
            />
          </TouchableOpacity> */}
        </View>
        {
          filterData?.length !== 0 ? 
          <FlatList
            style={{marginLeft:10, marginTop:10}}
            data={filterData}
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
          :
          (
            <View style={{alignSelf: 'center'}}>
              <Text style={{fontSize: 40}}>No result</Text>
            </View>
          )
        }
        
    </View>
    
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
        padding:10,
        marginLeft: 10,
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
    textInputSearch: {
      height: 43,
      fontSize: 14,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#eaeaea',
      backgroundColor: '#fafafa',
      paddingLeft: 10,
      marginTop: 5,
      marginBottom: 5,
      width: 350,
    },
})

export default Search