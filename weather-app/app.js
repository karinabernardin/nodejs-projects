const locationUtils = require('./utils/locationUtils'); 
const weatherUtils = require('./utils/weatherUtils');

const location = process.argv[2];

if (!location) {
    console.log('Please provide a location.');
} else {
    locationUtils.getCoordinatesFromLocation(location, (error, data) => {
        if (error) {
            return console.log(error);
        }
    
        weatherUtils.getCurrentWeather(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error);
            }
    
            console.log(data.location);
            console.log(forecastData.currentDescription + '. The current temperature is ' + forecastData.currentTemperature + '°C but the temperature sensation is of ' + forecastData.currentFeelsLike + '°C.');
        });
    });    
}

