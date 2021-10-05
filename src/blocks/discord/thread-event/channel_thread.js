import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_thread_channel";

const blockData = {
    "message0": "%{BKY_CHANNEL_OF_THREAD}",
    "args0": [
        {
            "type": "input_value",
            "name": "CHANNEL",
            "check": "Thread"
        }
    ],
    "colour": "#50a6c9",
    "output": "Channel",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
    const channel = Blockly.JavaScript.valueToCode(block, "CHANNEL", Blockly.JavaScript.ORDER_ATOMIC);
    return [ `${channel}.parent`, Blockly.JavaScript.ORDER_NONE ];
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_VALID_CHANNEL",
        types: [
            "CHANNEL"
        ]
    }
]);