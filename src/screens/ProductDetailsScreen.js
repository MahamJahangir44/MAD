import React, { useContext } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppContext } from '../context/AppContext';
import { COLORS } from '../colors';
import styles from '../styles/ProductDetailsStyles';

export default function ProductDetailsScreen({ navigation, route }) {
  const { product } = route.params; // the product that was tapped
  const { user, addToCart } = useContext(AppContext);

  function handleAddToCart() {
    if (!user) {
      // not logged in 
      navigation.navigate('Auth', { product: product });
    } else {
      addToCart(product);
      Alert.alert('Added', product.name + ' was added to your cart.');
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {product.image ? (
          <Image source={product.image} style={styles.image} resizeMode="cover" />
        ) : (
          <View style={[styles.image, styles.iconBox]}>
            <Ionicons name={product.icon} size={120} color={COLORS.maroon} />
          </View>
        )}

        <Text style={styles.name}>{product.name}</Text>
        {/* sale product: old price + new price */}
        {product.oldPrice ? (
          <View>
            <View style={styles.priceRow}>
              <Text style={styles.oldPrice}>Rs. {product.oldPrice}</Text>
              <Text style={styles.price}>Rs. {product.price}</Text>
            </View>
            <Text style={styles.sale}>20% OFF - Limited Stock!</Text>
          </View>
        ) : (
          <Text style={styles.price}>Rs. {product.price}</Text>
        )}

        <Text style={styles.heading}>Description</Text>
        <Text style={styles.description}>{product.description}</Text>
      </ScrollView>

      <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
        <Ionicons name="cart" size={22} color="#fff" />
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}
