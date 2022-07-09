import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "jose_jg_as_created_webhook_send";

const blockData = {
    "message0": "as created webhook send %1",
    "args0": [
        {
            "type": "input_value",
            "name": "CONTENT",
            "check": ["String", "Number", "MessageEmbed"]
        },
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Send a message as the created webhook.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const content = Blockly.JavaScript.valueToCode(block, "CONTENT", Blockly.JavaScript.ORDER_ATOMIC);
    if (block.getInput("CONTENT").connection.targetConnection) {
        const contentType = block.getInput("CONTENT").connection.targetConnection.getSourceBlock().outputConnection.check_ ?
            block.getInput("CONTENT").connection.targetConnection.getSourceBlock().outputConnection.check_[0] :
            null;
        if ((contentType === "MessageEmbed") || (!contentType && typeof contentType === "object")) {
            const code = `webhook.send(${content});\n`;
            return code;
        } else {
            const code = `webhook.send(String(${content}));\n`;
            return code;
        }
    } else {
        const code = `webhook.send(String(${content}));\n`;
        return code;
    }
};
registerRestrictions(blockName, [
    {
        type: "hasparent",
        message: "RES_CREATE_WEBHOOK_PARENT",
        types: [
            "s4d_create_webhook_then",
            "jose_jg_create_webhook_in_channel_with_name_and_profile_picture_url_with_reason_then_do"
        ]
    }
]);
