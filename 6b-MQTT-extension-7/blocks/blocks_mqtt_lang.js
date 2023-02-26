Blockly.defineBlocksWithJsonArray(
[{
  "type": "mqtt_connect",
  "message0": Blockly.Msg.mqtt_connect,
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "host",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "port",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "client_id",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "username",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "password",
      "check": "String",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#F39C12",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "mqtt_host_ip",
  "message0": "常用代理伺服器的網址: %1",
   "args0": [
   {
      "type": "field_dropdown",
      "name": "ip_add",
      "options": [
        [
          "test.mosquitto.org",
          "test.mosquitto.org"
        ],
        [
          "broker.emqx.io",
          "broker.emqx.io"
        ],
        [
          "mqttgo.io",
          "mqttgo.io"
        ]
      ]
    }
  ],
  "output": "String",
  "colour": "#0271D9",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "machine_id",
  "message0": "硬體唯一ID值",
  "output": "String",
  "colour": "#0271D9",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "mqtt_publish",
  "message0": Blockly.Msg.mqtt_publish,
  "args0": [
    {
      "type": "field_input",
      "name": "topic",
      "text": ""
    },
    {
      "type": "input_value",
      "name": "value",
      "check": [
        "Boolean",
        "Number",
        "String"
      ],
      "align": "RIGHT"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#F39C12",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "mqtt_on_receive",
  "message0": Blockly.Msg.mqtt_on_receive,
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "callback"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#F39C12",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "mqtt_connect_broker",
  "message0": "連線至MQTT Broker",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#F39C12",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "mqtt_subscribe",
  "message0": Blockly.Msg.mqtt_subscribe,
  "args0": [
    {
      "type": "field_input",
      "name": "topic",
      "text": ""
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#F39C12",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "mqtt_get_topic",
  "message0": Blockly.Msg.mqtt_get_topic,
  "output": null,
  "colour": "#F39C12",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "mqtt_get_number",
  "message0": Blockly.Msg.mqtt_get_number,
  "output": [
    "Number",
    "Boolean"
  ],
  "colour": "#F39C12",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "mqtt_get_text",
  "message0": Blockly.Msg.mqtt_get_text,
  "output": "String",
  "colour": "#F39C12",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "mqtt_try_check_msg",
  "message0": Blockly.Msg.mqtt_check_msg,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#F39C12",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "mqtt_check_msg",
  "message0": Blockly.Msg.mqtt_check_msg,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#F39C12",
  "tooltip": "",
  "helpUrl": ""
}]
);
