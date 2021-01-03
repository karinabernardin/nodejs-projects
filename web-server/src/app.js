const express = require('express');

const app = express();

app.get('', (req, res) => {
    res.send('<h1>Hello Express!</h1>');
})

app.get('/help', (req, res) => {
    res.send('<h1>Help page</h1>');
})

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>');
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'My location',
        forecast: 'The current temperature is 30°C'
    });
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
})
