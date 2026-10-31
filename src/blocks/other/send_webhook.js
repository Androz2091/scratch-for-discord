import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../restrictions";
import { messageContent } from "../utils";

const blockName = "s4d_send_webhook";

const blockData = {
    "message0": "%{BKY_SEND_WEBHOOK}",
    "args0": [
        {
            "type": "input_value",
            "name": "CONTENT",
            "check": [ "String", "Number", "MessageEmbed" ]
        },
        {
            "type": "input_value",
            "name": "URL",
            "check": "String"
        }
    ],
    "colour": "#D14081",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "%{BKY_SEND_WEBHOOK_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function(block){
    const content = javascriptGenerator.valueToCode(block, "CONTENT", Order.ATOMIC);
    const url = javascriptGenerator.valueToCode(block, "URL", Order.ATOMIC);
    return `await new Discord.WebhookClient({ url: String(${url}) }).send(${messageContent(block, content)});\n`;
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
        message: "RES_VALID_URL",
        types: [
            "URL"
        ]
    }
]);
