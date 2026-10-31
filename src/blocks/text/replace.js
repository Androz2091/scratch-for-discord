import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
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

javascriptGenerator.forBlock[blockName] = function(block) {
    const text = javascriptGenerator.valueToCode(block, "TEXT", Order.ATOMIC);
    const replace = javascriptGenerator.valueToCode(block, "REPLACE", Order.ATOMIC);
    const replaceWith = javascriptGenerator.valueToCode(block, "WITH", Order.ATOMIC);
    const code = [`String(${text}).replaceAll(String(${replace}), String(${replaceWith}))`, Order.NONE];
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