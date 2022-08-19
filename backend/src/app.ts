import express from 'express';
import routes from './Routes';

const app = express();
const port = 3600;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/v1', routes);

app.listen(port, () => {
    console.log(`Application is running on port ${port}.`);
});