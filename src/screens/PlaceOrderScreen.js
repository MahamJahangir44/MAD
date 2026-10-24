import React, { useState, useContext } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppContext } from '../context/AppContext';
import { COLORS } from '../colors';
import styles from '../styles/PlaceOrderStyles';

export default function PlaceOrderScreen({ navigation, route }) {
  const { user, clearCart } = useContext(AppContext);
  const amount = route.params.amount; // final payable amount from the Checkout screen

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState(user ? user.email : ''); // filled from the login
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');

  function handleConfirm() {
    // check that every field is filled in
    if (name === '' || phone === '' || email === '' || address === '' || city === '') {
      Alert.alert('Missing details', 'Please fill in all the fields.');
      return;
    }
    if (isNaN(phone) || phone.length < 10) {
      Alert.alert('Invalid phone', 'Please enter a valid phone number (numbers only).');
      return;
    }
    if (!email.includes('@')) {
      Alert.alert('Invalid email', 'Please enter a valid email address.');
      return;
    }

    // everything is fine 
    Alert.alert(
      'Order Placed 🎉',
      'Thank you ' + name + '!\nYour order of Rs. ' + amount + ' will be delivered to ' + city + '.\nPayment: Cash on Delivery',
      [
        {
          text: 'OK',
          onPress: () => {
            clearCart();
            navigation.popToTop(); // go back to the Home screen
          },
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <Text style={styles.heading}>Delivery Details</Text>
        <Text style={styles.sub}>Please enter your details to place the order</Text>

        <Text style={styles.label}>Full Name</Text>
        <View style={styles.inputBox}>
          <Ionicons name="person-outline" size={20} color={COLORS.gray} />
          <TextInput style={styles.input} placeholder="Your full name" value={name} onChangeText={setName} />
        </View>

        <Text style={styles.label}>Phone Number</Text>
        <View style={styles.inputBox}>
          <Ionicons name="call-outline" size={20} color={COLORS.gray} />
          <TextInput
            style={styles.input}
            placeholder="03XXXXXXXXX"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
        </View>

        <Text style={styles.label}>Email</Text>
        <View style={styles.inputBox}>
          <Ionicons name="mail-outline" size={20} color={COLORS.gray} />
          <TextInput
            style={styles.input}
            placeholder="Email address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <Text style={styles.label}>Delivery Address</Text>
        <View style={styles.inputBox}>
          <Ionicons name="home-outline" size={20} color={COLORS.gray} />
          <TextInput
            style={[styles.input, styles.addressInput]}
            placeholder="House no, street, area"
            value={address}
            onChangeText={setAddress}
            multiline={true}
          />
        </View>

        <Text style={styles.label}>City</Text>
        <View style={styles.inputBox}>
          <Ionicons name="location-outline" size={20} color={COLORS.gray} />
          <TextInput style={styles.input} placeholder="City" value={city} onChangeText={setCity} />
        </View>

        <Text style={styles.label}>Payment Method</Text>
        <View style={styles.paymentBox}>
          <Ionicons name="cash-outline" size={24} color={COLORS.maroon} />
          <Text style={styles.paymentText}>Cash on Delivery</Text>
          <Ionicons name="checkmark-circle" size={24} color={COLORS.green} />
        </View>

        <View style={styles.amountBox}>
          <Text style={styles.amountLabel}>Amount to Pay</Text>
          <Text style={styles.amountValue}>Rs. {amount}</Text>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.button} onPress={handleConfirm}>
        <Text style={styles.buttonText}>Confirm Order</Text>
      </TouchableOpacity>
    </View>
  );
}
