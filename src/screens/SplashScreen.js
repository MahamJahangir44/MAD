import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/SplashStyles';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    // after 3 seconds go to Home 
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.shapeTop} />
      <View style={styles.shapeBottom} />

      <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.appName}>ShopEase</Text>
      <Text style={styles.tagline}>STYLE . BEAUTY . ACCESSORIES</Text>

      <View style={styles.offerBox}>
        <Text style={styles.offerBig}>20% OFF</Text>
        <Text style={styles.offerSmall}>Limited Stock!</Text>
      </View>
    </View>
  );
}
