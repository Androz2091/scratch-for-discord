import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { messageContent } from "../../utils";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_send_member";

const blockData = {
    "message0": "%{BKY_SEND_MEMBER}",
    "args0": [
        {
            "type": "input_value",
            "name": "CONTENT",
            "check": [ "MessageEmbed", "String", "Number" ]
        },
        {
            "type": "input_value",
            "name": "MEMBER",
            "check": "Member"
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
    const member = javascriptGenerator.valueToCode(block, "MEMBER", Order.ATOMIC);
    const content = javascriptGenerator.valueToCode(block, "CONTENT", Order.ATOMIC);
    return `await ${member}.send(${messageContent(block, content)});\n`;
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_SEND_CHANNEL_CONTENT",
        types: [
            "CONTENT"
        ]
    },
    {
        type: "notempty",
        message: "RES_SEND_MEMBER_MISSING_MEMBER",
        types: [
            "MEMBER"
        ]
    }
]);
