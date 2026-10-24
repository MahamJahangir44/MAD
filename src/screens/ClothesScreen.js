import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../colors';
import styles from '../styles/ClothesStyles';

export default function ClothesScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Male</Text>

      <TouchableOpacity
        style={styles.row}
        onPress={() => navigation.navigate('ProductList', { title: 'Male . Stitched', categoryKey: 'male-stitched' })}
      >
        <View style={styles.iconBox}>
          <Ionicons name="shirt-outline" size={36} color={COLORS.maroon} />
        </View>
        <Text style={styles.label}>Stitched</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.row}
        onPress={() => navigation.navigate('ProductList', { title: 'Male . Unstitched', categoryKey: 'male-unstitched' })}
      >
        <View style={styles.iconBox}>
          <Ionicons name="cut-outline" size={36} color={COLORS.maroon} />
        </View>
        <Text style={styles.label}>Unstitched</Text>
      </TouchableOpacity>

      <Text style={styles.heading}>Female</Text>

      <TouchableOpacity
        style={styles.row}
        onPress={() => navigation.navigate('ProductList', { title: 'Female . Stitched', categoryKey: 'female-stitched' })}
      >
        <View style={styles.iconBox}>
          <Ionicons name="woman-outline" size={36} color={COLORS.maroon} />
        </View>
        <Text style={styles.label}>Stitched</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.row}
        onPress={() => navigation.navigate('ProductList', { title: 'Female . Unstitched', categoryKey: 'female-unstitched' })}
      >
        <View style={styles.iconBox}>
          <Ionicons name="cut-outline" size={36} color={COLORS.maroon} />
        </View>
        <Text style={styles.label}>Unstitched</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
