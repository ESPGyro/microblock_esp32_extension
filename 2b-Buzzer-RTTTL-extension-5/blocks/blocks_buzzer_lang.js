Blockly.defineBlocksWithJsonArray(
[{
  "type": "tone1",
  "message0": Blockly.Msg.tone1,
  "args0": [
    {
      "type": "input_value",
      "name": "pin",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "freq",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "time",
      "check": "Number"
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
  "type": "tone2",
  "message0": Blockly.Msg.tone2,
  "args0": [
    {
      "type": "input_value",
      "name": "pin",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "freq",
      "check": "Number"
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
  "type": "tone3",
  "message0": "蜂鳴器 腳位 %1 頻率 %2 持續 %3 秒",
  "args0": [
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
          "Silence",
          "0"
        ],
        [
          "C4-262",
          "262"
        ],
        [
          "D4-293",
          "293"
        ],
        [
          "C4-262",
          "262"
        ],
        [
          "E4-329",
          "329"
        ],
        [
          "F4-349",
          "349"
        ],
        [
          "G4-391",
          "391"
        ],
        [
          "A4-440",
          "440"
        ],
        [
          "B4-493",
          "493"
        ],
        [
          "C5-523",
          "523"
        ],
        [
          "D5-587",
          "587"
        ],
        [
          "E5-659",
          "659"
        ],
        [
          "F5-698",
          "698"
        ],
        [
          "G5-784",
          "784"
        ],
        [
          "A5-880",
          "880"
        ],
        [
          "B5-988",
          "988"
        ],
        [
          "C6-1046",
          "1046"
        ],
        [
          "D6-1175",
          "1175"
        ],
        [
          "E6-1318",
          "1318"
        ],
        [
          "F6-1396",
          "1396"
        ],
        [
          "G6-1568",
          "1568"
        ],
        [
          "A6-1760",
          "1760"
        ],
        [
          "B6-1976",
          "1976"
        ],
        [
          "C7-2093",
          "2093"
        ],
      ]
	},
    {
      "type": "input_value",
      "name": "time",
      "check": "Number"
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
  "type": "no_tone",
  "message0": Blockly.Msg.no_tone,
  "args0": [
    {
      "type": "input_value",
      "name": "pin",
      "check": "Number"
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
  "type": "play_rtttl",
  "message0": Blockly.Msg.play_rtttl,
  "args0": [ 
   {
      "type": "input_value",
      "name": "pin",
      "check": "Number"
   },
   {
      "type": "input_value",
      "name": "song",
      "check": "String"
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
  "type": "play_song",
  "message0": Blockly.Msg.play_song,
  "args0": [ 
   {
     "type": "input_value",
      "name": "pin",
      "check": "Number"
   },
   {
      "type": "field_dropdown",
      "name": "songname",
      "options": [
        [
          "Super Mario - Main Theme",
          "Super Mario - Main Theme"
        ],
        [
          "Super Mario - Title Music",
          "Super Mario - Title Music"
        ],
        [
          "StarWars",
          "StarWars"
        ],
        [
          "MissionImp",
          "MissionImp"
        ],
        [
          "TopGun",
          "TopGun"
        ],
        [
          "A-Team",
          "A-Team"
        ],
        [
          "Bond",
          "Bond"
        ],
        [
          "20thCenFox",
          "20thCenFox"
        ]
      ]
   }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#F39C12",
  "tooltip": "",
  "helpUrl": ""
}
]
);
