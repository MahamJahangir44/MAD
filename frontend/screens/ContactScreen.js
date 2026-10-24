import React, { useState } from 'react';


import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native';

import GlobalStyles from '../styles/GlobalStyles';

import { MaterialIcons } from '@expo/vector-icons';

const ContactScreen = () => {

    const [email, setEmail] = useState('');

    const submitEmail = () => {
        Alert.alert(
            'Submitted',
            'Your email has been submitted.'
        );
    };

    return (
        <View style={GlobalStyles.container}>

            <Text style={GlobalStyles.title}>
                Contact Us
            </Text>

            <MaterialIcons name="email" size={30} color="purple" />

            <TextInput
                style={GlobalStyles.input}
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />

            <TouchableOpacity
                style={GlobalStyles.button}
                onPress={submitEmail}
            >
                <Text style={GlobalStyles.buttonText}>
                    Submit
                </Text>
            </TouchableOpacity>

        </View>
    );
};

export default ContactScreen;