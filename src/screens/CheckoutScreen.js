import React, { useContext } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { AppContext } from '../context/AppContext';
import styles from '../styles/CheckoutStyles';

export default function CheckoutScreen({ navigation }) {
  const { cart, getSubtotal } = useContext(AppContext);

  const subtotal = getSubtotal();

  // Discount 
  let discount = 0;
  if (subtotal > 1200) {
    discount = subtotal * 0.2;
  }
  const finalAmount = subtotal - discount;

  function handlePlaceOrder() {
    if (cart.length === 0) {
      Alert.alert('Cart is empty', 'Please add some products first.');
      return;
    }
    // go to the Place Order screen to get the customer's details
    navigation.navigate('PlaceOrder', { amount: finalAmount });
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.heading}>Order Summary</Text>

        {cart.map((item) => (
          <View key={item.id} style={styles.itemRow}>
            <Text style={styles.itemName} numberOfLines={1}>{item.name} x {item.qty}</Text>
            <Text style={styles.itemPrice}>Rs. {item.price * item.qty}</Text>
          </View>
        ))}

        <View style={styles.box}>
          <View style={styles.row}>
            <Text style={styles.label}>Shopping Total</Text>
            <Text style={styles.value}>Rs. {subtotal}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Discount</Text>
            <Text style={styles.discountValue}>- Rs. {discount}</Text>
          </View>
          <View style={[styles.row, styles.finalRow]}>
            <Text style={styles.finalLabel}>Final Payable Amount</Text>
            <Text style={styles.finalValue}>Rs. {finalAmount}</Text>
          </View>
        </View>

        {discount > 0 ? (
          <Text style={styles.noteGreen}>✅ 20% discount applied automatically</Text>
        ) : (
          <Text style={styles.noteOrange}>💡 Add Rs. {1201 - subtotal} more to get 20% OFF</Text>
        )}
      </ScrollView>

      <TouchableOpacity style={styles.button} onPress={handlePlaceOrder}>
        <Text style={styles.buttonText}>Place Order - Rs. {finalAmount}</Text>
      </TouchableOpacity>
    </View>
  );
}
