import React, { useEffect } from 'react';

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

// import Header from '../../components/home/Header';
import ProductCard from '../../components/home/ProductCard';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store';
import { getHomeProducts } from '../../features/product/productThunk';
import Header from '../../components/home/header';
import HeroBanner from '../../components/home/HeroBanner';
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<any>();
  const { homeProducts, loading, error } = useSelector(
    (state: RootState) => state.product,
  );

  // console.log('homeProducts', homeProducts);

  useEffect(() => {
    dispatch(getHomeProducts());
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
        <View style={styles.rowBetween}>
          <Text style={styles.sectionTitle}>Featured Products</Text>

          <TouchableOpacity onPress={() => navigation.navigate('ShopTab')}>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>

        {error && <Text style={styles.errorText}>{error}</Text>}

        <FlatList
          data={homeProducts}
          keyExtractor={item => item._id}
          initialNumToRender={6}
          maxToRenderPerBatch={6}
          windowSize={6}
          removeClippedSubviews={true}
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
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },

  viewAllText: {
    fontSize: 14,
    fontWeight: '600',
  },
});
