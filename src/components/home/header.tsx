import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.icon}>☰</Text>
      </TouchableOpacity>

      <Text style={styles.logo}>Rahim</Text>

      <TouchableOpacity>
        <Text style={styles.icon}>🛒</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  logo: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
  },

  icon: {
    fontSize: 22,
  },
});