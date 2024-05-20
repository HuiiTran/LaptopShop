/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Colors from '../../constants/Colors';
import * as cartActions from '../../store/actions/cart';

class Product {
    constructor(id, ownerId, title, imageUrl, description, price) {
      this.id = id;
      this.ownerId = ownerId;
      this.title = title;
      this.imageUrl = imageUrl;
      this.description = description;
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
      100000
    ),
    new Product(
      'p2',
      'u1',
      'Blue Carpet',
      'https://images.pexels.com/photos/6292/blue-pattern-texture-macro.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'Fits your red shirt perfectly. To stand on. Not to wear it.',
      99.99
    ),
    new Product(
      'p3',
      'u2',
      'Coffee Mug',
      'https://images.pexels.com/photos/160834/coffee-cup-and-saucer-black-coffee-loose-coffee-beans-160834.jpeg?cs=srgb&dl=bean-beans-black-coffee-160834.jpg&fm=jpg',
      'Can also be used for tea!',
      8.99
    ),
    new Product(
      'p4',
      'u3',
      'The Book - Limited Edition',
      'https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?cs=srgb&dl=blur-blurred-book-pages-46274.jpg&fm=jpg',
      "What the content is? Why would that matter? It's a limited edition!",
      15.99
    ),
    new Product(
      'p5',
      'u3',
      'PowerBook',
      'https://get.pxhere.com/photo/laptop-computer-macbook-mac-screen-water-board-keyboard-technology-air-mouse-photo-airport-aircraft-tablet-aviation-office-black-monitor-keys-graphic-hardware-image-pc-exhibition-multimedia-calculator-vector-water-cooling-floppy-disk-phased-out-desktop-computer-netbook-personal-computer-computer-monitor-electronic-device-computer-hardware-display-device-448748.jpg',
      'Awesome hardware, crappy keyboard and a hefty price. Buy now before a new one is released!',
      2299.99
    ),
    new Product(
      'p6',
      'u1',
      'Pen & Paper',
      'https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg',
      "Can be used for role-playing (not the kind of role-playing you're thinking about...).",
      5.49
    ),
    new Product(
      'p7',
      'u1',
      'Pen & Paper',
      'https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg',
      "Can be used for role-playing (not the kind of role-playing you're thinking about...).",
      5.49
    ),
    new Product(
      'p8',
      'u1',
      'Pen & Paper',
      'https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg',
      "Can be used for role-playing (not the kind of role-playing you're thinking about...).",
      5.49
    ),
    new Product(
      'p9',
      'u1',
      'Pen & Paper',
      'https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg',
      "Can be used for role-playing (not the kind of role-playing you're thinking about...).",
      5.49
    ),
    new Product(
      'p10',
      'u1',
      'Pen & Paper',
      'https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg',
      "Can be used for role-playing (not the kind of role-playing you're thinking about...).",
      5.49
    ),
    new Product(
      'p11',
      'u1',
      'Pen & Paper',
      'https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg',
      "Can be used for role-playing (not the kind of role-playing you're thinking about...).",
      5.49
    )
  ];
  


const ProductDetailScreen = props => {
  const productId = props.navigation.getParam('productId');
  const selectedProduct = useSelector(state =>
    state.products.availableProducts.find(prod => prod.id === productId)
  );
  const dispatch = useDispatch();
  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
      <View style={styles.actions}>
        <Button
          color={Colors.primary}
          title="Add to cart"
          onPress={() => {
            dispatch(cartActions.addToCart(selectedProduct));
          }}
        />
      </View>
      <Text style={styles.price}>{selectedProduct.price.toFixed(2)}€</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

ProductDetailScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam('productTitle')
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300
  },
  actions: {
    marginVertical: 10,
    alignItems: 'center'
  },
  price: {
    fontSize: 20,
    fontFamily: 'open-sans-bold',
    color: '#888',
    textAlign: 'center',
    marginVertical: 20
  },
  description: {
    fontSize: 14,
    fontFamily: 'open-sans',
    textAlign: 'center',
    marginHorizontal: 20
  }
});

export default ProductDetailScreen;
