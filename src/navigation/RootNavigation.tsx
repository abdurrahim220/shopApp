import React from 'react';

import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import BottomTabNavigator from './BottomTabNavigator';

import ProductDetailsScreen from '../screens/Products/ProductDetailsScreen';
import { Product } from '../features/product/productType';

export type RootStackParamList = {
  MainTabs: undefined;

  ProductDetails: {
    product: Product;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTabs"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export type RootNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default RootNavigator;
