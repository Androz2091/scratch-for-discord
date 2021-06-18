import Blocklylua from "blockly/lua";
import Blockly from "blockly/core"
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
    const text = Blocklylua.valueToCode(block, "TEXT", Blocklylua.ORDER_ATOMIC);
    const replace = Blocklylua.valueToCode(block, "REPLACE", Blocklylua.ORDER_ATOMIC);
    const replaceWith = Blocklylua.valueToCode(block, "WITH", Blocklylua.ORDER_ATOMIC);
    const code = [`${text}:gsub(${replace},${replaceWith})`, Blocklylua.ORDER_NONE];
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