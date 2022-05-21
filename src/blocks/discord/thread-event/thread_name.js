import * as Blockly from "blockly";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_thread_name";

const blockData = {
    "message0": "%{BKY_THREAD_NAME}",
    "args0": [
        {
            "type": "input_value",
            "name": "THREAD",
            "check": "Thread",
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
    const thread = Blockly.JavaScript.valueToCode(block, "THREAD", Blockly.JavaScript.ORDER_ATOMIC);
    return(`${thread}.name`)
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_MISSING_THREAD",
        types: [
          "THREAD"
        ]
    }
]);
