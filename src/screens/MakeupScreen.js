import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import ProductGrid from '../components/ProductGrid';
import { COLORS } from '../colors';
import styles from '../styles/MakeupStyles';

const API_URL = 'https://fakestoreapi.com/products';

export default function MakeupScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // runs once when the screen opens
  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      // change the API data into our product format.
      
      const list = data.map((item) => ({
        id: 'api-' + item.id,
        name: item.title,
        price: Math.round(item.price * 10),
        description: item.description,
        image: { uri: item.image },
      }));
      setProducts(list);
    } catch (e) {
      setError('Could not load products. Please check your internet connection.');
    }
    setLoading(false);
  }

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={COLORS.primary} />
        <Text style={styles.message}>Loading products...</Text>
      </View>
    );
  }

  if (error !== '') {
    return (
      <View style={styles.center}>
        <Text style={styles.message}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ProductGrid products={products} />
    </View>
  );
}
