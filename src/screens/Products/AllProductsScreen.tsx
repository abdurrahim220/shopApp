import React, {useEffect, useState} from 'react';

import ProductCard from '../../components/home/ProductCard';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { AppDispatch, RootState } from '../../app/store';
import { getViewAllProducts } from '../../features/product/productThunk';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';


const AllProductsScreen = () => {
  const dispatch = useAppDispatch<AppDispatch>();

  const {products, loading, meta} = useAppSelector(
    (state: RootState) => state.product,
  );

  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    dispatch(getViewAllProducts({ page: 1, limit: 10 }));
  }, [dispatch]);

  const handleRefresh = async () => {
    setRefreshing(true);
    await dispatch(getViewAllProducts({ page: 1, limit: 10 }));
    setRefreshing(false);
  };

  const handleLoadMore = async () => {
    if (loading || loadingMore) {
      return;
    }
    if (meta && meta.page < meta.totalPages) {
      setLoadingMore(true);
      await dispatch(getViewAllProducts({ page: meta.page + 1, limit: 10 }));
      setLoadingMore(false);
    }
  };

  const renderFooter = () => {
    if (!loadingMore) {
      return null;
    }
    return (
      <View style={styles.footerLoader}>
        <ActivityIndicator size="small" />
      </View>
    );
  };

  if (loading && products.length === 0) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={item => item._id}
        renderItem={({item}) => (
          <ProductCard item={item} />
        )}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapperStyle}
        contentContainerStyle={styles.contentContainerStyle}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.2}
        ListFooterComponent={renderFooter}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </View>
  );
};

export default AllProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
  contentContainerStyle: {
    padding: 20,
  },
  footerLoader: {
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});