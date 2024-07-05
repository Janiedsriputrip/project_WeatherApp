import axios from 'axios';

const API_KEY = '79826f5519961a37b0443c0bbc494c02'; // Ganti dengan API key Anda
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchCurrentWeather = async (city) => {
    try {
        const response = await axios.get(`${BASE_URL}/weather`, {
            params: {
                q: city,
                appid: API_KEY,
                units: 'metric', // Satuan metrik untuk suhu Celsius
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching current weather:', error);
        throw error;
    }
};