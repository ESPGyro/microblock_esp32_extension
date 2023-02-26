Blockly.defineBlocksWithJsonArray(
[{
  "type": "dot_matrix_setup",
  "message0": "點矩陣模組設定 || 串聯裝置數目: %1 || 接腳  DIN: %2 CS: %3 CLK: %4 || 亮度(0~15) : %5",
  "args0": [
    {
      "type": "field_number",
      "name": "max_devices",
      "value": 4,
      "min": 0,
      "max": 100
    },
    {
      "type": "field_number",
      "name": "din",
      "value": "19"   
    },
    {
      "type": "field_number",
      "name": "cs",
      "value": "5"    
    },
     {
      "type": "field_number",
      "name": "clk",
      "value": "16"   
    },
    {
      "type": "field_number",
      "name": "intensity",
      "value": "1"   
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "dot_matrix_show_text",
  "message0": "點矩陣模組顯示訊息: %1 於左側: %2 上方: %3",
  "args0": [
    {
      "type": "input_value",
      "name": "text"
    },
    {
      "type": "input_value",
      "name": "left",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "top",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "dot_matrix_show_text_center",
  "message0": "點矩陣模組置中顯示訊息: %1",
  "args0": [
    {
      "type": "input_value",
      "name": "text"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "dot_matrix_scroll_in",
  "message0":"點矩陣模組顯示滾動訊息: %1 從 %2 淡入 延遲: %3 毫秒",
  "args0": [
      {
      "type": "input_value",
      "name": "text"
      },
     {
      "type": "field_dropdown",
      "name": "direction",
      "options": [
        [
          "左側",
          "scrollInLeft"
        ],
        [
          "右側",
          "scrollInRight"
        ],
        [
          "上方",
          "scrollInTop"
        ],
        [
          "下方",
          "scrollInBottom"
        ]
      ]
    },
   {
      "type": "input_value",
      "name": "speed",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "dot_matrix_scroll_in_left",
  "message0": "DotMatrix scroll %1 in left with delay %2 second",
  "args0": [
    {
      "type": "input_value",
      "name": "text"
    },
    {
      "type": "input_value",
      "name": "speed",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "dot_matrix_scroll_in_right",
  "message0": "DotMatrix scroll %1 in right with delay %2 second",
  "args0": [
    {
      "type": "input_value",
      "name": "text"
    },
    {
      "type": "input_value",
      "name": "speed",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "dot_matrix_scroll_in_top",
  "message0": "DotMatrix scroll %1 in top with delay %2 second",
  "args0": [
    {
      "type": "input_value",
      "name": "text"
    },
    {
      "type": "input_value",
      "name": "speed",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "dot_matrix_scroll_in_bottom",
  "message0": "DotMatrix scroll %1 in bottom with delay %2 second",
  "args0": [
    {
      "type": "input_value",
      "name": "text"
    },
    {
      "type": "input_value",
      "name": "speed",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "dot_matrix_scroll_out",
  "message0":"點矩陣模組顯示滾動訊息: %1 從 %2 淡出 延遲: %3 毫秒",
  "args0": [
      {
      "type": "input_value",
      "name": "text"
      },
     {
      "type": "field_dropdown",
      "name": "direction",
      "options": [
        [
          "左側",
          "scrollOutLeft"
        ],
        [
          "右側",
          "scrollOutRight"
        ],
        [
          "上方",
          "scrollOutTop"
        ],
        [
          "下方",
          "scrollOutBottom"
        ]
      ]
    },
   {
      "type": "input_value",
      "name": "speed",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "dot_matrix_scroll_out_left",
  "message0": "DotMatrix scroll %1 out left with delay %2 second",
  "args0": [
    {
      "type": "input_value",
      "name": "text"
    },
    {
      "type": "input_value",
      "name": "speed",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "dot_matrix_scroll_out_right",
  "message0": "DotMatrix scroll %1 out right with delay %2 second",
  "args0": [
    {
      "type": "input_value",
      "name": "text"
    },
    {
      "type": "input_value",
      "name": "speed",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "dot_matrix_scroll_out_top",
  "message0": "DotMatrix scroll %1 out top with delay %2 second",
  "args0": [
    {
      "type": "input_value",
      "name": "text"
    },
    {
      "type": "input_value",
      "name": "speed",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "dot_matrix_scroll_out_bottom",
  "message0": "DotMatrix scroll %1 out bottom with delay %2 second",
  "args0": [
    {
      "type": "input_value",
      "name": "text"
    },
    {
      "type": "input_value",
      "name": "speed",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "dot_matrix_scroll_left_to_right",
  "message0": "DotMatrix scroll %1 left to right with delay %2 second and pause %3 second",
  "args0": [
    {
      "type": "input_value",
      "name": "text"
    },
    {
      "type": "input_value",
      "name": "speed",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "pause",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "dot_matrix_scroll_right_to_left",
  "message0": "DotMatrix scroll %1 right to left with delay %2 second and pause %3 second",
  "args0": [
    {
      "type": "input_value",
      "name": "text"
    },
    {
      "type": "input_value",
      "name": "speed",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "pause",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "dot_matrix_scroll_text",
  "message0": "點矩陣模組顯示跑馬燈訊息: %1 方向: %2 延遲: %3 毫秒",
  "args0": [
    {
      "type": "input_value",
      "name": "text"
    },
    {
      "type": "field_dropdown",
      "name": "direction",
      "options": [
        [
          "由左而右",
          "scrollLeftToRight"
        ],
        [
          "由右而左",
          "scrollRightToLeft"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "speed",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "dot_matrix_invert_color",
  "message0": "點矩陣模組反色顯示",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "dot_matrix_clear",
  "message0": "點矩陣模組清除顯示",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": ""
}]
);
