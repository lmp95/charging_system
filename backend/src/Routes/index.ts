import express from 'express';
const stationRoute = require('./station.route');
const mqttRoute = require('./mqtt.route');

const router = express.Router();

const defaultRoutes = [
    {
        path: '/station',
        route: stationRoute,
    },
    {
        path: '/mqtt',
        route: mqttRoute,
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;