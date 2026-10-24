import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppContext } from '../context/AppContext';
import { COLORS } from '../colors';
import styles from '../styles/AuthStyles';

export default function AuthScreen({ navigation, route }) {
  const { account, signup, login, addToCart } = useContext(AppContext);

  const [mode, setMode] = useState('login'); // 'login' or 'signup'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // the product to add after login -- sent from Product Details screen
  const product = route.params ? route.params.product : null;

  // called when login or signup is successful
  function finishLogin() {
    if (product) {
      addToCart(product);
      Alert.alert('Welcome!', product.name + ' was added to your cart.');
    }
    navigation.goBack();
  }

  function handleSubmit() {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please enter email and password.');
      return;
    }
    if (!email.includes('@')) {
      Alert.alert('Error', 'Please enter a valid email.');
      return;
    }

    if (mode === 'signup') {
      signup(email, password);
      finishLogin();
    } else if (!account) {
      Alert.alert('Error', 'No account found. Please sign up first.');
    } else if (login(email, password)) {
      finishLogin();
    } else {
      Alert.alert('Error', 'Wrong email or password.');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to ShopEase</Text>
      <Text style={styles.sub}>Please log in to add items to your cart</Text>

      
      <View style={styles.switchRow}>
        <TouchableOpacity
          style={[styles.tab, mode === 'login' && styles.tabActive]}
          onPress={() => setMode('login')}
        >
          <Text style={[styles.tabText, mode === 'login' && styles.tabTextActive]}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, mode === 'signup' && styles.tabActive]}
          onPress={() => setMode('signup')}
        >
          <Text style={[styles.tabText, mode === 'signup' && styles.tabTextActive]}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputBox}>
        <Ionicons name="mail-outline" size={22} color={COLORS.gray} />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputBox}>
        <Ionicons name="lock-closed-outline" size={22} color={COLORS.gray} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
      </View>

      {/* Switch */}
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>Show password</Text>
        <Switch
          value={showPassword}
          onValueChange={setShowPassword}
          trackColor={{ false: '#ccc', true: COLORS.switchBg }}
          thumbColor={showPassword ? COLORS.primary : '#f4f3f4'}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>{mode === 'login' ? 'Login' : 'Sign Up'}</Text>
      </TouchableOpacity>
    </View>
  );
}
