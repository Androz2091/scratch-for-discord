import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "jose_jg_webhooks_as_created_webhook_send_with_name_profile_picture_url";

const blockData = {
    "message0": "as created webhook send %1 with name %2 profile picture URL %3",
    "args0": [
        {
            "type": "input_value",
            "name": "CONTENT",
            "check": ["String", "Number", "MessageEmbed"]
        },
        {
            "type": "input_value",
            "name": "NAME",
            "check": "String"
        },
        {
            "type": "input_value",
            "name": "URL",
            "check": "String"
        },
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Send a message as the created webhook, but with a different name and or profile picture.",
    "helpUrl": ""
};
Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function (block) {
    const content = Blockly.JavaScript.valueToCode(block, "CONTENT", Blockly.JavaScript.ORDER_ATOMIC);
    const username = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
    const avatar = Blockly.JavaScript.valueToCode(block, "URL", Blockly.JavaScript.ORDER_ATOMIC);
    if (block.getInput("CONTENT").connection.targetConnection) {
        const contentType = block.getInput("CONTENT").connection.targetConnection.getSourceBlock().outputConnection.check_ ?
            block.getInput("CONTENT").connection.targetConnection.getSourceBlock().outputConnection.check_[0] :
            null;
        if ((contentType === "MessageEmbed") || (!contentType && typeof contentType === "object")) {
            const code = `webhook.send({
    username: String(${username}),
    avatarURL: String(${avatar}),
    ${content}
});
`;
            return code;
        } else {
            const code = `webhook.send({
    username: String(${username}),
    avatarURL: String(${avatar}),
    content: String(${content})
});
`;
            return code;
        }
    } else {
        const code = `webhook.send({
    username: String(${username}),
    avatarURL: String(${avatar}),
    content: String(${content})
});
`;
        return code;
    }
};
registerRestrictions(blockName, [
    {
        type: "notempty",
        message: '$You need to specify what to send!',
        types: [
            "CONTENT"
        ]
    },
    {
        type: "hasparent",
        message: '$You need to place this inside of a "create webhook then" block!',
        types: [
            "s4d_create_webhook_then",
            "jose_jg_create_webhook_in_channel_with_name_and_profile_picture_url_with_reason_then_do"
        ]
    }
]);