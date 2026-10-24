/*import React, { useState } from 'react';


import {
    View,
    Button
} from 'react-native';

import HomeScreen from './frontend/screens/HomeScreen';
import ProfileScreen from './frontend/screens/ProfileScreen';
import SettingsScreen from './frontend/screens/SettingsScreen';
import ContactScreen from './frontend/screens/ContactScreen';


export default function App() {
    
    const [screen, setScreen] = useState('home');

    if (screen === 'profile') {
        return (
            <View style={{ flex:1 }}>
                <ProfileScreen />

                <Button
                    title="Back to Home"
                    onPress={() => setScreen('home')}
                />
            </View>
        );
    }

    if (screen === 'settings') {
        return (
            <View style={{ flex: 1 }}>
                <SettingsScreen />

                <Button
                    title="Back to Home"
                    onPress={() => setScreen('home')}
                />
            </View>
        );
    }

    if (screen === 'contact') {
        return (
            <View style={{ flex: 1 }}>
                <ContactScreen />

                <Button
                    title="Back to Home"
                    onPress={() => setScreen('home')}
                />
            </View>
        );
    }

    return (
        <HomeScreen
            goToProfile={() => setScreen('profile')}
            goToSettings={() => setScreen('settings')}
            goToContact={() => setScreen('contact')}
        />
    );
}*/
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

//import StackNavigator from './frontend/navigation/StackNavigator';

import TabNavigator from './frontend/navigation/TabNavigator';
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';


export default function App() {
    let [fontsLoaded] = useFonts({
        Pacifico_400Regular
    });

    

    if (!fontsLoaded) {
        return null;   
    }
    return (
        <NavigationContainer>

            <TabNavigator />

        </NavigationContainer>
    );
}