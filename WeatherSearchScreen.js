import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { fetchCurrentWeather } from './api'; // Sesuaikan dengan path file api.js Anda

const WeatherSearchScreen = ({ navigation }) => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');

    const searchWeather = async () => {
        try {
            const data = await fetchCurrentWeather(city);
            setWeatherData(data);
            setError('');
        } catch (error) {
            console.error('Error fetching weather:', error);
            setWeatherData(null);
            setError('City not found. Please try again.');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter city name"
                value={city}
                onChangeText={setCity}
            />
            <Button title="Search" onPress={searchWeather} />
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
            {weatherData ? (
                <View style={styles.weatherContainer}>
                    <Text style={styles.weatherText}>
                        Temperature: {weatherData.main.temp}°C
                    </Text>
                    <Text style={styles.weatherText}>
                        Description: {weatherData.weather[0].description}
                    </Text>
                </View>
            ) : null}
            <Button
                title="Back to Home"
                onPress={() => navigation.goBack()}
                style={styles.backButton}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    errorText: {
        fontSize: 18,
        color: 'red',
        marginTop: 10,
    },
    weatherContainer: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        alignItems: 'center',
    },
    weatherText: {
        fontSize: 16,
        marginBottom: 5,
    },
    backButton: {
        marginTop: 20,
    },
});

export default WeatherSearchScreen;