import Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_created_thread_on";

const blockData = {
    "message0": "%{BKY_CREATED_THREAD_ON}",
    "colour": "#2a97b8",
    "output": "Thread",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = ["s4dThread", Blockly.JavaScript.ORDER_NONE];
    return code;
};

registerRestrictions(blockName, [
    {
        type: "toplevelparent",
        message: "RES_MUST_BE_IN_ON_THREAD_START",
        types: [
            "s4d_on_thread_create"
        ]
    }
]);
