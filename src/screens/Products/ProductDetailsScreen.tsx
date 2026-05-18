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

const ProductDetailsScreen = () => {
  const route = useRoute<any>();

  const { product } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>{product.title}</Text>

        <Text style={styles.price}>৳ {product.price}</Text>

        <Text style={styles.brand}>Brand: {product.brand}</Text>

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
