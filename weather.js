const axios = require('axios');

async function getWeather() {
    try {
        // Hoboken / NYC coordinates
        const url = 'https://api.open-meteo.com/v1/forecast?latitude=40.74&longitude=-74.03&current_weather=true';

        const response = await axios.get(url);

        // Extract temperature
        const temp = response.data.current_weather.temperature;

        return temp;
    } catch (error) {
        console.error('Error fetching weather:', error.message);
        throw error;
    }
}

module.exports = getWeather;