import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../../restrictions";


const blockName = "dash_g";
//block working now working
const blockData = {
    "message0": "server",
    "colour": '#0EB22B',
    "tooltip": "Server",
    "helpUrl": "",
    "output": "Server"
};


Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function () {
    const code = [`guild`, Blockly.JavaScript.ORDER_NONE]
    return code;
};

registerRestrictions(blockName, [
    {
        type: "blockexists",
        message: "RES_MISSING_AHQ_DASH_C_CONTENT",
        types: [
            "add_boolean_dash",
            "add_color_dash",
            "add_text_dash"
        ]
    }
]);