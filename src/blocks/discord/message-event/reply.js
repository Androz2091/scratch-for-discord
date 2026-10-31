import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { messageContent } from "../../utils";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_reply";

const blockData = {
    "message0": "%{BKY_REPLY}",
    "args0": [
        {
            "type": "input_value",
            "name": "CONTENT",
            "check": [ "Number", "String", "MessageEmbed" ]
        },
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function(block){
    const content = javascriptGenerator.valueToCode(block, "CONTENT", Order.ATOMIC);
    return `s4d.lastMessage = await s4dmessage.channel.send(${messageContent(block, content)});\n`;
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_MISSING_CONTENT",
        types: [
          "CONTENT"
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
