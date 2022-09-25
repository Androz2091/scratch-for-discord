import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "jose_jg_s4d_as_created_webhook_send_with_allowed_mentions_on_lists_user_ids_role_ids";

const blockData = {
    "message0": "as created webhook send %1 with allowed mentions on lists %2 user IDs %3 role IDs %4",
    "inputsInline": false,
    "args0": [
        {
            "type": "input_value",
            "name": "CONTENT",
            "check": ["String", "Number", "MessageEmbed"]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "USERS",
            "check": ["Array", "List"]
        },
        {
            "type": "input_value",
            "name": "ROLES",
            "check": ["Array", "List"]
        }
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Send a webhook, but only mention the users and roles with the IDs in the lists. If it is an empty list, nothing gets pinged. If there is no list, pings are on for all mentions.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const content = Blockly.JavaScript.valueToCode(block, "CONTENT", Blockly.JavaScript.ORDER_ATOMIC);

    const users = Blockly.JavaScript.valueToCode(block, "USERS", Blockly.JavaScript.ORDER_ATOMIC);
    const roles = Blockly.JavaScript.valueToCode(block, "ROLES", Blockly.JavaScript.ORDER_ATOMIC);
    let usableA = ""
    let usableB = ""
    if (!((users === null) || (users === ""))) {
        usableA = `users: ${users},`
    }
    if (!((roles === null) || (roles === ""))) {
        usableB = `roles: ${roles},`
    }

    if (block.getInput("CONTENT").connection.targetConnection) {
        const contentType = block.getInput("CONTENT").connection.targetConnection.getSourceBlock().outputConnection.check_ ?
            block.getInput("CONTENT").connection.targetConnection.getSourceBlock().outputConnection.check_[0] :
            null;
        if ((contentType === "MessageEmbed") || (!contentType && typeof contentType === "object")) {
            const code = `webhook.send({
                ${content},
                allowedMentions: {
                    ${usableA}
                    ${usableB}
                }
            });
`;
            return code;
        } else {
            const code = `webhook.send({
                content: String(${content}),
                allowedMentions: {
                    ${usableA}
                    ${usableB}
                }
            });
`;
            return code;
        }
    } else {
        const code = `webhook.send({
            content: String(${content}),
            allowedMentions: {
                ${usableA}
                ${usableB}
            }
        });
`;
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
