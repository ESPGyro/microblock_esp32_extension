Blockly.defineBlocksWithJsonArray(
[{
  "type": "linenotify",
  "message0": Blockly.Msg.linenotify,
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "token",
      "check": "String",
	  "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "m1",
      "check": "String",
	  "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "m2",
      "check": "String",
	  "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "m3",
      "check": "String",
	  "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "m4",
      "check": "String",
	  "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "m5",
      "check": "String",
	  "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "m6",
      "check": "String",
	  "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#28B463",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "iftttlinenotify",
  "message0": Blockly.Msg.iftttlinenotify,
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "event",
      "check": "String",
	  "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "apikey",
      "check": "String",
	  "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "m1",
      "check": "String",
	  "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "m2",
      "check": "String",
	  "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "m3",
      "check": "String",
	  "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#28B463",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "linenotify_package",
  "message0": "LINE Notify 傳送 %1 權杖密碼: %2 文字訊息: %3 圖片訊息: %4 貼圖的package ID : %5 貼圖的sticker ID: %6",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "auth",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "msg",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "urlpicId",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "stickerPackageId",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "stickerId",
      "check": "String",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#28B463",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "get_newline",
  "message0": "換行",
  "inputsInline": true,
  "output": "String",
  "colour": "#2ECC71",
  "tooltip": "",
  "helpUrl": ""
},
]
);



