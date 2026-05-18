import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home/HomeScreen';

import { StyleSheet, Text, View } from 'react-native';
import AllProductsScreen from '../screens/Products/AllProductsScreen';

const Tab = createBottomTabNavigator();

const DummyScreen = ({ title }: { title: string }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />

      <Tab.Screen
        name="ShopTab"
        component={AllProductsScreen}
        options={{
          title: 'Shop',
        }}
      />

      <Tab.Screen
        name="CartTab"
        children={() => <DummyScreen title="Cart" />}
        options={{
          title: 'Cart',
        }}
      />

      <Tab.Screen
        name="ProfileTab"
        children={() => <DummyScreen title="Profile" />}
        options={{
          title: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
