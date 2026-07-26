import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { useRoute } from '@react-navigation/native';

import { useNavigation } from '@react-navigation/native';
// import { SvgIcons } from '../../utils/icons';

const ProductDetailsScreen = () => {
  const route = useRoute<any>();

  const { product } = route.params;
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <svg
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <path
                d="M8 6L8 2L10 2L16 8L10 14L8 14L8 10L-1.74845e-07 10L-3.01991e-07 6L8 6Z"
                fill="#000000"
              ></path>{' '}
            </g>
          </svg>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Product Details</Text>

        <View style={styles.width} />
      </View>
      <Image source={{ uri: product.image }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>{product.title}</Text>

        <Text style={styles.price}>Price: ৳ {product.price}</Text>
        <Text style={styles.quantity}>
          Available Quantity: {product.quantity}
        </Text>

        <Text style={styles.brand}>Brand: {product.brand}</Text>
        <Text style={styles.category}>Category: {product.category}</Text>

        <Text style={styles.description}>{product.description}</Text>

        <TouchableOpacity style={styles.addToCartButton} onPress={() => {}}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 4,
    paddingBottom: 4,
  },

  width: {
    width: 30,
  },
  backIcon: {
    fontSize: 24,
    fontWeight: '600',
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
  },

  image: {
    width: '100%',
    height: 350,

    backgroundColor: '#f1f1f1',
  },

  content: {
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
  },

  price: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 15,
    color: '#ff6b35',
  },
  quantity: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 5,
    color: 'green',
  },
  category: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 5,
    color: '#ff6b35',
  },

  brand: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: '500',
  },

  description: {
    marginTop: 20,
    lineHeight: 24,
    fontSize: 16,
    color: '#444',
  },
  addToCartButton: {
    backgroundColor: '#ff6b35',
    padding: 16,
    borderRadius: 30,
    marginTop: 30,
  },

  addToCartText: {
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 16,
  },
});
