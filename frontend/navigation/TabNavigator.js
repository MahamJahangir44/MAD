import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ContactScreen from '../screens/ContactScreen';


const Tab = createBottomTabNavigator();


const TabNavigator = () => {

    return (
        <Tab.Navigator>

            <Tab.Screen
                name="Home"
                component={HomeScreen}
                
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="home" size={30} color="pink" />
                    ), headerTitle:"Welcome" , headerStyle: { backgroundColor:"purple"} , headerTintColor:"pink" , headerTitleAlign:"center"
                }}
            
            />

            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="person" size={30} color="pink" />
                    ), headerTitle:"Your Profile" , headerStyle: { backgroundColor:"purple"} , headerTintColor:"pink" , headerTitleAlign:"center"
                }}
               
            />

            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="settings" size={30} color="pink" />
                    ), headerTitle:"App Settings" , headerStyle: { backgroundColor:"purple"} , headerTintColor:"pink" , headerTitleAlign:"center"
                }}
                
            />

            <Tab.Screen
                name="Contact"
                component={ContactScreen}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="call" size={30} color="pink" />
                    ), headerTitle:"Contact Us" , headerStyle: { backgroundColor:"purple"} , headerTintColor:"pink" , headerTitleAlign:"center"
                }}
               
            />

        </Tab.Navigator>
    );
};


export default TabNavigator;

