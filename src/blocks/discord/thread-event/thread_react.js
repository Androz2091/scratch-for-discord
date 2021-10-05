import Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_thread_reaction";

const blockData = {
    "message0": "%{BKY_THREAD_REACTION}",
    "args0": [
        {
            "type": "input_value",
            "name": "REACTION",
            "check": "String"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#4C97FF",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const reaction = Blockly.JavaScript.valueToCode(block, "REACTION", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `s4dThread.react(${reaction});`;
    return code;
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_ADD_REACTION_MISSING_REACTION",
        types: [
            "REACTION"
        ]
    },
    {
        type: "toplevelparent",
        message: "RES_MUST_BE_IN_ON_THREAD_MESSAGE",
        types: [
            "s4d_on_thread_message"
        ]
    }
]);
