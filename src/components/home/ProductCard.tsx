import React from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Product } from '../../features/product/productType';

interface Props {
  item: Product;
}
import { useNavigation } from '@react-navigation/native';

const ProductCard: React.FC<Props> = ({ item }) => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => navigation.navigate('ProductDetails', { product: item })}
      >
        <Image source={{ uri: item.image }} style={styles.image} />

        <Text numberOfLines={2} style={styles.title}>
          {item.title}
        </Text>

        <Text style={styles.price}>৳ {item.price}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    width: 170,
    marginRight: 18,
  },

  image: {
    width: '100%',
    height: 200,
    borderRadius: 20,
    backgroundColor: '#f1f1f1',
  },

  title: {
    marginTop: 10,
    fontWeight: '600',
    fontSize: 15,
  },

  price: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: '700',
  },
});
