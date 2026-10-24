import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [account, setAccount] = useState(null); 
  const [user, setUser] = useState(null);      
  const [cart, setCart] = useState([]);        

  //  Signup / Login / Logout 
  function signup(email, password) {
    setAccount({ email: email, password: password });
    setUser({ email: email }); 
  }

  // returns true if the email and password are correct
  function login(email, password) {
    if (account && account.email === email && account.password === password) {
      setUser({ email: email });
      return true;
    }
    return false;
  }

  function logout() {
    setUser(null);
  }

  //  Cart 
  function addToCart(product) {
    const found = cart.find((item) => item.id === product.id);
    if (found) {
      
      setCart(cart.map((item) => (item.id === product.id ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  }

  function increaseQty(id) {
    setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
  }

  function decreaseQty(id) {
    setCart(cart.map((item) => (item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item)));
  }

  function removeItem(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  // total price of cart
  function getSubtotal() {
    let total = 0;
    cart.forEach((item) => {
      total = total + item.price * item.qty;
    });
    return total;
  }

  return (
    <AppContext.Provider
      value={{ user, account, signup, login, logout, cart, addToCart, increaseQty, decreaseQty, removeItem, clearCart, getSubtotal }}
    >
      {children}
    </AppContext.Provider>
  );
}
