import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_move_member";

const blockData = {
    "message0": "%{BKY_MOVE_MEMBER}",
    "args0": [
        {
            "type": "input_value",
            "name": "MEMBER",
            "check": "Member"
        },
        {
            "type": "input_value",
            "name": "CHANNEL",
            "check": "Channel"
        }
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "%{BKY_MOVE_MEMBER_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function(block){
    const member = javascriptGenerator.valueToCode(block, "MEMBER", Order.ATOMIC);
    const channel = javascriptGenerator.valueToCode(block, "CHANNEL", Order.ATOMIC);
    return `await ${member}.voice.setChannel(${channel}.id);\n`;
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_VALID_MEMBER",
        types: [
            "MEMBER"
        ]
    },
    {
        type: "notempty",
        message: "RES_PURGE_CHANNEL",
        types: [
            "CHANNEL"
        ]
    }
]);
