import express from 'express';
import { mqttController } from '../controllers';

const router = express.Router();

router
    .route('/')
    .post(mqttController.sendMessage);

module.exports = router;