import express from 'express';
import axios from 'axios';

const app = express();
app.use(express.json());

const router = express.Router();

router.get('/:location', async (req, res) => {
    const { location } = req.params;
    const apiKey = process.env.API_KEY

    try {
        const response = await axios.get(
            `https://api.weatherstack.com/current?access_key=${apiKey}&query=${location}`
        )
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Unable to fetch weather data'});
    }
})

export default router;
