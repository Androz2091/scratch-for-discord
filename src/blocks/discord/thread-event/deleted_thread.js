import Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_deleted_thread";

const blockData = {
    "message0": "%{BKY_DELETED_THREAD}",
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
    const code = ["s4dThreadDeleted", Blockly.JavaScript.ORDER_NONE];
    return code;
};

registerRestrictions(blockName, [
    {
        type: "toplevelparent",
        message: "RES_MUST_BE_IN_ON_THREAD_DELETE",
        types: [
            "s4d_on_thread_delete"
        ]
    }
]);
