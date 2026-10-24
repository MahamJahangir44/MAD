import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ContactScreen from '../screens/ContactScreen';


const Stack = createNativeStackNavigator();


const StackNavigator = () => {

    return (
        <Stack.Navigator initialRouteName="Home">

            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options= {{ title:"Welcome" , headerStyle: { backgroundColor:"purple"} , headerTintColor:"pink" , headerTitleAlign:"center"}}
            />

            <Stack.Screen 
                 name="Profile"
                 component={ProfileScreen}
                 options= {{ title:"Your Profile" , headerStyle: { backgroundColor:"purple"} , headerTintColor:"pink" , headerTitleAlign:"center"}}
                 />

            <Stack.Screen
                name="Settings"
                component={SettingsScreen}
                options= {{ title:"App Settings" , headerStyle: { backgroundColor:"purple"} , headerTintColor:"pink" , headerTitleAlign:"center"}}
            />

            <Stack.Screen
                name="Contact"
                component={ContactScreen}
                options= {{ title:"Contact Us" , headerStyle: { backgroundColor:"purple"} , headerTintColor:"pink" , headerTitleAlign:"center"}}
            />

        </Stack.Navigator>
    );
};


export default StackNavigator;