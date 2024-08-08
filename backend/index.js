const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const app = express();
const port = 3000;

dotenv.config()
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});
app.get('/api/place-details', async (req, res) => {
    const place_id = process.env.placeId;
    const key = process.env.apiKey
    const googleApiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&fields=reviews&key=${key}&language=es`;

    try {
        const response = await axios.get(googleApiUrl);
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(port, () => {

});
