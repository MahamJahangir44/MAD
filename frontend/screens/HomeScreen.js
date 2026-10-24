/*import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity
} from 'react-native';

import GlobalStyles from '../styles/GlobalStyles';

const HomeScreen = ({ goToProfile, goToSettings, goToContact }) => {

    return (
        <ImageBackground
            source={{
                uri: 'https://images.unsplash.com/photo-1488998427799-e3362cec87c3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }}
            style={{ flex: 1 }}
        >

            <View style={GlobalStyles.container}>

                <Text
                    style={[
                        GlobalStyles.title
                    ]}
                >
                    Student App
                </Text>

                <TouchableOpacity
                    style={GlobalStyles.button}
                    onPress={goToProfile}
                >
                    <Text style={GlobalStyles.buttonText}>
                        Profile
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={GlobalStyles.button}
                    onPress={goToSettings}
                >
                    <Text style={GlobalStyles.buttonText}>
                        Settings
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={GlobalStyles.button}
                    onPress={goToContact}
                >
                    <Text style={GlobalStyles.buttonText}>
                        Contact
                    </Text>
                </TouchableOpacity>

               
            </View>

        </ImageBackground>
    );
};

export default HomeScreen;*/
import React from 'react';


import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity
} from 'react-native';

import GlobalStyles from '../styles/GlobalStyles';


const HomeScreen = ({ navigation }) => {

    return (
        <ImageBackground
            source={{
                uri: 'https://images.unsplash.com/photo-1488998427799-e3362cec87c3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }}
            style={{ flex: 1 }}
        >

            <View style={GlobalStyles.container}>

                <Text
                    style={[
                        GlobalStyles.title,
                        { fontFamily: 'Pacifico_400Regular' }
                    ]}
                >
                    Student App
                </Text>


                <TouchableOpacity
                    style={GlobalStyles.button}
                    onPress={() => navigation.navigate('Profile')}
                >
                    <Text style={GlobalStyles.buttonText}>
                        Profile
                    </Text>
                </TouchableOpacity>


                <TouchableOpacity
                    style={GlobalStyles.button}
                    onPress={() => navigation.navigate('Settings')}
                >
                    <Text style={GlobalStyles.buttonText}>
                        Settings
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={GlobalStyles.button}
                    onPress={() => navigation.navigate('Contact')}
                >
                    <Text style={GlobalStyles.buttonText}>
                        Contact
                    </Text>
                </TouchableOpacity>



            </View>

        </ImageBackground>
    );
};


export default HomeScreen;