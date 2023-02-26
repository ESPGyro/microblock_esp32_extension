Blockly.defineBlocksWithJsonArray(
[{
  "type": "http_get",
  "message0": Blockly.Msg.http_get,
  "args0": [
    
    {
      "type": "input_value",
      "name": "get_url",
      "check": "String"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2ECC71",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "openweather_connect",
  "message0": Blockly.Msg.openweather_connect,
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "url",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "city",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "api_key",
      "check": "String",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2ECC71",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "ubidots_post",
  "message0": Blockly.Msg.ubidots_post,
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "url",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "label",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "token",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "var1",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "value1",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "var2",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "value2",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "var3",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "value3",
      "check": "Number",
      "align": "RIGHT"
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2ECC71",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "thingspeak_write",
  "message0": Blockly.Msg.thingspeak_write,
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "key",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "field1",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "field2",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "field3",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "field4",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "field5",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "field6",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "field7",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "field8",
      "check": "Number",
      "align": "RIGHT"
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2ECC71",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "http_get_status_code",
  "message0": Blockly.Msg.http_get_status_code,
  "inputsInline": false,
  "output": "Number",
  "colour": "#2ECC71",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "http_get_data_text",
  "message0": Blockly.Msg.http_get_data_text,
  "inputsInline": false,
  "output": "String",
  "colour": "#2ECC71",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "http_get_data_number",
  "message0": Blockly.Msg.http_get_data_number,
  "inputsInline": false,
  "output": "Number",
  "colour": "#2ECC71",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "http_is_ok",
  "message0": Blockly.Msg.http_is_ok,
  "inputsInline": false,
  "output": [
    "Number",
    "Boolean"
  ],
  "colour": "#2ECC71",
  "tooltip": "",
  "helpUrl": ""
}]
);
