import express from 'express';
import routes from './Routes';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const port = 3600;

const mongoDB = 'mongodb://127.0.0.1/charging_system';
mongoose.connect(mongoDB).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.log('Failed to connect MongoDB');
});

app.use(express.json());

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use('/v1', routes);

app.listen(port, () => {
    console.log(`Application is running on port ${port}.`);
});