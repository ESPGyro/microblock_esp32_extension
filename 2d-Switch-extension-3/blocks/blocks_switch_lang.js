Blockly.defineBlocksWithJsonArray([
{
  "type": "S1_pin",
  "message0": Blockly.Msg.S1_pin,
  "args0": [
    {
      "type": "input_value",
      "name": "s1pin",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#E67E22",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "S2_pin",
  "message0": Blockly.Msg.S2_pin,
  "args0": [
    {
      "type": "input_value",
      "name": "s2pin",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#E67E22",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "switch_is_press",
  "message0": Blockly.Msg.switch_is_press,
  "args0": [
    {
      "type": "field_dropdown",
      "name": "n",
      "options": [
        [
          "S1",
          "S1"
        ],
        [
          "S2",
          "S2"
        ]
      ]
    }
  ],
  "output": null,
  "colour": "#E67E22",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "switch_is_release",
  "message0": Blockly.Msg.switch_is_release,
  "args0": [
    {
      "type": "field_dropdown",
      "name": "n",
      "options": [
        [
          "S1",
          "S1"
        ],
        [
          "S2",
          "S2"
        ]
      ]
    }
  ],
  "output": null,
  "colour": "#E67E22",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "switch_get_value",
  "message0": Blockly.Msg.switch_get_value,
  "args0": [
    {
      "type": "field_dropdown",
      "name": "n",
      "options": [
        [
          "S1",
          "S1"
        ],
        [
          "S2",
          "S2"
        ]
      ]
    }
  ],
  "output": null,
  "colour": "#E67E22",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "switch_on_press",
  "message0": Blockly.Msg.switch_on_press,
  "args0": [
    {
      "type": "field_dropdown",
      "name": "pin",
      "options": [
        [
          "S1",
          "S1"
        ],
        [
          "S2",
          "S2"
        ]
      ]
    },
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
  "colour": "#E67E22",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "switch_on_release",
  "message0": Blockly.Msg.switch_on_release,
  "args0": [
    {
      "type": "field_dropdown",
      "name": "pin",
      "options": [
        [
          "S1",
          "S1"
        ],
        [
          "S2",
          "S2"
        ]
      ]
    },
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
  "colour": "#E67E22",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "switch_on_pressed",
  "message0": Blockly.Msg.switch_on_pressed,
  "args0": [
    {
      "type": "field_dropdown",
      "name": "pin",
      "options": [
        [
          "S1",
          "S1"
        ],
        [
          "S2",
          "S2"
        ],
        [
          "S1+S2",
          "S12"
        ]
      ]
    },
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
  "colour": "#E67E22",
  "tooltip": "",
  "helpUrl": ""
},
]);