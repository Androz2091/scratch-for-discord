import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../../restrictions";
import { messageContent } from "../../utils";

const blockName = "s4d_message_edit";

const blockData = {
    "message0": "%{BKY_MESSAGE_EDIT}",
    "args0": [
        {
            "type": "input_value",
            "name": "MESSAGE",
            "check": "Message"
        },
        {
            "type": "input_value",
            "name": "CONTENT",
            "check": [ "String", "Number", "MessageEmbed" ]
        }
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "%{BKY_MESSAGE_EDIT_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function(block){
    const message = javascriptGenerator.valueToCode(block, "MESSAGE", Order.ATOMIC);
    const content = javascriptGenerator.valueToCode(block, "CONTENT", Order.ATOMIC);
    return `await ${message}.edit(${messageContent(block, content)});\n`;
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_VALID_MESSAGE",
        types: [
            "MESSAGE"
        ]
    },
    {
        type: "notempty",
        message: "RES_SEND_CHANNEL_CONTENT",
        types: [
            "CONTENT"
        ]
    }
]);
