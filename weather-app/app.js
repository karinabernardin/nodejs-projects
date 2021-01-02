const locationUtils = require('./utils/locationUtils'); 
const weatherUtils = require('./utils/weatherUtils');


const location = 'Londrina';

locationUtils.getCoordinatesFromLocation(location, (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
    if (!error) {
        console.log('Location: ' + data.location)
        weatherUtils.getCurrentWeather(data.latitude, data.longitude, (error, data) => {
            console.log('Error', error);
            console.log('Data', data);
            if (!error) {
                console.log('Success! ' + data.currentDescription + '. The current temperature is ' + data.currentTemperature + '°C but the temperature sensation is of ' + data.currentFeelsLike + '°C.');
            }
        });
}
});
