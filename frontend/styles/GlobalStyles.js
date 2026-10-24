import { StyleSheet } from 'react-native';

const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        color:"black",
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 30,
    },
image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20
},
    button: {
        backgroundColor: 'purple',
        padding: 15,
        width: 220,
        borderRadius: 10,
        marginVertical: 8,
        alignItems: 'center',
    },

    buttonText: {
        color: 'pink',
        fontSize: 18,
        fontWeight: 'bold',
    },

    input: {
        width: 250,
        borderWidth: 2,
        borderColor: 'gray',
        padding: 12,
        marginVertical: 8,
        borderRadius: 8,
    },

    text: {
        fontSize: 18,
        marginVertical: 5,
    }
});
export default GlobalStyles;