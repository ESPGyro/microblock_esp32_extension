Blockly.defineBlocksWithJsonArray(
[{
  "type": "neopixel_setup",
  "message0": Blockly.Msg.neopixel_setup,
  "args0": [
    {
      "type": "input_value",
      "name": "pin",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "length",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#27AE60",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "neopixel_set_color1",
  "message0": Blockly.Msg.neopixel_set_color1,
  "args0": [
    {
      "type": "input_value",
      "name": "n",
      "check": "Number"
    },
    {
      "type": "field_colour",
      "name": "color",
      "colour": "#ff0000"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#27AE60",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "neopixel_set_color2",
  "message0": Blockly.Msg.neopixel_set_color2,
  "args0": [
    {
      "type": "input_value",
      "name": "n",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "red",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "green",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "blue",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#27AE60",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "neopixel_fill_color1",
  "message0": Blockly.Msg.neopixel_fill_color1,
  "args0": [
    {
      "type": "field_colour",
      "name": "color",
      "colour": "#ff0000"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#27AE60",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "neopixel_fill_color2",
  "message0": Blockly.Msg.neopixel_fill_color2,
  "args0": [
    {
      "type": "input_value",
      "name": "red",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "green",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "blue",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#27AE60",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "neopixel_show",
  "message0": Blockly.Msg.neopixel_show,
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#27AE60",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "neopixel_clear",
  "message0": Blockly.Msg.neopixel_clear,
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#27AE60",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "neopixel_action",
  "message0":"NeoPixel?????? ????????????: %1 ??????: %2 ??????: %3 ms " ,
  "args0": [
   {
      "type": "field_colour",
      "name": "color",
      "colour": "#ff0000"
    },
    {
      "type": "field_dropdown",
      "name": "action_type",
      "options": [
        [
          "??????????????????",
          "bounce"
        ],
        [
          "??????????????????",
          "cycle"
        ],
        [
          "??????????????????",
          "rainbow_cycle"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "wait",
      "check": "Number"
    } 
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#27AE60",
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "neopixel_rainbow",
  "message0": Blockly.Msg.neopixel_rainbow,
  "args0": [
    {
      "type": "input_value",
      "name": "wait",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#27AE60",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "neopixel_set_brightness",
  "message0": Blockly.Msg.neopixel_set_brightness,
  "args0": [
    {
      "type": "input_value",
      "name": "brightness",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#27AE60",
  "tooltip": "",
  "helpUrl": ""
}]
);
