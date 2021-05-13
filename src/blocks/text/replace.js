import Blockly from "blockly/core";
import { registerRestrictions } from "../../restrictions";

const blockName = "s4d_replace";

const blockData = {
    "message0": "%{BKY_REPLACE}",
    "args0": [
        {
            "type": "input_value",
            "name": "TEXT",
            "check": "String"
        },
        {
            "type": "input_value",
            "name": "REPLACE",
            "check":  "String" 
        },
        {
            "type": "input_value",
            "name": "WITH",
            "check":  "String"             
        }
    ],
    "output": "String",
    "colour": "#5ba58b",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const text = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
    const replace = Blockly.JavaScript.valueToCode(block, "REPLACE", Blockly.JavaScript.ORDER_ATOMIC);
    const replaceWith = Blockly.JavaScript.valueToCode(block, "WITH", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`String(${text}).replace(new RegExp(String(${replace}), 'g'), String(${replaceWith}))`, Blockly.JavaScript.ORDER_NONE];
    return code;
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_REPLACE_STRING",
        types: [
            "TEXT"
        ]
    },
    {
        type: "notempty",
        message: "RES_REPLACE_REPLACE",
        types: [
            "REPLACE"
        ]
    },
    {
        type: "notempty",
        message: "RES_REPLACE_WITH",
        types: [
            "WITH"
        ]
    }
]);