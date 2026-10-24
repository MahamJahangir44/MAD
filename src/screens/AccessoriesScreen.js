import React from 'react';
import { Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles/AccessoriesStyles';

export default function AccessoriesScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Male</Text>

      <TouchableOpacity
        style={styles.row}
        onPress={() => navigation.navigate('ProductList', { title: 'Male . Wallets', categoryKey: 'male-wallets' })}
      >
        <Image source={require('../../assets/images/wallets.jpeg')} style={styles.image} />
        <Text style={styles.label}>Purses / Wallets</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.row}
        onPress={() => navigation.navigate('ProductList', { title: 'Male . Watches', categoryKey: 'male-watches' })}
      >
        <Image source={require('../../assets/images/watches.jpeg')} style={styles.image} />
        <Text style={styles.label}>Watches</Text>
      </TouchableOpacity>

      <Text style={styles.heading}>Female</Text>

      <TouchableOpacity
        style={styles.row}
        onPress={() => navigation.navigate('ProductList', { title: 'Female . Jewellery', categoryKey: 'female-jewellery' })}
      >
        <Image source={require('../../assets/images/jewellery.jpeg')} style={styles.image} />
        <Text style={styles.label}>Jewellery</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.row}
        onPress={() => navigation.navigate('ProductList', { title: 'Female . Purses', categoryKey: 'female-purses' })}
      >
        <Image source={require('../../assets/images/purses.jpeg')} style={styles.image} />
        <Text style={styles.label}>Purses</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
