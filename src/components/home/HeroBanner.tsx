import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const HeroBanner = () => {
  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c',
      }}
      style={styles.banner}
      imageStyle={styles.imageStyle}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>FOR WOMEN</Text>

        <Text style={styles.subtitle}>169 items</Text>
      </View>
    </ImageBackground>
  );
};

export default HeroBanner;

const styles = StyleSheet.create({
  banner: {
    height: 180,
    marginTop: 10,
    justifyContent: 'flex-end',
    marginHorizontal: 20,
  },
  imageStyle: {
    borderRadius: 20,
  },

  overlay: {
    padding: 20,
  },

  title: {
    color: '#000',
    fontSize: 26,
    fontWeight: '700',
  },

  subtitle: {
    marginTop: 6,
    fontSize: 14,
    color: '#444',
  },
});
