import mqtt from 'mqtt';
import { messageService } from '../services';

class MqttHandler {
  mqttClient: any;
  host: string;
  username: string;
  password: string;
  constructor() {
    this.mqttClient = null;
    this.host = 'mqtt://test.mosquitto.org';
  }
  
  connect() {
    // Connect mqtt with credentials (in case of needed, otherwise we can omit 2nd param)
    this.mqttClient = mqtt.connect(this.host);

    // Mqtt error calback
    this.mqttClient.on('error', (err: any) => {
      console.log("error", err);
      this.mqttClient.end();
    });

    // Connection callback
    this.mqttClient.on('connect', () => {
      console.log(`mqtt client connected`);
    });

    // mqtt subscriptions
    this.mqttClient.subscribe('station-status');

    // When a message arrives, console.log it
    this.mqttClient.on('message', function (topic: string, message: string) {
      messageService.updateStationStatus(JSON.parse(message));
    });

    this.mqttClient.on('close', () => {
      console.log(`mqtt client disconnected`);
    });
  }

  // Sends a mqtt message to topic: mytopic
  sendMessage(message: string) {
    this.mqttClient.publish('station-status', message);
  }
}

export default MqttHandler;