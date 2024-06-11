import express from 'express';
import Weather from '../models/search.model.js';

const router = express.Router();


router.get('/search-history', async (req, res) => {
    try {
        const weatherData = await Weather.find().sort({ date: -1 });
        res.json(weatherData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.post('/search-history', (req, res) => {
    console.log(req.body); // Agregar este registro para ver qué datos se están recibiendo en el servidor
    const { city } = req.body;
    let date = Date.now();
    const newWeather = new Weather({ city, date });

    newWeather.save()
        .then((data) => res.json(data))
        .catch((err) => res.status(400).json({ message: err.message }));
});

export default router