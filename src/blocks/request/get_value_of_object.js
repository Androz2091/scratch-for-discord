import Blockly from "blockly/core";
import { registerRestrictions } from "../../restrictions";

const blockName = "s4d_get_object_value";

const blockData = {
    "message0": "%{BKY_OBJECT_GET_VALUE}",
    "args0": [
        {
            "type": "input_value",
            "name": "OBJECT",
            "check": "Object" 
        },
        {
            "type": "input_value",
            "name": "VALUE",
            "check": "String" 
        },
    ],
    "output": null,
    "colour": "#4C97FF",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const value = Blockly.JavaScript.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_ATOMIC);
    const object = Blockly.JavaScript.valueToCode(block, "OBJECT", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`${object}[${value}]`, Blockly.JavaScript.ORDER_NONE ];
    return code;
    
};

registerRestrictions(blockName, [
    {
        type: "hasparent",
        message: "RES_INVALID_OBJECT",
        types: [
            "s4d_request_then"
        ]
    }]);