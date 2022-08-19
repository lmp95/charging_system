import express from 'express';
import MqttHandler from '../middlewares/mqtt-service';

const router = express.Router();
var mqttClient = new MqttHandler();
mqttClient.connect();

router
    .route('/')
    .get(function (req, res, next) {
        mqttClient.sendMessage(req.body.message);
        res.status(200).send("Message sent to mqtt");
    });

module.exports = router;