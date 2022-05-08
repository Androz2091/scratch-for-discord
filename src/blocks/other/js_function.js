import Blockly from "blockly/core";

const blockName = "s4d_js_function";

const blockData = {
    "message0": "%1 %2",
    "args0": [
    {
        "type": "field_dropdown",
        "name": "DATA_TYPE",
        "options": [
            ["String", "String"],
            ["Number", "Number"],
            ["parseInt", "parseInt"],
            ["parseFloat", "parseFloat"],
            ["isNaN", "isNaN"],
            ["isFinite", "isFinite"],
            ["decodeURI", "decodeURI"],
            ["decodeURIComponent", "decodeURIComponent"],
            ["encodeURI", "encodeURI"],
            ["encodeURIComponent", "encodeURIComponent"],
        ]
    },
    {
        "type": "input_value",
        "name": "STRING"
    }
    ],
    "output": "",
    "colour": "#D14081",
    "tooltip": "",
    "helpUrl": "https://www.w3schools.com/jsref/jsref_obj_global.asp"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const dataType = block.getFieldValue("DATA_TYPE");
    const code = Blockly.JavaScript.valueToCode(block, "STRING", Blockly.JavaScript.ORDER_ATOMIC);
  if (dataType == "String") {
    return [`String(${code})`, Blockly.JavaScript.ORDER_NONE ];
  } else if (dataType == "Number") {
    return [`Number(${code})`, Blockly.JavaScript.ORDER_NONE ];
  } else if (dataType == "parseInt") {
    return [`parseInt(${code})`, Blockly.JavaScript.ORDER_NONE ];
  } else if (dataType == "parseFloat") {
    return [`parseFloat(${code})`, Blockly.JavaScript.ORDER_NONE ];
  } else if (dataType == "isNaN") {
    return [`isNaN(${code})`, Blockly.JavaScript.ORDER_NONE ];
  } else if (dataType == "isFinite") {
    return [`isFinite(${code})`, Blockly.JavaScript.ORDER_NONE ];
  } else if (dataType == "decodeURI") {
    return [`decodeURI(${code})`, Blockly.JavaScript.ORDER_NONE ];
  } else if (dataType == "decodeURIComponent") {
    return [`decodeURIComponent(${code})`, Blockly.JavaScript.ORDER_NONE ];
  } else if (dataType == "encodeURI") {
    return [`encodeURI(${code})`, Blockly.JavaScript.ORDER_NONE ];
  } else if (dataType == "encodeURIComponent") {
    return [`encodeURIComponent(${code})`, Blockly.JavaScript.ORDER_NONE ];
  }
};
