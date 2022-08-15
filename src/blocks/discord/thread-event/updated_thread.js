import Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_updated_thread";

const blockData = {
    "message0": "%1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "THREAD",
        "options": [
          ["new thread", "s4dNewThread"],
          ["old thread", "s4dOldThread"]
        ]
      }
    ],
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

Blockly.JavaScript[blockName] = function(block) {
    const thread = block.getFieldValue("THREAD")
    const code = [`${thread}`, Blockly.JavaScript.ORDER_NONE];
    return code;
};

registerRestrictions(blockName, [
    {
        type: "toplevelparent",
        message: "This block can only be used on \"When a thread is updated event!\"",
        types: [
            "s4d_on_thread_update"
        ]
    }
]);
