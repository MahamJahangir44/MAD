import React, { useEffect, useRef, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, Animated, Easing, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppContext } from '../context/AppContext';
import { COLORS } from '../colors';
import styles, { TEXT_WIDTH } from '../styles/HomeStyles';

const screenWidth = Dimensions.get('window').width;

const BANNER_TEXT = '🔥 20% OFF on Shopping above Rs.1200 - Available till 20th October 🔥';

// 3 main categories
const categories = [
  { name: 'Accessories', screen: 'Accessories', sub: 'Watches, wallet, jewellery', image: require('../../assets/images/accessoriess.jpeg') },
  { name: 'Clothes', screen: 'Clothes', sub: 'Stitched & Unstitched', image: require('../../assets/images/clothess.jpeg') },
  { name: 'Makeup', screen: 'Makeup', sub: 'Trending makeup picks', image: require('../../assets/images/makeupp.jpeg') },
];

export default function HomeScreen({ navigation }) {
  const { user, logout } = useContext(AppContext);

  // Moving banner: 
  const moveX = useRef(new Animated.Value(screenWidth)).current;

  // start the animation when the screen opens
  useEffect(() => {
    Animated.loop(
      Animated.timing(moveX, {
        toValue: -TEXT_WIDTH, // slide to the left until the text leaves the screen
        duration: 10000,      // 10 seconds 
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      {/* Top bar */}
      <View style={styles.topBar}>
        <View style={styles.topBarText}>
          <Text style={styles.welcome}>{user ? user.email : 'Welcome 👋'}</Text>
          <Text style={styles.title}>ShopEase</Text>
        </View>

        {/* login button when logged out, logout button when logged in */}
        {user ? (
          <TouchableOpacity style={styles.iconBtn} onPress={logout}>
            <Ionicons name="log-out-outline" size={24} color={COLORS.gray} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.iconBtn} onPress={() => navigation.navigate('Auth')}>
            <Ionicons name="person-outline" size={24} color={COLORS.gray} />
          </TouchableOpacity>
        )}

        <TouchableOpacity style={styles.iconBtn} onPress={() => navigation.navigate('Cart')}>
          <Ionicons name="cart-outline" size={24} color={COLORS.gray} />
        </TouchableOpacity>
      </View>

      {/* Moving banner */}
      <View style={styles.banner}>
        <Animated.Text
          style={[styles.bannerText, { transform: [{ translateX: moveX }] }]}
          numberOfLines={1}
        >
          {BANNER_TEXT}
        </Animated.Text>
      </View>

      <Text style={styles.heading}>Shop by Category</Text>

      {/* .map() makes one card for each category */}
      {categories.map((cat) => (
        <TouchableOpacity
          key={cat.name}
          style={styles.catCard}
          onPress={() => navigation.navigate(cat.screen)}
        >
          <View style={styles.catTextBox}>
            <Text style={styles.catName}>{cat.name}</Text>
            <Text style={styles.catSub}>{cat.sub}</Text>
          </View>
          <Image source={cat.image} style={styles.catImage} resizeMode="cover" />
        </TouchableOpacity>
      ))}
    </View>
  );
}
