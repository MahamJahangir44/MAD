import React, { useState } from 'react';

import {
    View,
    Text,
    Image,
    TextInput
} from 'react-native';

import GlobalStyles from '../styles/GlobalStyles';

const ProfileScreen = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    return (
        
        <View style={GlobalStyles.container}>

            <Text style={GlobalStyles.title}>
                My Profile
            </Text>

            <Image
                source={{
                    uri: 'https://plus.unsplash.com/premium_photo-1677252438411-9a930d7a5168?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }}
                style={GlobalStyles.image}
            />

            <TextInput
                style={GlobalStyles.input}
                placeholder="Enter your name"
                value={name}
                onChangeText={setName}
                keyboardType="default"
            />

            <TextInput
                style={GlobalStyles.input}
                placeholder="Enter your age"
                value={age}
                onChangeText={setAge}
                keyboardType="numeric"
                inputMode="numeric"
            />

            <Text style={GlobalStyles.text}>
                Name: {name}
            </Text>

            <Text style={GlobalStyles.text}>
                Age: {age}
            </Text>


        </View>
    );
};

export default ProfileScreen;