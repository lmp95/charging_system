import { stationService } from '../services';
import { Request, Response } from 'express';
import MqttHandler from '../middlewares/mqtt-service';

var mqttClient = new MqttHandler();
mqttClient.connect();
const sendMessage = async (req: Request, res: Response) => {
    mqttClient.sendMessage(JSON.stringify(req.body));
    res.status(200).send();
};

export const MqttController = {
    sendMessage
};