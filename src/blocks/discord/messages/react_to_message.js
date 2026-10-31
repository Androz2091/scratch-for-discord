import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_message_react";

const blockData = {
    "message0": "%{BKY_MESSAGE_REACT}",
    "args0": [
        {
            "type": "input_value",
            "name": "REACTION",
            "check": "String"
        },
        {
            "type": "input_value",
            "name": "MESSAGE",
            "check": "Message"
        }
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "%{BKY_MESSAGE_REACT_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function(block){
    const reaction = javascriptGenerator.valueToCode(block, "REACTION", Order.ATOMIC);
    const message = javascriptGenerator.valueToCode(block, "MESSAGE", Order.ATOMIC);
    return `await ${message}.react(${reaction});\n`;
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
        type: "notempty",
        message: "RES_VALID_MESSAGE",
        types: [
            "MESSAGE"
        ]
    }
]);
