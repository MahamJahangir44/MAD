import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProductCard from './ProductCard';
import styles from '../styles/ProductGridStyles';

export default function ProductGrid({ products }) {
  const navigation = useNavigation();

  return (
    <FlatList
      data={products}
      numColumns={2}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
      ListEmptyComponent={<Text style={styles.empty}>No products found</Text>}
      renderItem={({ item }) => (
        
        <View style={styles.item}>
          <ProductCard
            product={item}
            onPress={() => navigation.navigate('ProductDetails', { product: item })}
          />
        </View>
      )}
    />
  );
}