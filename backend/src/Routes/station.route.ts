import express from 'express';

const router = express.Router();

router
    .route('/')
    .get(function (req, res, next) {
        res.send("Station List")
    });

module.exports = router;