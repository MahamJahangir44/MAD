// App.js
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';

import { AppProvider } from './src/context/AppContext';
import { COLORS } from './src/colors';

import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import AccessoriesScreen from './src/screens/AccessoriesScreen';
import ClothesScreen from './src/screens/ClothesScreen';
import ProductListScreen from './src/screens/ProductListScreen';
import MakeupScreen from './src/screens/MakeupScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
import AuthScreen from './src/screens/AuthScreen';
import CartScreen from './src/screens/CartScreen';
import CheckoutScreen from './src/screens/CheckoutScreen';
import PlaceOrderScreen from './src/screens/PlaceOrderScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  // Load the custom font 
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_700Bold });
  if (!fontsLoaded) return null; // wait until the font is ready

  return (
    <AppProvider>
      {/* status bar  */}
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={({ navigation }) => ({
            headerStyle: { backgroundColor: COLORS.primary },
            headerTintColor: '#fff',
            // status bar 
            statusBarStyle: 'light',
            statusBarBackgroundColor: COLORS.primary,
            headerTitleStyle: { fontFamily: 'Poppins_700Bold', fontSize: 20 },
            // cart icon on the top-right of every screen
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                <Ionicons name="cart-outline" size={26} color="#fff" />
              </TouchableOpacity>
            ),
          })}
        >
          <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false, statusBarStyle: 'light' }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false, statusBarStyle: 'dark', statusBarBackgroundColor: COLORS.light }} />
          <Stack.Screen name="Accessories" component={AccessoriesScreen} />
          <Stack.Screen name="Clothes" component={ClothesScreen} />
          <Stack.Screen name="ProductList" component={ProductListScreen} options={({ route }) => ({ title: route.params.title })} />
          <Stack.Screen name="Makeup" component={MakeupScreen} />
          <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} options={{ title: 'Product Details' }} />
          <Stack.Screen name="Auth" component={AuthScreen} options={{ title: 'Login / Signup', headerRight: () => null }} />
          <Stack.Screen name="Cart" component={CartScreen} options={{ title: 'My Cart', headerRight: () => null }} />
          <Stack.Screen name="Checkout" component={CheckoutScreen} options={{ headerRight: () => null }} />
          <Stack.Screen name="PlaceOrder" component={PlaceOrderScreen} options={{ title: 'Place Order', headerRight: () => null }} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}