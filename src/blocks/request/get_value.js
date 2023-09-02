import Blockly from "blockly/core";
import { registerRestrictions } from "../../restrictions";

const blockName = "s4d_request_value";

const blockData = {
    "message0": "%{BKY_REQUEST_VALUE}",
    "args0": [
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
    const code = [`s4dJsonParsed[${value}]`, Blockly.JavaScript.ORDER_NONE ];
    return code;
    
};

registerRestrictions(blockName, [
    {
        type: "hasparent",
        message: "RES_MUST_BE_IN_JSON_REQUEST",
        types: [
            "s4d_request_then"
        ]
    }]);