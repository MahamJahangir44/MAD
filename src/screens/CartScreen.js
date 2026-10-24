import React, { useContext } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppContext } from '../context/AppContext';
import { COLORS } from '../colors';
import styles from '../styles/CartStyles';

export default function CartScreen({ navigation }) {
  const { cart, increaseQty, decreaseQty, removeItem, getSubtotal } = useContext(AppContext);

  // if the cart has no items
  if (cart.length === 0) {
    return (
      <View style={styles.empty}>
        <Ionicons name="cart-outline" size={80} color={COLORS.gray} />
        <Text style={styles.emptyText}>Your cart is empty</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.item}>
            {item.image ? (
              <Image source={item.image} style={styles.image} resizeMode="cover" />
            ) : (
              <View style={[styles.image, styles.iconBox]}>
                <Ionicons name={item.icon} size={36} color={COLORS.maroon} />
              </View>
            )}

            <View style={styles.info}>
              <Text style={styles.name} numberOfLines={2}>{item.name}</Text>
              <Text style={styles.price}>Rs. {item.price}</Text>

              {/* quantity buttons */}
              <View style={styles.qtyRow}>
                <TouchableOpacity style={styles.qtyBtn} onPress={() => decreaseQty(item.id)}>
                  <Text style={styles.qtyBtnText}>−</Text>
                </TouchableOpacity>
                <Text style={styles.qty}>{item.qty}</Text>
                <TouchableOpacity style={styles.qtyBtn} onPress={() => increaseQty(item.id)}>
                  <Text style={styles.qtyBtnText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* remove button */}
            <TouchableOpacity onPress={() => removeItem(item.id)}>
              <Ionicons name="trash-outline" size={26} color={COLORS.red} />
            </TouchableOpacity>
          </View>
        )}
      />

      {/* total and checkout button */}
      <View style={styles.footer}>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>Rs. {getSubtotal()}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Checkout')}>
          <Text style={styles.buttonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
