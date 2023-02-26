Blockly.defineBlocksWithJsonArray([
{
  "type": "dhtxx_read",
  "message0":Blockly.Msg.dhtxx_read,
  "args0": [
    {
      "type": "field_dropdown",
      "name": "type",
      "options": [
        [
          "DHT11",
          "0"
        ],
        [
          "DHT22",
          "2"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "pin",
      "check": "Number"
    },
    {
      "type": "field_dropdown",
      "name": "valueIndex",
      "options": [
        [
          Blockly.Msg.ttemp,
          "0"
        ],
        [
          Blockly.Msg.hhumd,
          "1"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": "#8E44AD",
  "tooltip": "",
  "helpUrl": ""
}
]);
