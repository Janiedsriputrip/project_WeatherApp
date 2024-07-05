import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { fetchCurrentWeather } from './api'; // Sesuaikan dengan path file api.js Anda

const WeatherHomeScreen = ({ navigation }) => {
    const cities = ['London', 'New York', 'Paris', 'Tokyo']; // Contoh daftar kota
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const fetchWeatherData = async () => {
            const data = await Promise.all(
                cities.map(async (city) => {
                    try {
                        return await fetchCurrentWeather(city);
                    } catch (error) {
                        console.error('Error fetching weather:', error);
                        return null;
                    }
                })
            );
            setWeatherData(data);
        };

        fetchWeatherData();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={weatherData}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() =>
                            navigation.navigate('WeatherSearch', {
                                city: item.name,
                            })
                        }
                    >
                        <Text>{item.name}</Text>
                        <Text>Temperature: {item.main.temp}°C</Text>
                        <Text>Description: {item.weather[0].description}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
    },
});

export default WeatherHomeScreen;