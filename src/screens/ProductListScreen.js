import React from 'react';
import { View } from 'react-native';
import ProductGrid from '../components/ProductGrid';
import { products } from '../data/products';
import styles from '../styles/ProductListStyles';

export default function ProductListScreen({ route }) {
  // keep only the products of the chosen sub-category
  const list = products.filter((p) => p.category === route.params.categoryKey);

  return (
    <View style={styles.container}>
      <ProductGrid products={list} />
    </View>
  );
}
