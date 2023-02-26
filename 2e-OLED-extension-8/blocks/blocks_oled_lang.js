Blockly.defineBlocksWithJsonArray([
{
  "type": "oled_init",
  "message0": Blockly.Msg.oled_init,
  "args0": [
    {
      "type": "field_dropdown",
      "name": "size",
      "options": [
        [
          "128x64",
          "0"
        ],
        [
          "128x32",
          "1"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2980B9",
  "tooltip": "Setup OLED for ready use",
  "helpUrl": ""
},

{
  "type": "oled_soft_init",
  "message0": Blockly.Msg.oled_soft_init,
  "args0": [
    {
      "type": "field_dropdown",
      "name": "size",
      "options": [
        [
          "128x64",
          "0"
        ],
        [
          "128x32",
          "1"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "scl",
      "check": "Number",
	  "align": "right"
    },
    {
      "type": "input_value",
      "name": "sda",
      "check": "Number",
	  "align": "right"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2980B9",
  "tooltip": "Setup OLED for ready use",
  "helpUrl": ""
},
//add for rotation block
{
  "type": "oled_rotate",
  "message0": Blockly.Msg.oled_rotate,
  "args0": [
    {
      "type": "input_value",
      "name": "rotate_dir",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2980B9",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "oled_draw_text",
  "message0": Blockly.Msg.oled_draw_text,
  "args0": [
    {
      "type": "input_value",
      "name": "text"
    },
    {
      "type": "input_value",
      "name": "x",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2980B9",
  "tooltip": "Draw text on OLED",
  "helpUrl": ""
},
{
  "type": "oled_big5_font11",
  "message0": "本專案引用的11x11字型檔名稱 : %1",
  "args0": [
    {
      "type": "field_input",
      "name": "title11",
      "text": ""
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2980B9",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "oled_big5_font24",
  "message0": "本專案引用的24x24字型檔名稱 : %1",
  "args0": [
    {
      "type": "field_input",
      "name": "title24",
      "text": ""
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2980B9",
  "tooltip": "",
  "helpUrl": ""
},
{
        "type": "del_font_11_24",
        "message0": "卸載本專案引用的字型檔",
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#2980B9",
        "tooltip": "",
        "helpUrl": ""
 },
{
  "type": "oled_draw_big5_text_size",
  "message0": "OLED顯示中文文字 %1 在 (x: %2 ,y: %3 )處 字型大小: %4 反白: %5 ",
  "args0": [
    {
      "type": "input_value",
      "name": "text_b"
    },
    {
      "type": "input_value",
      "name": "x_b",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "y_b",
      "check": "Number"
    },
     {
      "type": "input_value",
      "name": "size",
      "check": "Number"
    },
    {
      "type": "field_checkbox",
      "name": "invert",
      "checked": false
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2980B9",
  "tooltip": "Draw chinese text on OLED",
  "helpUrl": ""
},
{
  "type": "oled_draw_big_num",
  "message0": Blockly.Msg.oled_draw_big_num,
  "args0": [
    {
      "type": "input_value",
      "name": "text"
    },
    {
      "type": "input_value",
      "name": "x",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2980B9",
  "tooltip": "Draw Big number on OLED",
  "helpUrl": ""
},
{
  "type": "oled_draw_png",
  "message0": Blockly.Msg.oled_draw_png,
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_bitmap",
      "name": "image",
      "colour": "#ff0000"
    },
    {
      "type": "input_value",
      "name": "x",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2980B9",
  "tooltip": "Show image on screen",
  "helpUrl": ""
},
{
  "type": "oled_draw_line",
  "message0": Blockly.Msg.oled_draw_line,
  "args0": [
    {
      "type": "input_value",
      "name": "x1",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "y1",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "x2",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "y2",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2980B9",
  "tooltip": "Draw line on OLED",
  "helpUrl": ""
},
{
  "type": "oled_QR_text",
  "message0": "OLED 顯示QRCode || 訊息: %1 || 縮放率: %2 在 (x: %3 , y: %4 )",
  "args0": [
    {
      "type": "input_value",
      "name": "qr_text"
    },
    {
      "type": "input_value",
      "name": "qr_s",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "qr_x",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "qr_y",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2980B9",
  "tooltip": "Draw QRCode text on OLED",
  "helpUrl": ""
},

{
  "type": "oled_qr_text",
  "message0": "OLED 顯示QRCode || 訊息: %1 在 (x: %2 , y: %3 )",
  "args0": [
    {
      "type": "input_value",
      "name": "qr_text"
    },
    {
      "type": "input_value",
      "name": "qr_x",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "qr_y",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2980B9",
  "tooltip": "Draw QRCode text on OLED",
  "helpUrl": ""
},
{
  "type": "oled_draw_rect",
  "message0": Blockly.Msg.oled_draw_rect,
  "args0": [
    {
      "type": "input_value",
      "name": "x",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "width",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "height",
      "check": "Number"
    },
    {
      "type": "field_dropdown",
      "name": "fill",
      "options": [
        [
          "No",
          "0"
        ],
        [
          "Yes",
          "1"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2980B9",
  "tooltip": "Draw rectangle on OLED",
  "helpUrl": ""
},
{
  "type": "oled_fill",
  "message0": Blockly.Msg.oled_fill,
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2980B9",
  "tooltip": "Fill screen",
  "helpUrl": ""
},
{
  "type": "oled_clear",
  "message0": Blockly.Msg.oled_clear,
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2980B9",
  "tooltip": "clear screen",
  "helpUrl": ""
},
{
  "type": "oled_show",
  "message0": Blockly.Msg.oled_show,
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2980B9",
  "tooltip": "show screen",
  "helpUrl": ""
},
{
  "type": "oled_scroll",
  "message0": "OLED螢幕捲動設置: %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "value",
      "options": [
        [
          "開",
          "True"
        ],
        [
          "關",
          "False"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2980B9",
  "tooltip": "",
  "helpUrl": ""
}
]);
