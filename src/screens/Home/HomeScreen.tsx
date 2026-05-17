import React, { useEffect } from 'react';

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

// import Header from '../../components/home/Header';
import ProductCard from '../../components/home/ProductCard';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store';
import { getProducts } from '../../features/product/productThunk';
import Header from '../../components/home/header';
import HeroBanner from '../../components/home/HeroBanner';

const HomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { products, loading, error } = useSelector(
    (state: RootState) => state.product,
  );

  console.log('products', products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      <HeroBanner />

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Featured Products</Text>

        {error && <Text style={styles.errorText}>{error}</Text>}

        <FlatList
          data={products}
          keyExtractor={item => item._id}
          numColumns={2}
          columnWrapperStyle={styles.flatListContent}
          renderItem={({ item }) => <ProductCard item={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    flex: 1,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginVertical: 20,
  },

  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  flatListContent: {
    justifyContent: 'space-between',
  },

  errorText: {
    color: 'red',
    marginBottom: 20,
  },
});
