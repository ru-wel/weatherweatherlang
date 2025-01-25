import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import weatherRoute from './routes/weather.js'

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({
    origin: 'https://localhost:3000',
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
    exposedHeaders: ['Content-Disposition']
}));

app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(500).send("It's not you, it's us!");
})

app.use('/api/weather', weatherRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
})