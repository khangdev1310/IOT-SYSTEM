import * as mqtt from "mqtt/dist/mqtt";
let client = mqtt.connect(`${process.env.REACT_APP_MQTT_BROKER_URL}`);
client.on("connect", function () {
  client.subscribe("presence", {
      qos: 1,
  });
});

client.on("message", function (topic, message) {
  // message is Buffer
  console.log(`[${topic}]: ${message.toString()}`);
});
export default client;
