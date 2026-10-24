import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../colors';
import styles from '../styles/ProductCardStyles';

export default function ProductCard({ product, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {/* show the photo, or an icon if the product has no photo */}
      {product.image ? (
        <Image source={product.image} style={styles.image} resizeMode="cover" />
      ) : (
        <View style={[styles.image, styles.iconBox]}>
          <Ionicons name={product.icon} size={50} color={COLORS.maroon} />
        </View>
      )}
      <Text style={styles.name} numberOfLines={2}>{product.name}</Text>
     
      {product.oldPrice ? (
        <View>
          <View style={styles.priceRow}>
            <Text style={styles.oldPrice}>Rs. {product.oldPrice}</Text>
            <Text style={styles.price}>Rs. {product.price}</Text>
          </View>
          <Text style={styles.sale}>20% OFF - Limited Stock</Text>
        </View>
      ) : (
        <Text style={styles.price}>Rs. {product.price}</Text>
      )}
    </TouchableOpacity>
  );
}
