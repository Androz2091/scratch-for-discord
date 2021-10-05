import Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_started_message_thread";

const blockData = {
    "message0": "%{BKY_CREATED_THREAD}",
    "colour": "#AA97D8",
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
    const code = ["s4dCreatedThread", Blockly.JavaScript.ORDER_NONE];
    return code;
};

registerRestrictions(blockName, [
    {
        type: "hasparent",
        message: "RES_MUST_BE_IN_ON_THREAD_START",
        types: [
            "s4d_message_start_thread"
        ]
    }
]);
