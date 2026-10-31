import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_get_message_from_link";

const blockData = {
    "message0": "%{BKY_GET_MESSAGE_FROM_LINK}",
    "args0": [
        {
            "type": "input_value",
            "name": "LINK",
            "check": "String"
        }
    ],
    "colour": "#41AAC0",
    "output": "Message",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function(block){
    const link = javascriptGenerator.valueToCode(block, "LINK", Order.NONE);
    // Links end with /channelId/messageId
    return [ `(await (async (link) => {
    const [channelId, messageId] = String(link).split("/").slice(-2);
    const channel = await s4d.client.channels.fetch(channelId);
    return channel?.isTextBased() ? channel.messages.fetch(messageId) : null;
})(${link}))`, Order.NONE ];
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_MESSAGE_LINK",
        types: [
            "LINK"
        ]
    }
]);
