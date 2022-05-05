import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "jg_file_foreachfileinput";

const blockData = {
    "message0": "file name",
    "args0": [],
    "colour": 45,
    "output": "String",
    "tooltip": "The file name found by the \"For each file in folder\" block.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(){
return [ `files4d`, Blockly.JavaScript.ORDER_NONE ];
};
registerRestrictions(blockName, [
    {
        type: "hasparent",
        message: "RES_GET_ALL_INPUT_PARENT",
        types: [
            "jg_file_foreachfile"
        ]
    }
]);
