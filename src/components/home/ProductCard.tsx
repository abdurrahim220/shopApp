import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { Product } from '../../features/product/productType';

interface Props {
  item: Product;
}

const ProductCard: React.FC<Props> = ({item}) => {
  return (
    <View style={styles.card}>
      <Image
        source={{uri: item.image}}
        style={styles.image}
      />

      <Text numberOfLines={2} style={styles.title}>
        {item.title}
      </Text>

      <Text style={styles.price}>
        ৳ {item.price}
      </Text>
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