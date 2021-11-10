import Blockly from "blockly/core";
import { registerRestrictions } from "../../restrictions";

const blockName = "s4d_requested_object";

const blockData = {
    "message0": "%{BKY_REQUESTED_OBJECT}",
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

Blockly.JavaScript[blockName] = function() {
    const code = [`s4dJsonParsed`, Blockly.JavaScript.ORDER_NONE ];
    return code;
    
};

registerRestrictions(blockName, [
    {
        type: "hasparent",
        message: "RES_MISSING_LINK",
        types: [
            "s4d_request_then"
        ]
    }]);