import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_add_reaction";

const blockData = {
    "message0": "%{BKY_ADD_REACTION}",
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

javascriptGenerator.forBlock[blockName] = function(block) {
    const reaction = javascriptGenerator.valueToCode(block, "REACTION", Order.ATOMIC);
    const code = `await s4dmessage.react(${reaction});\n`;
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
        message: "RES_MUST_BE_IN_ON_MESSAGE",
        types: [
            "s4d_on_message",
            "s4d_on_message_edit"
        ]
    }
]);
