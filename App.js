import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WeatherHomeScreen from './WeatherHomeScreen';
import WeatherSearchScreen from './WeatherSearchScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="WeatherHome">
                <Stack.Screen
                    name="WeatherHome"
                    component={WeatherHomeScreen}
                    options={{ title: 'Weather Home' }}
                />
                <Stack.Screen
                    name="WeatherSearch"
                    component={WeatherSearchScreen}
                    options={{ title: 'Weather Search' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;