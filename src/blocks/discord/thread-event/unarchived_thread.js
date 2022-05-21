import Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_unarchived_thread";

const blockData = {
    "message0": "%{BKY_UNARCHIVED_THREAD}",
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
    const code = ["s4dNewThread", Blockly.JavaScript.ORDER_NONE];
    return code;
};

registerRestrictions(blockName, [
    {
        type: "toplevelparent",
        message: "RES_MUST_BE_IN_ON_UNARCHIVE_THREAD",
        types: [
            "s4d_on_thread_unarchive",
            "s4d_on_thread_archive"
        ]
    }
]);
