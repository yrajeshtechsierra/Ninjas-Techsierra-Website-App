//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../constants/constants';

// create a component
const Home = () => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.red,
    },
});

//make this component available to the app
export default Home;
