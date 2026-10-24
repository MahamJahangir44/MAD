import React, { useState } from 'react';

import {
    View,
    Text,
    Switch
} from 'react-native';

import GlobalStyles from '../styles/GlobalStyles';

const SettingsScreen = () => {

    const [darkMode, setDarkMode] = useState(false);

    return (
        <View
            style={[
                GlobalStyles.container,
                {
                    backgroundColor: darkMode ? 'black' : 'white'
                }
            ]}
        >

            <Text
                style={[
                    GlobalStyles.title,
                    {
                        color: darkMode ? 'white' : 'black'
                    }
                ]}
            >
                Settings
            </Text>

            <Text
                style={{
                    color: darkMode ? 'white' : 'black',
                    fontSize: 18,
                    marginBottom: 10
                }}
            >
                Dark Mode
            </Text>

            <Switch
                value={darkMode}
                onValueChange={setDarkMode}
            />

        </View>
    );
};

export default SettingsScreen;