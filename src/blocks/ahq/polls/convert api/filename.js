import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../../restrictions";
const blockName = "convert_api_file";
//block working now working
const blockData = {
    "message0": "Filename of converted task",
    "args0": [],
    "colour": '#40BF4A',
    "output": "String",
    "tooltip": "The filename of the file that was converted.",
    "helpUrl": ""
};


Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function () {
    const code = [`file.filename`, Blockly.JavaScript.ORDER_NONE];
    return code;
};

registerRestrictions(blockName, [
    {
        type: "notblockexists",
        messae: "RES_MISSING_AHQ_BLOCK",
        types: [
            "save_api_code"
        ]
    },
    {
        type: "hasparent",
        message: "RES_MISSING_AHQ_SUPER_CONTENT",
        types: [
            "convert_api_task"
        ]
    }
]);