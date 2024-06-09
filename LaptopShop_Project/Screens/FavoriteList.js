import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import turnback from '../assets/icons/turnback.png';
import cart from '../assets/icons/lucide_shopping-cart.png';
import FavoriteItem from '../Components/FavoriteItem';
import legion from '../assets/icons/Legion9i.png';

const FavoriteList = props => {
  return (
    <ScrollView style={{flexDirection: 'column'}}>
      <View style={styles.container}>
        <TouchableOpacity /*</View>onPress={() => {navigation.goBack();}}*/>
          <Image
            source={turnback}
            style={{
              marginLeft: 5,
              marginTop: 10,
              marginRight: 15,
              resizeMode: 'contain',
              height: 30,
              width: 30,
            }}
          />
        </TouchableOpacity>

        <Text style={styles.logo}>Favorite</Text>

        <TouchableOpacity /*onPress={props.navigation.navigate('CartDetail')}*/>
          <Image
            source={cart}
            style={{
              marginLeft: 10,
              marginTop: 10,
              marginRight: 15,
              resizeMode: 'contain',
              height: 35,
              width: 35,
              opacity: 1,
            }}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.wishlistTitle}>Wish List (3)</Text>

      <FavoriteItem
        productImage={legion}
        productName="Legion"
        price="$4000"></FavoriteItem>
        
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  wishlistTitle: {
    fontSize: 30,
    marginLeft: 30,
    fontFamily: 'Cuprum-Bold',
    color: '#000',
    marginTop: 30,
  },

  logo: {
    paddingTop: 7,
    fontSize: 25,
    fontFamily: 'Cuprum-Bold',
    color: '#000000',
  },
});

export default FavoriteList;
