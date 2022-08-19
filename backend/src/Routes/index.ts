import express from 'express';
const stationRoute = require('./station.route');

const router = express.Router();

const defaultRoutes = [
    {
        path: '/station',
        route: stationRoute,
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;