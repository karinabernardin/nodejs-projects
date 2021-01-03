const locationUtils = require('./utils/locationUtils'); 
const weatherUtils = require('./utils/weatherUtils');

const location = process.argv[2];

if (!location) {
    console.log('Please provide a location.');
} else {
    locationUtils.getCoordinatesFromLocation(location, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return console.log(error);
        }
    
        weatherUtils.getCurrentWeather(latitude, longitude, (error, {currentDescription, currentTemperature, currentFeelsLike}) => {
            if (error) {
                return console.log(error);
            }
    
            console.log(location);
            console.log(currentDescription + '. The current temperature is ' + currentTemperature + '°C but the temperature sensation is of ' + currentFeelsLike + '°C.');
        });
    });    
}

