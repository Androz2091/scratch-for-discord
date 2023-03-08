import Blockly from "blockly/core";
import blocklyModule from "../blocklyModule"
import JBlock from "../jblock1"
import { registerRestrictions } from "../../restrictions";
import '@blockly/field-grid-dropdown';
const restrictToParent = function (parents, name, msg) {
    registerRestrictions(name, [
        {
            type: "hasparent",
            message: ("$" + msg),
            types: parents
        }
    ]);
}
Blockly.Blocks["jg_messages_id_of_message"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "ID of message %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MSG",
                        "check": "Message"
                    }
                ],
                "colour": "#4C97FF",
                "output": "String",
                "tooltip": "Get the message ID from the message.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_messages_id_of_message"] = function (block) {
    const message = Blockly.JavaScript.valueToCode(block, "MSG", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`${message}.id`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
/*
// next block
Blockly.Blocks["jg_messages_message_mentions_everyone"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "message %1 mentions everyone?",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MSG",
                        "check": "Message"
                    }
                ],
                "colour": "#4C97FF",
                "output": "Boolean",
                "tooltip": "Check if a message contains the @everyone ping.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_messages_message_mentions_everyone"] = function (block) {
    const message = Blockly.JavaScript.valueToCode(block, "MSG", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`${message}.mentions.everyone`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
// next block
Blockly.Blocks["jg_messages_message_is_a_system_message"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "message %1 is a system message?",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MSG",
                        "check": "Message"
                    }
                ],
                "colour": "#4C97FF",
                "output": "Boolean",
                "tooltip": "Check if a message is a system message.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_messages_message_is_a_system_message"] = function (block) {
    const message = Blockly.JavaScript.valueToCode(block, "MSG", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`${message}.system`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
// next block
Blockly.Blocks["jg_messages_message_is_pinned"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "message %1 is pinned?",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MSG",
                        "check": "Message"
                    }
                ],
                "colour": "#4C97FF",
                "output": "Boolean",
                "tooltip": "Check if a message is pinned at all.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_messages_message_is_pinned"] = function (block) {
    const message = Blockly.JavaScript.valueToCode(block, "MSG", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`${message}.pinned`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
// next block
Blockly.Blocks["jg_messages_message_is_text_to_speech"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "message %1 is text to speech?",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MSG",
                        "check": "Message"
                    }
                ],
                "colour": "#4C97FF",
                "output": "Boolean",
                "tooltip": "Check if a message is a text to speech message.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_messages_message_is_text_to_speech"] = function (block) {
    const message = Blockly.JavaScript.valueToCode(block, "MSG", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`${message}.tts`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
*/
// next block
Blockly.Blocks["jg_messages_message_is_value"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "message %1 %2",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MSG",
                        "check": "Message"
                    },
                    {
                        "type": "field_grid_dropdown",
                        "name": "TYPE",
                        "options": [
                            [
                                "mentions everyone?",
                                'mentions.everyone'
                            ],
                            [
                                "mentions members?",
                                'mentions.users != null && ^{MSG_INPUT}mentions.users.size > 0'
                            ],
                            [
                                "mentions roles?",
                                'mentions.roles != null && ^{MSG_INPUT}mentions.roles.size > 0 || ^{MSG_INPUT}mentions._roles != null && ^{MSG_INPUT}mentions._roles.size > 0'
                            ],
                            [
                                "mentions channels?",
                                'mentions.channels != null && ^{MSG_INPUT}mentions.channels.size > 0'
                            ],
                            [
                                "is a system message?",
                                'system'
                            ],
                            [
                                "is pinned?",
                                'pinned'
                            ],
                            [
                                "is text to speech?",
                                'tts'
                            ],
                            [
                                "is edited?",
                                'editedTimestamp != null'
                            ],
                            [
                                "is from webhook?",
                                'webhookId != null'
                            ],
                            [
                                "is a reply?",
                                'type == "REPLY"'
                            ],
                            [
                                "has embeds?",
                                'embeds != null && ^{MSG_INPUT}embeds.length > 0'
                            ],
                            [
                                "has buttons or menus?",
                                'components != null && ^{MSG_INPUT}components.length > 0'
                            ],
                            [
                                "has attachments?",
                                'attachments != null && ^{MSG_INPUT}attachments.size > 0'
                            ],
                            [
                                "has stickers?",
                                'stickers != null && ^{MSG_INPUT}stickers.size > 0'
                            ],
                            [
                                "has thread?",
                                'hasThread'
                            ],
                            [
                                "can be deleted by the bot?",
                                'deletable'
                            ],
                            [
                                "can be crossposted by the bot?",
                                'crosspostable'
                            ],
                            [
                                "can be edited by the bot?",
                                'editable'
                            ],
                            [
                                "can be pinned by the bot?",
                                'pinnable'
                            ]
                        ],
                    }
                ],
                "colour": "#4C97FF",
                "output": "Boolean",
                "tooltip": "Check if a message is a message with this property.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_messages_message_is_value"] = function (block) {
    const message = Blockly.JavaScript.valueToCode(block, "MSG", Blockly.JavaScript.ORDER_ATOMIC);
    const property = block.getFieldValue("TYPE").replaceAll("^{MSG_INPUT}", message + ".")
    const code = [`${message}.${property}`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
// next block
Blockly.Blocks["jg_messages_message_webhook_id"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "message %1 webhook ID",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MSG",
                        "check": "Message"
                    }
                ],
                "colour": "#4C97FF",
                "output": "String",
                "tooltip": "Get a message's webhook ID, if it has one.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_messages_message_webhook_id"] = function (block) {
    const message = Blockly.JavaScript.valueToCode(block, "MSG", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`${message}.webhookId`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
// next block
Blockly.Blocks["jg_channel_get_last_messages_in_channel_then"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "get last %1 messages in channel %2 then %3 %4",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "AMOUNT",
                        "check": "Number"
                    },
                    {
                        "type": "input_value",
                        "name": "CHANNEL",
                        "check": "Channel"
                    },
                    {
                        "type": "input_dummy"
                    },
                    {
                        "type": "input_statement",
                        "name": "STATEMENTS"
                    }
                ],
                "colour": "#a55b80",
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "Get the last number of messages in the channel and run the blocks below.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_channel_get_last_messages_in_channel_then"] = function (block) {
    const amount = Blockly.JavaScript.valueToCode(block, "AMOUNT", Blockly.JavaScript.ORDER_ATOMIC);
    const channel = Blockly.JavaScript.valueToCode(block, "CHANNEL", Blockly.JavaScript.ORDER_ATOMIC);
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    const code = `${channel}.messages.fetch({ limit: ${amount} }).then(async (last_messages_in_channel) => {
    ${statements}
});
`;
    return code;
};
// next block
Blockly.Blocks["jg_channel_last_message_number"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "last message #%1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "INDEX",
                        "check": "Number"
                    }
                ],
                "colour": "#4C97FF",
                "output": "Message",
                "tooltip": "Get the last message at the index in the channel.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_channel_last_message_number"] = function (block) {
    const index = Blockly.JavaScript.valueToCode(block, "INDEX", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`last_messages_in_channel.at(${index} - 1)`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
registerRestrictions("jg_channel_last_message_number", [
    {
        type: "hasparent",
        message: "$This block needs to be placed in a \"get last messages in channel then\" block!",
        types: [
            "jg_channel_get_last_messages_in_channel_then"
        ]
    }
]);
// next block
Blockly.Blocks["jg_message_user_replied_to_in_message"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "user replied to in message %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MSG",
                        "check": "Message"
                    }
                ],
                "colour": "#4C97FF",
                "output": "Member",
                "tooltip": "Get the user that was replied to in the message.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_message_user_replied_to_in_message"] = function (block) {
    const msg = Blockly.JavaScript.valueToCode(block, "MSG", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`${msg}.mentions.repliedUser`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
// ------------------
//
// Attachment Blocks
//
// ------------------
Blockly.Blocks["jg_attachment_amount_of_attachments_on_message"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "amount of attachments on message %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MESSAGE",
                        "check": "Message"
                    }
                ],
                "colour": "#187795",
                "output": "Number",
                "tooltip": "Get the number of attachments on a message.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_attachment_amount_of_attachments_on_message"] = function (block) {
    const msg = Blockly.JavaScript.valueToCode(block, "MESSAGE", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`${msg}.attachments.size`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
Blockly.Blocks["jg_attachment_get_attachment_number"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "get attachment #%1 on message %2",
                "inputsInline": true,
                "args0": [
                    {
                        "type": "input_value",
                        "name": "INDEX",
                        "check": "Number"
                    },
                    {
                        "type": "input_value",
                        "name": "MESSAGE",
                        "check": "Message"
                    }
                ],
                "colour": "#187795",
                "output": "Attachment",
                "tooltip": "Get the specific attachment on the message.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_attachment_get_attachment_number"] = function (block) {
    const index = Blockly.JavaScript.valueToCode(block, "INDEX", Blockly.JavaScript.ORDER_ATOMIC);
    const msg = Blockly.JavaScript.valueToCode(block, "MESSAGE", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`${msg}.attachments.at(Number(${index}) - 1)`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
Blockly.Blocks["jg_attachment_get_attachment_property"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "get %2 from attachment %1",
                "inputsInline": true,
                "args0": [
                    {
                        "type": "input_value",
                        "name": "ATTACH",
                        "check": "Attachment"
                    },
                    {
                        "type": "field_dropdown",
                        "name": "PROPERTY",
                        "options": [
                            [
                                "URL",
                                'url'
                            ],
                            [
                                "name",
                                'name'
                            ],
                            [
                                "size (in bytes)",
                                'size'
                            ],
                            [
                                "MIME type",
                                'contentType'
                            ],
                            [
                                "hidden",
                                'ephemeral'
                            ],
                            [
                                "ID",
                                'id'
                            ],
                            [
                                "is spoiler?",
                                'spoiler'
                            ],
                            [
                                "width (type dependent)",
                                'attachments.size > 0'
                            ],
                            [
                                "height (type dependent)",
                                'stickers.size > 0'
                            ]
                        ],
                    }
                ],
                "colour": "#187795",
                "output": null,
                "tooltip": "Get the specific property from the attachment. You can see what MIME types apply to what file extension by Right Clicking on the block and pressing \"Help\". Width and Height only apply to certain types of attachment types.",
                "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types"
            }
        );
    }
}
Blockly.JavaScript["jg_attachment_get_attachment_property"] = function (block) {
    const property = block.getFieldValue("PROPERTY")
    const attach = Blockly.JavaScript.valueToCode(block, "ATTACH", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`${attach}.${property}`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
// ------------------
//
// back to normal shit
//
// ------------------
Blockly.Blocks["jg_message_mentioned_member_number_on_message"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "get mentioned %3 #%1 on message %2",
                "inputsInline": true,
                "args0": [
                    {
                        "type": "input_value",
                        "name": "INDEX",
                        "check": "Number"
                    },
                    {
                        "type": "input_value",
                        "name": "MESSAGE",
                        "check": "Message"
                    },
                    {
                        "type": "field_dropdown",
                        "name": "TYPE",
                        "options": [
                            [
                                "member",
                                'users'
                            ],
                            [
                                "role",
                                'roles'
                            ],
                            [
                                "channel",
                                'channels'
                            ]
                        ],
                    }
                ],
                "colour": "#187795",
                "output": ["Member", "Role", "Channel"],
                "tooltip": "Get a specific mentioned member, role or channel on the message.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_message_mentioned_member_number_on_message"] = function (block) {
    const index = Blockly.JavaScript.valueToCode(block, "INDEX", Blockly.JavaScript.ORDER_ATOMIC);
    const msg = Blockly.JavaScript.valueToCode(block, "MESSAGE", Blockly.JavaScript.ORDER_ATOMIC);
    const type = block.getFieldValue("TYPE")
    const code = [`${msg}.mentions.${type}.at(Number(${index}) - 1)`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
// next blok
Blockly.Blocks["jg_message_amount_of_mentioned_members_on_message"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "amount of mentioned %2 on message %1",
                "inputsInline": true,
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MESSAGE",
                        "check": "Message"
                    },
                    {
                        "type": "field_dropdown",
                        "name": "TYPE",
                        "options": [
                            [
                                "members",
                                'users'
                            ],
                            [
                                "roles",
                                'roles'
                            ],
                            [
                                "channels",
                                'channels'
                            ]
                        ],
                    }
                ],
                "colour": "#187795",
                "output": "Number",
                "tooltip": "Get the amount of members, roles, or channels mentioned in a message.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_message_amount_of_mentioned_members_on_message"] = function (block) {
    const msg = Blockly.JavaScript.valueToCode(block, "MESSAGE", Blockly.JavaScript.ORDER_ATOMIC);
    const type = block.getFieldValue("TYPE")
    const code = [`${msg}.mentions.${type}.size`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
// -----------------------------------------------------------------------------------
//
//
// T Y P I N G
// B L O C K S
//
//
// -----------------------------------------------------------------------------------
Blockly.Blocks["jg_typing_typing_attribute"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "typing %1",
                "inputsInline": true,
                "args0": [
                    {
                        "type": "field_dropdown",
                        "name": "ATT",
                        "options": [
                            [
                                "server member",
                                'member'
                            ],
                            [
                                "user",
                                'user'
                            ],
                            [
                                "channel",
                                'channel'
                            ],
                            [
                                "server",
                                'guild'
                            ],
                            [
                                "started time (UNIX)",
                                'startedAt'
                            ],
                            [
                                "is in a server?",
                                '123'
                            ]
                        ],
                    }
                ],
                "colour": "#1392ed",
                "output": ["Member", "Channel", "Server", "Guild", "Number"],
                "tooltip": "Grab information about someone typing.",
                "helpUrl": ""
            }
        );
    },
    onchange: function () {
        if (String(this.getFieldValue("ATT")) == "123") {
            this.setOutput(true, "Boolean")
        } else {
            this.setOutput(true, ["Member", "Channel", "Server", "Guild", "Number"])
        }
    }
}
Blockly.JavaScript["jg_typing_typing_attribute"] = function (block) {
    const type = block.getFieldValue("ATT")
    var code
    if (type == 123) {
        code = [`s4dTyping.inGuild()`, Blockly.JavaScript.ORDER_NONE];
    } else {
        code = [`s4dTyping.${type}`, Blockly.JavaScript.ORDER_NONE];
    }
    return code;
};
// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

// my my

Blockly.Blocks["jg_status_does_member_have_a_status_for_device"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "does member %1 have a status for discord %2?",
                "inputsInline": true,
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MEMBER",
                        "check": "Member"
                    },
                    {
                        "type": "field_dropdown",
                        "name": "TYPE",
                        "options": [
                            [
                                "desktop app",
                                'desktop'
                            ],
                            [
                                "website",
                                'web'
                            ],
                            [
                                "mobile app",
                                'mobile'
                            ]
                        ],
                    }
                ],
                "colour": "#187795",
                "output": "Boolean",
                "tooltip": "Can be used to see what devices the member is using. If the member is not using the device, it'll be false.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_status_does_member_have_a_status_for_device"] = function (block) {
    var member = Blockly.JavaScript.valueToCode(block, "MEMBER", Blockly.JavaScript.ORDER_ATOMIC);
    if (member.endsWith(".user")) {
        member = member.substring(0, member.length - 5)
    }
    if (member.endsWith(".user)")) {
        member = member.substring(0, member.length - 6) + ")"
    }
    const type = block.getFieldValue("TYPE")
    const code = [`${member}.presence.clientStatus.${type} != null`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
Blockly.Blocks["jg_status_member_status_on_discord"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "member %1 status on discord %2",
                "inputsInline": true,
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MEMBER",
                        "check": "Member"
                    },
                    {
                        "type": "field_dropdown",
                        "name": "TYPE",
                        "options": [
                            [
                                "desktop app",
                                'desktop'
                            ],
                            [
                                "website",
                                'web'
                            ],
                            [
                                "mobile app",
                                'mobile'
                            ]
                        ],
                    }
                ],
                "colour": "#187795",
                "output": "String",
                "tooltip": "Can be used to see what devices the member is using. This can be online, idle, or dnd.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_status_member_status_on_discord"] = function (block) {
    var member = Blockly.JavaScript.valueToCode(block, "MEMBER", Blockly.JavaScript.ORDER_ATOMIC);
    if (member.endsWith(".user")) {
        member = member.substring(0, member.length - 5)
    }
    if (member.endsWith(".user)")) {
        member = member.substring(0, member.length - 6) + ")"
    }
    const type = block.getFieldValue("TYPE")
    const code = [`${member}.presence.clientStatus.${type}`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
Blockly.Blocks["jg_messages_reply_with_allowed_list_of_pings_on_users_on_roles"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "reply %1 with allowed list of pings %2 on user IDs %3 on role IDs %4",
                "inputsInline": false,
                "args0": [
                    {
                        "type": "input_value",
                        "name": "CONTENT",
                        "check": ["Number", "String", "MessageEmbed", "embed", "var"]
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
                "tooltip": "Send a message but only ping the members and roles with the IDs in the list. If you dont want to ping anyone or any roles, just put an empty list. If you want to ping all members or all roles, just leave the input empty with no block there.",
                "helpUrl": ""
            }
        );
    }
};
Blockly.JavaScript["jg_messages_reply_with_allowed_list_of_pings_on_users_on_roles"] = function (block) {
    const content = Blockly.JavaScript.valueToCode(block, "CONTENT", Blockly.JavaScript.ORDER_ATOMIC);
    const users = Blockly.JavaScript.valueToCode(block, "USERS", Blockly.JavaScript.ORDER_ATOMIC);
    const roles = Blockly.JavaScript.valueToCode(block, "ROLES", Blockly.JavaScript.ORDER_ATOMIC);
    var usableA = ""
    var usableB = ""
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
        if ((contentType === null)) {
            const code = `s4dmessage.channel.send({
                content: String(${content}),
                allowedMentions: {
                    ${usableA}
                    ${usableB}
                }
            });
            `;
            return code;
        } else if ((contentType === "embed") || (!contentType && typeof contentType === "object")) {
            const code = `s4dmessage.channel.send({
                 embeds:[${content}],
                allowedMentions: {
                    ${usableA}
                    ${usableB}
                }
                });
                `;
            return code;
        } else if ((contentType === "MessageEmbed") || (!contentType && typeof contentType === "object")) {
            const code = `s4dmessage.channel.send({
                ${content},
                allowedMentions: {
                    ${usableA}
                    ${usableB}
                }
            });
            `;
            return code;
        } else {
            const code = `s4dmessage.channel.send({
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
        const code = `s4dmessage.channel.send({
            content:String(${content}),
                allowedMentions: {
                    ${usableA}
                    ${usableB}
                }
        });
        `;
        return code;
    }
};
registerRestrictions("jg_messages_reply_with_allowed_list_of_pings_on_users_on_roles", [
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
            "jg_event_message_when_a_message_is_recieved_and_author_isnt_a_bot"
        ]
    }
]);
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
Blockly.Blocks["jg_messages_respond_with_and_with_allowed_list_of_pings_on_users_on_roles"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "respond with %1 and with allowed list of pings %2 on user IDs %3 on role IDs %4",
                "inputsInline": false,
                "args0": [
                    {
                        "type": "input_value",
                        "name": "CONTENT",
                        "check": ["Number", "String", "MessageEmbed", "embed", "var"]
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
                "tooltip": "Send a message but only ping the members and roles with the IDs in the list. If you dont want to ping anyone or any roles, just put an empty list. If you want to ping all members or all roles, just leave the input empty with no block there.",
                "helpUrl": ""
            }
        );
    }
};
Blockly.JavaScript["jg_messages_respond_with_and_with_allowed_list_of_pings_on_users_on_roles"] = function (block) {
    const content = Blockly.JavaScript.valueToCode(block, "CONTENT", Blockly.JavaScript.ORDER_ATOMIC);
    const users = Blockly.JavaScript.valueToCode(block, "USERS", Blockly.JavaScript.ORDER_ATOMIC);
    const roles = Blockly.JavaScript.valueToCode(block, "ROLES", Blockly.JavaScript.ORDER_ATOMIC);
    var usableA = ""
    var usableB = ""
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
        if ((contentType === null)) {
            const code = `s4dmessage.channel.send({
                content: String(${content}),
                allowedMentions: {
                    ${usableA}
                    ${usableB}
                }
            });
            `;
            return code;
        } else if ((contentType === "embed") || (!contentType && typeof contentType === "object")) {
            const code = `s4dmessage.channel.send({
                 embeds:[${content}],
                allowedMentions: {
                    ${usableA}
                    ${usableB}
                }
                });
                `;
            return code;
        } else if ((contentType === "MessageEmbed") || (!contentType && typeof contentType === "object")) {
            const code = `s4dmessage.channel.send({
                ${content},
                allowedMentions: {
                    ${usableA}
                    ${usableB}
                }
            });
            `;
            return code;
        } else {
            const code = `s4dmessage.channel.send({
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
        const code = `s4dmessage.channel.send({
            content:String(${content}),
                allowedMentions: {
                    ${usableA}
                    ${usableB}
                }
        });
        `;
        return code;
    }
};
registerRestrictions("jg_messages_respond_with_and_with_allowed_list_of_pings_on_users_on_roles", [
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
            "jg_event_message_when_a_message_is_recieved_and_author_isnt_a_bot"
        ]
    }
]);
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
// AFAFDWTGF^&
Blockly.Blocks["jg_channels_send_in_channel_with_allowed_list_of_pings_on_users_on_roles"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "send %1 in channel %2 with allowed list of pings %3 on user IDs %4 on role IDs %5",
                "inputsInline": false,
                "args0": [
                    {
                        "type": "input_value",
                        "name": "CONTENT",
                        "check": ["MessageEmbed", "String", "Number", "embed", "var"]
                    },
                    {
                        "type": "input_value",
                        "name": "CHANNEL",
                        "check": "Channel"
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
                "tooltip": "Send a message in a specific channel but only ping the members and roles with the IDs in the list. If you dont want to ping anyone or any roles, just put an empty list. If you want to ping all members or all roles, just leave the input empty with no block there.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_channels_send_in_channel_with_allowed_list_of_pings_on_users_on_roles"] = function (block) {
    const channel = Blockly.JavaScript.valueToCode(block, "CHANNEL", Blockly.JavaScript.ORDER_ATOMIC);
    const content = Blockly.JavaScript.valueToCode(block, "CONTENT", Blockly.JavaScript.ORDER_ATOMIC);
    const users = Blockly.JavaScript.valueToCode(block, "USERS", Blockly.JavaScript.ORDER_ATOMIC);
    const roles = Blockly.JavaScript.valueToCode(block, "ROLES", Blockly.JavaScript.ORDER_ATOMIC);
    var usableA = ""
    var usableB = ""
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
        if ((contentType === "var")) {
            const code = `${channel}.send({
                content: String(${content}),
                allowedMentions: {
                    ${usableA}
                    ${usableB}
                }
            });
            `;
            return code;
        } else if ((contentType === "embed") || (!contentType && typeof contentType === "object")) {
            const code = `${channel}.send({
                embeds:[${content}],
                allowedMentions: {
                    ${usableA}
                    ${usableB}
                }
            });
            `;
            return code;
        } else if ((contentType === "MessageEmbed") || (!contentType && typeof contentType === "object")) {
            const code = `${channel}.send({
                ${content},
                allowedMentions: {
                    ${usableA}
                    ${usableB}
                }
            });
            `;
            return code;
        } else {
            const code = `${channel}.send({
                content:String(${content}),
                allowedMentions: {
                    ${usableA}
                    ${usableB}
                }
        });
            `;
            return code;
        }
    } else {
        const code = `${channel}.send({
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

registerRestrictions("jg_channels_send_in_channel_with_allowed_list_of_pings_on_users_on_roles", [
    {
        type: "notempty",
        message: "RES_SEND_CHANNEL_CONTENT",
        types: [
            "CONTENT"
        ]
    },
    {
        type: "notempty",
        message: "RES_SEND_CHANNEL_CHANNEL",
        types: [
            "CHANNEL"
        ]
    }
]);
// abc
// abc
// abc
// abc
// abc
// abc
// abc
// abc
// abc
// abc
// abc
// abc
// abc
// abc

Blockly.Blocks["jg_event_message_when_a_message_is_recieved_and_author_isnt_a_bot"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "When a message is recieved & author isn't a bot %1 %2",
                "colour": "#f79400",
                "args0": [
                    {
                        "type": "input_dummy"
                    },
                    {
                        "type": "input_statement",
                        "name": "STATEMENTS"
                    }
                ]
            }
        );
    }
}
Blockly.JavaScript["jg_event_message_when_a_message_is_recieved_and_author_isnt_a_bot"] = function (block) {
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    const code = `s4d.client.on('messageCreate', async (s4dmessage) => {
        if (s4dmessage.author.bot) {
            return;
        }
        ${statements}
    });
    `;
    return code;
};













Blockly.Blocks["jg_unused_floating_comment"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "ㅤ%1ㅤ",
                "colour": "#DDAA00",
                "args0": [
                    {
                        "type": "field_multilinetext",
                        "name": "TEXT",
                        "spellcheck": false
                    }
                ]
            }
        );
    }
}
Blockly.JavaScript["jg_unused_floating_comment"] = function () {
    return ``;
};
Blockly.Blocks["jg_comments_floating_arrow"] = {
    init: function () {
        let imgsize = 64
        this.jsonInit(
            {
                "message0": "%1",
                "colour": "#DDAA00",
                "args0": [
                    {
                        "type": "field_dropdown",
                        "name": "arrow",
                        "options": [
                            [
                                {
                                    "src": "https://media.discordapp.net/attachments/977302952530305045/984067831064846396/down.png",
                                    "width": imgsize,
                                    "height": imgsize,
                                    "alt": "down"
                                },
                                "down"
                            ],
                            [
                                {
                                    "src": "https://media.discordapp.net/attachments/977302952530305045/984067832717393940/up.png",
                                    "width": imgsize,
                                    "height": imgsize,
                                    "alt": "up"
                                },
                                "up"
                            ],
                            [
                                {
                                    "src": "https://media.discordapp.net/attachments/977302952530305045/984067832088231966/right.png",
                                    "width": imgsize,
                                    "height": imgsize,
                                    "alt": "right"
                                },
                                "right"
                            ],
                            [
                                {
                                    "src": "https://media.discordapp.net/attachments/977302952530305045/984067831589117952/left.png",
                                    "width": imgsize,
                                    "height": imgsize,
                                    "alt": "left"
                                },
                                "left"
                            ],
                            [
                                {
                                    "src": "https://media.discordapp.net/attachments/977302952530305045/984067830775427082/dleft.png",
                                    "width": imgsize,
                                    "height": imgsize,
                                    "alt": "down left"
                                },
                                "down left"
                            ],
                            [
                                {
                                    "src": "https://media.discordapp.net/attachments/977302952530305045/984067831358427166/dright.png",
                                    "width": imgsize,
                                    "height": imgsize,
                                    "alt": "down right"
                                },
                                "down right"
                            ],
                            [
                                {
                                    "src": "https://media.discordapp.net/attachments/977302952530305045/984067832373469254/uleft.png",
                                    "width": imgsize,
                                    "height": imgsize,
                                    "alt": "up left"
                                },
                                "up left"
                            ],
                            [
                                {
                                    "src": "https://media.discordapp.net/attachments/977302952530305045/984067832948072458/uright.png",
                                    "width": imgsize,
                                    "height": imgsize,
                                    "alt": "up right"
                                },
                                "up right"
                            ]
                        ]
                    }
                ]
            }
        );
    }
}
Blockly.JavaScript["jg_comments_floating_arrow"] = function () {
    const code = ``;
    return code;
};
// #DDAA00
Blockly.Blocks["jg_comments_floating_image"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Image URL:")
            .appendField(new Blockly.FieldTextInput("https://media.discordapp.net/attachments/977302952530305045/984125455881863208/load.png"), "TEXT")
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("https://media.discordapp.net/attachments/977302952530305045/984125455881863208/load.png", 512, 512, { alt: "Custom Image", flipRtl: "FALSE" }), "IMG");
        this.setInputsInline(false);
        this.setColour("#DDAA00");
        this.setTooltip("");
        this.setHelpUrl("");
    }

    ,
    onchange: function () {
        let url = String(this.getFieldValue("TEXT"))
        this.getField("IMG").setValue(url)
        this.setTooltip("An image comment using url " + url + ".")
    }

}
Blockly.JavaScript["jg_comments_floating_image"] = function () {
    const code = ``;
    return code;
};
Blockly.Blocks["jg_comments_connected_comment"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "ㅤ%1ㅤ",
                "colour": "#DDAA00",
                "previousStatement": null,
                "nextStatement": null,
                "args0": [
                    {
                        "type": "field_multilinetext",
                        "name": "TEXT",
                        "spellcheck": false
                    }
                ]
            }
        );
    }
}
Blockly.JavaScript["jg_comments_connected_comment"] = function (block) {
    var text = block.getFieldValue('TEXT');
    text = text.replaceAll("*/", "* /")
    const code = `
    /*
    ${text}
    */
   `;
    return code;
};
Blockly.Blocks["jg_comments_connected_arrow"] = {
    init: function () {
        let imgsize = 64
        this.jsonInit(
            {
                "message0": "%1",
                "colour": "#DDAA00",
                "previousStatement": null,
                "nextStatement": null,
                "args0": [
                    {
                        "type": "field_dropdown",
                        "name": "arrow",
                        "options": [
                            [
                                {
                                    "src": "https://media.discordapp.net/attachments/977302952530305045/984067831064846396/down.png",
                                    "width": imgsize,
                                    "height": imgsize,
                                    "alt": "down"
                                },
                                "down"
                            ],
                            [
                                {
                                    "src": "https://media.discordapp.net/attachments/977302952530305045/984067832717393940/up.png",
                                    "width": imgsize,
                                    "height": imgsize,
                                    "alt": "up"
                                },
                                "up"
                            ],
                            [
                                {
                                    "src": "https://media.discordapp.net/attachments/977302952530305045/984067832088231966/right.png",
                                    "width": imgsize,
                                    "height": imgsize,
                                    "alt": "right"
                                },
                                "right"
                            ],
                            [
                                {
                                    "src": "https://media.discordapp.net/attachments/977302952530305045/984067831589117952/left.png",
                                    "width": imgsize,
                                    "height": imgsize,
                                    "alt": "left"
                                },
                                "left"
                            ],
                            [
                                {
                                    "src": "https://media.discordapp.net/attachments/977302952530305045/984067830775427082/dleft.png",
                                    "width": imgsize,
                                    "height": imgsize,
                                    "alt": "down left"
                                },
                                "down left"
                            ],
                            [
                                {
                                    "src": "https://media.discordapp.net/attachments/977302952530305045/984067831358427166/dright.png",
                                    "width": imgsize,
                                    "height": imgsize,
                                    "alt": "down right"
                                },
                                "down right"
                            ],
                            [
                                {
                                    "src": "https://media.discordapp.net/attachments/977302952530305045/984067832373469254/uleft.png",
                                    "width": imgsize,
                                    "height": imgsize,
                                    "alt": "up left"
                                },
                                "up left"
                            ],
                            [
                                {
                                    "src": "https://media.discordapp.net/attachments/977302952530305045/984067832948072458/uright.png",
                                    "width": imgsize,
                                    "height": imgsize,
                                    "alt": "up right"
                                },
                                "up right"
                            ]
                        ]
                    }
                ]
            }
        );
    }
}
Blockly.JavaScript["jg_comments_connected_arrow"] = function (block) {
    let arrow = block.getFieldValue("arrow")
    const code = `/*
    ${arrow}
    */`;
    return code;
};
Blockly.Blocks["jg_comments_connected_image"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Image URL:")
            .appendField(new Blockly.FieldTextInput("https://media.discordapp.net/attachments/977302952530305045/984125455881863208/load.png"), "TEXT")
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("https://media.discordapp.net/attachments/977302952530305045/984125455881863208/load.png", 512, 256, { alt: "Custom Image", flipRtl: "FALSE" }), "IMG");
        this.setInputsInline(false);
        this.setColour("#DDAA00");
        this.setTooltip("");
        this.setHelpUrl("");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }

    ,
    onchange: function () {
        let url = String(this.getFieldValue("TEXT"))
        this.getField("IMG").setValue(url)
        this.setTooltip("An image comment using url " + url + ".")
    }

}
Blockly.JavaScript["jg_comments_connected_image"] = function (block) {
    let url = block.getFieldValue("TEXT")
    const code = `
    /*
    Image URL:
    ${url.replaceAll("*/", "* /")}
    */
    `;
    return code;
};

// abc
// abc
// abc
// abc
// abc
// abc
// abc
// abc
// abc
// abc
// abc
// abc
// abc
// abc

Blockly.Blocks["jg_events_all_label"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "%1 %2 %3 %4 %5 %6",
                "args0": [
                    {
                        "type": "field_multilinetext",
                        "name": "LABEL",
                        "text": "Label this event..."
                    },
                    {
                        "type": "field_colour",
                        "name": "COLOR",
                        "colour": "#ffcc00"
                    },
                    {
                        "type": "input_dummy"
                    },
                    {
                        "type": "field_dropdown",
                        "name": "EVENT",
                        "options": [
                            [
                                "When the code runs",
                                "^empty"
                            ],
                            [
                                "When the bot is connected",
                                "s4d.client.on('ready', async () => {"
                            ],
                            [
                                "When a message is received",
                                "s4d.client.on('messageCreate', async (s4dmessage) => {"
                            ],
                            [
                                "When a message is received & author isn't bot",
                                `s4d.client.on('messageCreate', async (s4dmessage) => {
        if (s4dmessage.author.bot) {
            return;
        }`
                            ],
                            [
                                "When a message is edited",
                                "s4d.client.on('messageUpdate', async (oldMessage, newMessage) => {"
                            ],
                            [
                                "When a message is deleted",
                                "s4d.client.on('messageDelete', async (s4dmessage) => {"
                            ],
                            [
                                "When someone starts typing",
                                "s4d.client.on('typingStart', async (s4dTyping) => {"
                            ],
                            [
                                "When thread message is received",
                                `s4d.client.on('messageCreate', async (s4dThread) => {
        if(!(s4dThread.channel.type === "GUILD_PUBLIC_THREAD" || s4dThread.channel.type === "GUILD_PUBLIC_THREAD" )){
            return
        }`
                            ],
                            [
                                "When a slash command is received",
                                `s4d.client.on('interactionCreate', async (interaction) => {
        let member = interaction.guild.members.cache.get(interaction.member.user.id)`
                            ],
                            [
                                "When the bot is added to a server",
                                "s4d.client.on('guildCreate', async (s4dguild) => {"
                            ],
                            [
                                "When the bot is removed from a server",
                                "s4d.client.on('guildDelete', async (s4dguild) => {"
                            ],
                        ]
                    },
                    {
                        "type": "input_dummy"
                    },
                    {
                        "type": "input_statement",
                        "name": "STATEMENTS"
                    }
                ],
                "inputsInline": false,
                "colour": "#000000",
                "tooltip": "Run the blocks inside when the specified event happens.",
                "helpUrl": ""
            }
        );
    },
    onchange: function () {
        let color = this.getFieldValue("COLOR")
        this.setColour(color)
    }
}
Blockly.JavaScript["jg_events_all_label"] = function (block) {
    const label = block.getFieldValue("LABEL")
    let event = block.getFieldValue("EVENT")
    let ending = "});"
    if (String(event) === '^empty') {
        event = ""
        ending = ""
    }
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    const code = `/*
        ${label.replaceAll("*/", "* /")}
*/
   ${event}
   ${statements}
   ${ending}
   `
    return code;
};

// aaaaaaaaaaaaaaa
//a aaa
// 

//

//

//
//
//
//
//
//

Blockly.Blocks["jg_members_list_of_known_member_ids"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "list of known member IDs",
                "inputsInline": true,
                "args0": [],
                "colour": "#187795",
                "output": ["Array", "List"],
                "tooltip": "Get a list of member IDs that the bot has known about.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_members_list_of_known_member_ids"] = function () {
    const code = [`JSON.parse(JSON.stringify(s4d.client)).users`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
//  aaaa
//
//
//
//
//
//
//
//


Blockly.Blocks["jg_members_new_list_of_known_ids"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "list of known %1 IDs",
                "inputsInline": true,
                "args0": [
                    {
                        "type": "field_dropdown",
                        "name": "TYPE",
                        "options": [
                            [
                                "member",
                                "users"
                            ],
                            [
                                "channel",
                                "channels"
                            ],
                            [
                                "server",
                                "guilds"
                            ],
                        ]
                    }
                ],
                "colour": "#187795",
                "output": ["Array", "List"],
                "tooltip": "Get a list of IDs that the bot has known about.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_members_new_list_of_known_ids"] = function (block) {
    const type = block.getFieldValue("TYPE")
    const code = [`JSON.parse(JSON.stringify(s4d.client)).${type}`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
//
//
//
//
//
//
//
//
//

Blockly.Blocks["jg_members_get_member_by_id"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "get user by ID %1",
                "inputsInline": true,
                "args0": [
                    {
                        "type": "input_value",
                        "name": "ID",
                        "check": ["String", "var", "Var", "Env", "env", "Number"]
                    }
                ],
                "colour": "#187795",
                "output": "Member",
                "tooltip": "Get a user by their ID. This probably wont let you do server actions with the user however, like giving them a role.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_members_get_member_by_id"] = function (block) {
    const id = Blockly.JavaScript.valueToCode(block, "ID", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`s4d.client.users.cache.get(String(${id}))`, Blockly.JavaScript.ORDER_NONE];
    return code;
};

Blockly.Blocks["jg_members_member_is_in_voice_channel"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "member %1 is in voice channel?",
                "inputsInline": true,
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MEMBER",
                        "check": "Member"
                    }
                ],
                "colour": "#a55b80",
                "output": "Boolean",
                "tooltip": "Checks if a member is in a voice channel.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_members_member_is_in_voice_channel"] = function (block) {
    const member = Blockly.JavaScript.valueToCode(block, "MEMBER", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`${(String(member).endsWith(".user") || String(member).endsWith(".user)")) ? member.replace(".user", "") : member}.voice.channel != null`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
Blockly.Blocks["jg_members_get_members_current_voice_channel"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "get member%1s current voice channel",
                "inputsInline": true,
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MEMBER",
                        "check": "Member"
                    }
                ],
                "colour": "#a55b80",
                "output": "Channel",
                "tooltip": "Get a server members current voice channel, if they are in one.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_members_get_members_current_voice_channel"] = function (block) {
    const member = Blockly.JavaScript.valueToCode(block, "MEMBER", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`${(String(member).endsWith(".user") || String(member).endsWith(".user)")) ? member.replace(".user", "") : member}.voice.channel`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
// oopsie
Blockly.Blocks["jg_messages_delete_message"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "delete message %1",
                "colour": "#4C97FF",
                "tooltip": "Delete a message, if you have permission.",
                "previousStatement": null,
                "nextStatement": null,
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MESSAGE",
                        "check": "Message"
                    }
                ]
            }
        );
    }
}
Blockly.JavaScript["jg_messages_delete_message"] = function (block) {
    const message = Blockly.JavaScript.valueToCode(block, "MESSAGE", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${message}.delete()
    `;
    return code;
};
// there we hgo

Blockly.Blocks["jg_monaco_messages_delete_message"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "delete message %1",
                "colour": "#4C97FF",
                "tooltip": "Delete a message, if you have permission.",
                "previousStatement": null,
                "nextStatement": null,
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MESSAGE",
                        "check": "Message"
                    }
                ]
            }
        );
    }
}
Blockly.JavaScript["jg_monaco_messages_delete_message"] = function (block) {
    const message = Blockly.JavaScript.valueToCode(block, "MESSAGE", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${message}.delete()
    `;
    return code;
};
// next
Blockly.Blocks["jg_messages_react_to_message_with_reaction"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "react to message %1 with reaction %2",
                "inputsInline": true,
                "tooltip": "React to a message with a certain reaction.",
                "colour": "#4C97FF",
                "previousStatement": null,
                "nextStatement": null,
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MESSAGE",
                        "check": "Message"
                    },
                    {
                        "type": "input_value",
                        "name": "REACTION",
                        "check": "String"
                    }
                ]
            }
        );
    }
}
Blockly.JavaScript["jg_messages_react_to_message_with_reaction"] = function (block) {
    const message = Blockly.JavaScript.valueToCode(block, "MESSAGE", Blockly.JavaScript.ORDER_ATOMIC);
    const reaction = Blockly.JavaScript.valueToCode(block, "REACTION", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${message}.react(${reaction})
    `;
    return code;
};
Blockly.Blocks["jg_messages_crosspost_message"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "crosspost message %1",
                "inputsInline": true,
                "tooltip": "Crosspost a message if it is in an announcement channel, if the bot has permission to do that.",
                "colour": "#4C97FF",
                "previousStatement": null,
                "nextStatement": null,
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MESSAGE",
                        "check": "Message"
                    }
                ]
            }
        );
    }
}
Blockly.JavaScript["jg_messages_crosspost_message"] = function (block) {
    const message = Blockly.JavaScript.valueToCode(block, "MESSAGE", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${message}.crosspost()
    `;
    return code;
};
Blockly.Blocks["jg_messages_edit_message_to_text"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "edit message %1 to text %2",
                "inputsInline": true,
                "tooltip": "Edit a message to say something else, if it was from the bot.",
                "colour": "#4C97FF",
                "previousStatement": null,
                "nextStatement": null,
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MESSAGE",
                        "check": "Message"
                    },
                    {
                        "type": "input_value",
                        "name": "TEXT",
                        "check": "String"
                    }
                ]
            }
        );
    }
}
Blockly.JavaScript["jg_messages_edit_message_to_text"] = function (block) {
    const message = Blockly.JavaScript.valueToCode(block, "MESSAGE", Blockly.JavaScript.ORDER_ATOMIC);
    const text = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${message}.edit(String(${text}))
    `;
    return code;
};
Blockly.Blocks["jg_monaco_members_remove_timeout_from_member"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "remove timeout from member %1",
                "inputsInline": true,
                "tooltip": "Remove timeout from a certain member, if the bot has permission to.",
                "colour": "#4C97FF",
                "previousStatement": null,
                "nextStatement": null,
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MEMBER",
                        "check": "Member"
                    }
                ]
            }
        );
    }
}
Blockly.JavaScript["jg_monaco_members_remove_timeout_from_member"] = function (block) {
    const member = Blockly.JavaScript.valueToCode(block, "MEMBER", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${member}.timeout(null)
    `;
    return code;
};
Blockly.Blocks["jg_monaco_servers_on_server_get_audit_logs_then"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "on server %1 get audit logs %2 then %3",
                "inputsInline": true,
                "tooltip": "Get audit logs on a server, then get information from the audit logs.",
                "colour": "#E3317A",
                "previousStatement": null,
                "nextStatement": null,
                "args0": [
                    {
                        "type": "input_value",
                        "name": "SERVER",
                        "check": "Server"
                    },
                    {
                        "type": "input_dummy"
                    },
                    {
                        "type": "input_statement",
                        "name": "STATEMENTS"
                    }
                ]
            }
        );
    }
}
Blockly.JavaScript["jg_monaco_servers_on_server_get_audit_logs_then"] = function (block) {
    const server = Blockly.JavaScript.valueToCode(block, "SERVER", Blockly.JavaScript.ORDER_ATOMIC);
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    const code = `${server}.fetchAuditLogs().then(async (audit_raw) => {
        let audit = audit_raw.entries;
        ${statements}
    })
    `;
    return code;
};
Blockly.Blocks["jg_monaco_servers_audit_log_number"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "audit log #%1",
                "inputsInline": true,
                "tooltip": "Get a certain log from the audit logs.",
                "colour": "#E3317A",
                "output": "AuditLog",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "NUMBER",
                        "check": "Number"
                    }
                ]
            }
        );
    }
}
Blockly.JavaScript["jg_monaco_servers_audit_log_number"] = function (block) {
    const number = Blockly.JavaScript.valueToCode(block, "NUMBER", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`audit.at(Number(${number}) - 1)`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
Blockly.Blocks["jg_monaco_servers_amount_of_audit_logs"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "amount of audit logs",
                "inputsInline": true,
                "tooltip": "Get the amount of logs in the audit logs.",
                "colour": "#E3317A",
                "output": "Number",
                "args0": []
            }
        );
    }
}
Blockly.JavaScript["jg_monaco_servers_amount_of_audit_logs"] = function () {
    const code = [`audit.size`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
Blockly.Blocks["jg_monaco_servers_get_property_from_log"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "get %1 from log %2",
                "inputsInline": true,
                "tooltip": "Get information about a certain log.",
                "colour": "#E3317A",
                "output": null,
                "args0": [
                    {
                        "type": "field_dropdown",
                        "name": "PROP",
                        "options": [
                            [
                                "target type",
                                'targetType'
                            ],
                            [
                                "action type",
                                'actionType'
                            ],
                            [
                                "action",
                                'action'
                            ],
                            [
                                "reason",
                                'reason'
                            ],
                            [
                                "user who did the action",
                                'executor'
                            ],
                            [
                                "changes",
                                'changes'
                            ],
                            [
                                "item the action was done to",
                                'target'
                            ]
                        ],
                    },
                    {
                        "type": "input_value",
                        "name": "LOG",
                        "check": "AuditLog"
                    }
                ]
            }
        );
    }
}
Blockly.JavaScript["jg_monaco_servers_get_property_from_log"] = function (block) {
    const log = Blockly.JavaScript.valueToCode(block, "LOG", Blockly.JavaScript.ORDER_ATOMIC);
    const prop = block.getFieldValue("PROP");
    const code = [`${log}.${prop}`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
Blockly.Blocks["jg_monaco_servers_log_has_reason"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "log %1 has reason?",
                "inputsInline": true,
                "tooltip": "Checks if a log has a reason on it.",
                "colour": "#E3317A",
                "output": "Boolean",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "LOG",
                        "check": "AuditLog"
                    }
                ]
            }
        );
    }
}
Blockly.JavaScript["jg_monaco_servers_log_has_reason"] = function (block) {
    const log = Blockly.JavaScript.valueToCode(block, "LOG", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`${log}.reason != null`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
Blockly.Blocks["jg_monaco_servers_amount_of_changes_in_log_changes"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "amount of changes in log changes %1",
                "inputsInline": true,
                "tooltip": "Gets the amount of a log's changes.",
                "colour": "#E3317A",
                "output": "Number",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "CHANGES",
                        "check": "AuditChanges"
                    }
                ]
            }
        );
    }
}
Blockly.JavaScript["jg_monaco_servers_amount_of_changes_in_log_changes"] = function (block) {
    const changes = Blockly.JavaScript.valueToCode(block, "CHANGES", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`${changes}.length`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
Blockly.Blocks["jg_monaco_servers_change_number_in_changes"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "change #%1 in changes %2",
                "inputsInline": true,
                "tooltip": "Gets a change from a log's changes.",
                "colour": "#E3317A",
                "output": "AuditLogChanges",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "INDEX",
                        "check": "Number"
                    },
                    {
                        "type": "input_value",
                        "name": "CHANGES",
                        "check": "AuditChanges"
                    }
                ]
            }
        );
    }
}
Blockly.JavaScript["jg_monaco_servers_change_number_in_changes"] = function (block) {
    const changes = Blockly.JavaScript.valueToCode(block, "CHANGES", Blockly.JavaScript.ORDER_ATOMIC);
    const number = Blockly.JavaScript.valueToCode(block, "INDEX", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`${changes}[${number}]`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
Blockly.Blocks["jg_monaco_servers_get_from_change"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "get %1 from change %2",
                "inputsInline": true,
                "tooltip": "Gets information from a change.",
                "colour": "#E3317A",
                "output": null,
                "args0": [
                    {
                        "type": "field_dropdown",
                        "name": "PROP",
                        "options": [
                            [
                                "name of changed item",
                                'key'
                            ],
                            [
                                "old state of changed item",
                                'old'
                            ],
                            [
                                "new state of changed item",
                                'new'
                            ]
                        ],
                    },
                    {
                        "type": "input_value",
                        "name": "CHANGE",
                        "check": "AuditLogChanges"
                    }
                ]
            }
        );
    }
}
Blockly.JavaScript["jg_monaco_servers_get_from_change"] = function (block) {
    const change = Blockly.JavaScript.valueToCode(block, "CHANGE", Blockly.JavaScript.ORDER_ATOMIC);
    const type = block.getFieldValue("PROP");
    const code = [`${change}.${type}`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
Blockly.Blocks["jg_unused_scratcjwtff"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "move %1 steps",
                "inputsInline": true,
                "tooltip": "",
                "colour": "#4C97FF",
                "previousStatement": null,
                "nextStatement": null,
                "args0": [
                    {
                        "type": "input_value",
                        "name": "STEPS",
                        "check": "Number"
                    }
                ]
            }
        );
    }
}
Blockly.JavaScript["jg_unused_scratcjwtff"] = function () {
    const code = ``
    return code;
};
Blockly.Blocks["jg_monaco_roles_hoist_role"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "%1 role %2 with reason %3",
                "args0": [
                    {
                        "type": "field_dropdown",
                        "name": "TYPE",
                        "options": [
                            [
                                "hoist",
                                "true"
                            ],
                            [
                                "unhoist",
                                "false"
                            ]
                        ]
                    },
                    {
                        "type": "input_value",
                        "name": "ROLE",
                        "check": "Role"
                    },
                    {
                        "type": "input_value",
                        "name": "REASON",
                        "check": "String"
                    }
                ],
                "inputsInline": true,
                "previousStatement": null,
                "nextStatement": null,
                "colour": "#4C97FF",
                "tooltip": "Hoist or unhoist a role. Hoisting a role allows it to be displayed seperately from other roles.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_monaco_roles_hoist_role"] = function (block) {
    const type = block.getFieldValue("TYPE");
    const role = Blockly.JavaScript.valueToCode(block, "ROLE", Blockly.JavaScript.ORDER_ATOMIC);
    let reason = Blockly.JavaScript.valueToCode(block, "REASON", Blockly.JavaScript.ORDER_ATOMIC);
    if (reason) {
        reason = ", " + reason
    }
    const code = `${role}.setHoist(${type}${reason})
    `
    return code;
};
Blockly.Blocks["jg_monaco_channels_get_channel_number_from_server"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "get channel #%1 from server %2",
                "inputsInline": false,
                "tooltip": "Gets a certain channel in the server.",
                "colour": "#a55b80",
                "output": "Channel",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "INDEX",
                        "check": "Number"
                    },
                    {
                        "type": "input_value",
                        "name": "SERVER",
                        "check": "Server"
                    }
                ]
            }
        );
    }
}
Blockly.JavaScript["jg_monaco_channels_get_channel_number_from_server"] = function (block) {
    const server = Blockly.JavaScript.valueToCode(block, "SERVER", Blockly.JavaScript.ORDER_ATOMIC);
    const index = Blockly.JavaScript.valueToCode(block, "INDEX", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`${server}.channels.cache.at(Number(${index}) - 1)`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
Blockly.Blocks["jg_monaco_servers_amount_of_channels_in_server"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "amount of channels in server %1",
                "inputsInline": false,
                "tooltip": "Gets the amount of channels in a server.",
                "colour": "#D85E47",
                "output": "Channel",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "SERVER",
                        "check": "Server"
                    }
                ]
            }
        );
    }
}
Blockly.JavaScript["jg_monaco_servers_amount_of_channels_in_server"] = function (block) {
    const server = Blockly.JavaScript.valueToCode(block, "SERVER", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`${server}.channels.cache.size`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
Blockly.Blocks["jg_alex_channels_first_channel_in_server"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "%1 channel in server %2",
                "inputsInline": true,
                "tooltip": "Gets a certain channel in a server depending on the option picked.",
                "colour": "#a55b80",
                "output": "Channel",
                "args0": [
                    {
                        "type": "field_dropdown",
                        "name": "TYPE",
                        "options": [
                            [
                                "first",
                                "first"
                            ],
                            [
                                "last",
                                "last"
                            ],
                            [
                                "random",
                                "random"
                            ]
                        ]
                    },
                    {
                        "type": "input_value",
                        "name": "SERVER",
                        "check": "Server"
                    }
                ]
            }
        );
    }
}
Blockly.JavaScript["jg_alex_channels_first_channel_in_server"] = function (block) {
    const type = block.getFieldValue("TYPE")
    const server = Blockly.JavaScript.valueToCode(block, "SERVER", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`${server}.channels.cache.${type}()`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
//
//
//
//
//
//
// webhooks
//
//
//
//
//
//
Blockly.Blocks["jose_jg_webhooks_get_all_webhooks_in_channel_then"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "get all webhooks in channel %1 then %2 %3",
                "inputsInline": true,
                "tooltip": "Get all webhooks on a channel, then run the blocks inside.",
                "colour": "#4C97FF",
                "previousStatement": null,
                "nextStatement": null,
                "args0": [
                    {
                        "type": "input_value",
                        "name": "CHANNEL",
                        "check": "Channel"
                    },
                    {
                        "type": "input_dummy"
                    },
                    {
                        "type": "input_statement",
                        "name": "STATEMENTS"
                    }
                ]
            }
        );
    }
}
Blockly.JavaScript["jose_jg_webhooks_get_all_webhooks_in_channel_then"] = function (block) {
    const channel = Blockly.JavaScript.valueToCode(block, "CHANNEL", Blockly.JavaScript.ORDER_ATOMIC);
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    const code = `${channel}.fetchWebhooks().then(async (webhooks) => {
        ${statements}
    })
    `;
    return code;
};
Blockly.Blocks["jose_jg_webhooks_amount_of_webhooks"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "amount of webhooks",
                "inputsInline": false,
                "tooltip": "The amount of webhooks the channel has.",
                "colour": "#4C97FF",
                "output": "Number",
                "args0": []
            }
        );
    }
}
Blockly.JavaScript["jose_jg_webhooks_amount_of_webhooks"] = function () {
    const code = [`webhooks.size`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
registerRestrictions("jose_jg_webhooks_amount_of_webhooks", [
    {
        type: "hasparent",
        message: "RES_WEBHOOK_GET_ALL_CHANNEL",
        types: [
            "jose_jg_webhooks_get_all_webhooks_in_channel_then"
        ]
    }
]);
Blockly.Blocks["jose_jg_webhooks_webhook_with_id_exists_in_channel"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "webhook with ID %1 exists in channel?",
                "inputsInline": true,
                "tooltip": "Check if the channel we are checking webhooks on has a certain webhook.",
                "colour": "#4C97FF",
                "output": "Boolean",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "ID",
                        "check": ["String", "Number"]
                    }
                ]
            }
        );
    }
}
Blockly.JavaScript["jose_jg_webhooks_webhook_with_id_exists_in_channel"] = function (block) {
    const id = Blockly.JavaScript.valueToCode(block, "ID", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`webhooks.has(String(${id}))`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
registerRestrictions("jose_jg_webhooks_webhook_with_id_exists_in_channel", [
    {
        type: "hasparent",
        message: "RES_WEBHOOK_GET_ALL_CHANNEL",
        types: [
            "jose_jg_webhooks_get_all_webhooks_in_channel_then"
        ]
    }
]);
Blockly.Blocks["jose_jg_webhooks_get_webhook_with_id"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "get webhook with ID %1",
                "inputsInline": true,
                "tooltip": "Get a webhook in the channel with a certain ID.",
                "colour": "#4C97FF",
                "output": "Webhook",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "ID",
                        "check": ["String", "Number"]
                    }
                ]
            }
        );
    }
}
Blockly.JavaScript["jose_jg_webhooks_get_webhook_with_id"] = function (block) {
    const id = Blockly.JavaScript.valueToCode(block, "ID", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`webhooks.get(String(${id}))`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
registerRestrictions("jose_jg_webhooks_get_webhook_with_id", [
    {
        type: "hasparent",
        message: "RES_WEBHOOK_GET_ALL_CHANNEL",
        types: [
            "jose_jg_webhooks_get_all_webhooks_in_channel_then"
        ]
    }
]);
Blockly.Blocks["jose_jg_webhooks_get_webhook_information"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "get webhook %2 %1",
                "inputsInline": true,
                "tooltip": "Get information about a certain webhook.",
                "colour": "#4C97FF",
                "output": null,
                "args0": [
                    {
                        "type": "field_dropdown",
                        "name": "PROP",
                        "options": [
                            [
                                "profile picture URL",
                                'avatarURL()'
                            ],
                            [
                                "channel ID",
                                'channelId'
                            ],
                            [
                                "created timestamp",
                                'createdTimestamp'
                            ],
                            [
                                "server ID",
                                'guildId'
                            ],
                            [
                                "ID",
                                'id'
                            ],
                            [
                                "name",
                                'name'
                            ],
                            [
                                "creator",
                                'owner'
                            ],
                            [
                                "token (creator only)",
                                'token'
                            ],
                            [
                                "URL",
                                'url'
                            ]
                        ],
                    },
                    {
                        "type": "input_value",
                        "name": "WEBHOOK",
                        "check": "Webhook"
                    }
                ]
            }
        );
    }
}
Blockly.JavaScript["jose_jg_webhooks_get_webhook_information"] = function (block) {
    const webhook = Blockly.JavaScript.valueToCode(block, "WEBHOOK", Blockly.JavaScript.ORDER_ATOMIC);
    const prop = block.getFieldValue("PROP");
    const code = [`${webhook}.${prop}`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
Blockly.Blocks["jose_jg_delete_created_webhook_with_reason"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "delete created webhook with reason %1",
                "inputsInline": true,
                "tooltip": "Delete the created webhook.",
                "colour": "#4C97FF",
                "previousStatement": null,
                "nextStatement": null,
                "args0": [
                    {
                        "type": "input_value",
                        "name": "REASON",
                        "check": "String"
                    }
                ]
            }
        );
    }
}
Blockly.JavaScript["jose_jg_delete_created_webhook_with_reason"] = function (block) {
    const reason = Blockly.JavaScript.valueToCode(block, "REASON", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `webhook.delete(String(${reason}))
`;
    return code;
};
registerRestrictions("jose_jg_delete_created_webhook_with_reason", [
    {
        type: "hasparent",
        message: "RES_CREATE_WEBHOOK_PARENT",
        types: [
            "s4d_create_webhook_then",
            "jose_jg_create_webhook_in_channel_with_name_and_profile_picture_url_with_reason_then_do"
        ]
    }
]);
Blockly.Blocks["jose_jg_gained_delete_webhook_with_reason"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "delete webhook with reason %1",
                "inputsInline": true,
                "tooltip": "Delete the webhook.",
                "colour": "#135cc2",
                "previousStatement": null,
                "nextStatement": null,
                "args0": [
                    {
                        "type": "input_value",
                        "name": "REASON",
                        "check": "String"
                    }
                ]
            }
        );
    }
}
Blockly.JavaScript["jose_jg_gained_delete_webhook_with_reason"] = function (block) {
    const reason = Blockly.JavaScript.valueToCode(block, "REASON", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `gwebhook.delete(String(${reason}))
`;
    return code;
};
registerRestrictions("jose_jg_gained_delete_webhook_with_reason", [
    {
        type: "hasparent",
        message: "RES_GET_WEBHOOK_PARENT",
        types: [
            "s4d_get_webhook_then"
        ]
    }
]);
Blockly.Blocks["jose_jg_webhooks_delete_webhook_with_reason"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "delete webhook %1 with reason %2",
                "inputsInline": true,
                "tooltip": "Delete a webhook.",
                "colour": "#4C97FF",
                "previousStatement": null,
                "nextStatement": null,
                "args0": [
                    {
                        "type": "input_value",
                        "name": "WEBHOOK",
                        "check": "Webhook"
                    },
                    {
                        "type": "input_value",
                        "name": "REASON",
                        "check": "String"
                    }
                ]
            }
        );
    }
}
Blockly.JavaScript["jose_jg_webhooks_delete_webhook_with_reason"] = function (block) {
    const webhook = Blockly.JavaScript.valueToCode(block, "WEBHOOK", Blockly.JavaScript.ORDER_ATOMIC);
    const reason = Blockly.JavaScript.valueToCode(block, "REASON", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${webhook}.delete(String(${reason}))
`;
    return code;
};
Blockly.Blocks["jg_text_remake_paragraph_quotes"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "%1%2%3",
                "inputsInline": true,
                "tooltip": "A text input that allows multi-lines.",
                "colour": "%{BKY_TEXTS_HUE}",
                "output": ["String", "Multi-Line_Text"],
                "args0": [
                    {
                        "type": "field_image",
                        "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC",
                        "width": 12,
                        "height": 12,
                        "alt": '"',
                        "flipRtl": false
                    },
                    {
                        "type": "field_multilinetext",
                        "name": "TEXT"
                    },
                    {
                        "type": "field_image",
                        "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==",
                        "width": 12,
                        "height": 12,
                        "alt": '"',
                        "flipRtl": false
                    }
                ]
            }
        );
    }
}
Blockly.JavaScript["jg_text_remake_paragraph_quotes"] = function (block) {
    let text = block.getFieldValue("TEXT");
    text = String(text).replaceAll("\\", "\\\\")
    let multiline = "'"
    if (String(text).includes("\n") || String(text).includes("\r")) multiline = "`"
    if (multiline == "'") {
        text = String(text).replaceAll("'", "\\'")
    } else {
        text = String(text).replaceAll("`", "\\`")
    }
    if (multiline == "`") {
        text = String(text).replaceAll("${", "\\${")
    }
    const code = [`${multiline}${text}${multiline}`, Blockly.JavaScript.ORDER_ATOMIC];
    return code;
};
Blockly.Blocks["jg_text_remake_in_text_replace_with"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "in text %1 replace %2 with %3",
                "inputsInline": true,
                "tooltip": "Replace all occurences of some text with other text.",
                "colour": "%{BKY_TEXTS_HUE}",
                "output": "String",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "ORIGIN",
                        "check": "String"
                    },
                    {
                        "type": "input_value",
                        "name": "REPLACE",
                        "check": ["String", "RegEx"]
                    },
                    {
                        "type": "input_value",
                        "name": "WITH",
                        "check": "String"
                    }
                ]
            }
        );
    }
}
Blockly.JavaScript["jg_text_remake_in_text_replace_with"] = function (block) {
    const origin = Blockly.JavaScript.valueToCode(block, "ORIGIN", Blockly.JavaScript.ORDER_ATOMIC);
    const replace = Blockly.JavaScript.valueToCode(block, "REPLACE", Blockly.JavaScript.ORDER_ATOMIC);
    const replaced = Blockly.JavaScript.valueToCode(block, "WITH", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`String(${origin}).replaceAll(${replace}, String(${replaced}))`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
// is equal to and is the same type as
Blockly.Blocks["jg_logic_is_equal_to_and_is_the_same_type_as"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "%1 is %2 the same type as %3",
                "inputsInline": true,
                "tooltip": "Checks if something is equal to another value, and is also the same type of thing as that value.",
                "colour": "%{BKY_LOGIC_HUE}",
                "output": "Boolean",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "A",
                        "check": null
                    },
                    {
                        "type": "field_dropdown",
                        "name": "TYPE",
                        "options": [
                            [
                                "equal to and is",
                                '==='
                            ],
                            [
                                "not equal to or isn't",
                                '!=='
                            ]
                        ],
                    },
                    {
                        "type": "input_value",
                        "name": "B",
                        "check": null
                    }
                ]
            }
        );
    }
}
Blockly.JavaScript["jg_logic_is_equal_to_and_is_the_same_type_as"] = function (block) {
    const a = Blockly.JavaScript.valueToCode(block, "A", Blockly.JavaScript.ORDER_ATOMIC);
    const b = Blockly.JavaScript.valueToCode(block, "B", Blockly.JavaScript.ORDER_ATOMIC);
    const type = block.getFieldValue("TYPE")
    const code = [`${a} ${type} ${b}`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
Blockly.Blocks["jg_monaco_roles_change_role_to_be_mentionable_with_reason"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "change role %2 to %1 mentionable with reason %3",
                "args0": [
                    {
                        "type": "field_dropdown",
                        "name": "TYPE",
                        "options": [
                            [
                                "be",
                                "true"
                            ],
                            [
                                "not be",
                                "false"
                            ]
                        ]
                    },
                    {
                        "type": "input_value",
                        "name": "ROLE",
                        "check": "Role"
                    },
                    {
                        "type": "input_value",
                        "name": "REASON",
                        "check": "String"
                    }
                ],
                "inputsInline": true,
                "previousStatement": null,
                "nextStatement": null,
                "colour": "#4C97FF",
                "tooltip": "Set a role to be mentionable or not.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_monaco_roles_change_role_to_be_mentionable_with_reason"] = function (block) {
    const type = block.getFieldValue("TYPE");
    const role = Blockly.JavaScript.valueToCode(block, "ROLE", Blockly.JavaScript.ORDER_ATOMIC);
    let reason = Blockly.JavaScript.valueToCode(block, "REASON", Blockly.JavaScript.ORDER_ATOMIC);
    if (reason) {
        reason = ", " + reason
    }
    const code = `${role}.setMentionable(${type}${reason})
`
    return code;
};

Blockly.Blocks["jg_unused_any_color"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "ㅤ%1ㅤ%2ㅤㅤㅤㅤ",
                "colour": "#ff0000",
                "inputsInline": false,
                "previousStatement": null,
                "nextStatement": null,
                "args0": [
                    {
                        "type": "field_colour",
                        "name": "COLOR",
                        "colour": "#ff0000"
                    },
                    {
                        "type": "input_dummy"
                    }
                ]
            }
        );
    },
    onchange: function () {
        let color = this.getFieldValue("COLOR")
        this.setColour(color)
    },
    isHiden: true
}
Blockly.JavaScript["jg_unused_any_color"] = function () {
    return '';
};
Blockly.Blocks["jg_unused_any_color2"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "%1",
                "colour": "#ff0000",
                "inputsInline": false,
                "nextStatement": null,
                "args0": [
                    {
                        "type": "field_colour",
                        "name": "COLOR",
                        "colour": "#ff0000"
                    }
                ]
            }
        );
    },
    onchange: function () {
        let color = this.getFieldValue("COLOR")
        this.setColour(color)
    },
    isHiden: true
}
Blockly.JavaScript["jg_unused_any_color2"] = function () {
    return '';
};
Blockly.Blocks["jg_members_user_has_value"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "user %1 %2",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MEMBER",
                        "check": ["Member", "User"]
                    },
                    {
                        "type": "field_grid_dropdown",
                        "name": "TYPE",
                        "options": [
                            [
                                "has a banner?",
                                '.banner != null'
                            ],
                            [
                                "is a bot?",
                                '.bot'
                            ],
                            [
                                "is the bot?",
                                ' == s4d.client.user'
                            ],
                            [
                                "is a discord system?",
                                '.system'
                            ],
                            [
                                "has made a DM with the bot?",
                                '.dmChannel != null'
                            ],
                            [
                                "is missing information?",
                                '.partial'
                            ],
                            // flags
                            [
                                "is a verified bot?",
                                '.flags.has("VERIFIED_BOT")'
                            ],
                            [
                                "is a discord employee?",
                                '.flags.has("DISCORD_EMPLOYEE")'
                            ],
                            [
                                "is a partnered server owner?",
                                '.flags.has("PARTNERED_SERVER_OWNER")'
                            ],
                            [
                                "is a HypeSquad events member?",
                                '.flags.has("HYPESQUAD_EVENTS")'
                            ],
                            [
                                "is a HypeSquad Bravery member?",
                                '.flags.has("HOUSE_BRAVERY")'
                            ],
                            [
                                "is a HypeSquad Brilliance member?",
                                '.flags.has("HOUSE_BRILLIANCE")'
                            ],
                            [
                                "is a HypeSquad Balance member?",
                                '.flags.has("HOUSE_BALANCE")'
                            ],
                            [
                                "is a bug hunter of level 1?",
                                '.flags.has("BUGHUNTER_LEVEL_1")'
                            ],
                            [
                                "is a bug hunter of level 2?",
                                '.flags.has("BUGHUNTER_LEVEL_2")'
                            ],
                            [
                                "is an early supporter?",
                                '.flags.has("EARLY_SUPPORTER")'
                            ],
                            [
                                "is a team user?",
                                '.flags.has("TEAM_USER")'
                            ],
                            [
                                "is an early verified bot developer?",
                                '.flags.has("EARLY_VERIFIED_BOT_DEVELOPER")'
                            ],
                            [
                                "is a discord certified moderator?",
                                '.flags.has("DISCORD_CERTIFIED_MODERATOR")'
                            ],
                            [
                                "is a bot HTTP interaction?",
                                '.flags.has("BOT_HTTP_INTERACTIONS")'
                            ]
                        ],
                    }
                ],
                "colour": "#50a6c9",
                "output": "Boolean",
                "tooltip": "Check if the specified user has or is this property.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_members_user_has_value"] = function (block) {
    const member = Blockly.JavaScript.valueToCode(block, "MEMBER", Blockly.JavaScript.ORDER_ATOMIC);
    const property = block.getFieldValue("TYPE")
    const code = [`${member}${property}`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
Blockly.Blocks["jg_members_member_is_value"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "member %1 %2",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MEMBER",
                        "check": ["Member"]
                    },
                    {
                        "type": "field_dropdown",
                        "name": "TYPE",
                        "options": [
                            [
                                "is bannable by the bot?",
                                '.bannable'
                            ],
                            [
                                "is kickable by the bot?",
                                '.kickable'
                            ],
                            [
                                "is below the bot in roles and managable by the bot?",
                                '.manageable'
                            ],
                            [
                                "is moderatable by the bot?",
                                '.moderatable'
                            ],
                            [
                                "is missing information?",
                                '.partial'
                            ],
                            [
                                "hasn't passed the server's rules screen?",
                                '.pending'
                            ]
                        ],
                    }
                ],
                "colour": "#50a6c9",
                "output": "Boolean",
                "tooltip": "Check if the specified member has or is this property.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_members_member_is_value"] = function (block) {
    const member = Blockly.JavaScript.valueToCode(block, "MEMBER", Blockly.JavaScript.ORDER_ATOMIC).replaceAll(/member(?=\.user)\.user/gi, "member");
    const property = block.getFieldValue("TYPE")
    const code = [`${member}${property}`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
Blockly.Blocks["jg_members_user_accent_color"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "user %1 accent color",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MEMBER",
                        "check": ["Member", "User"]
                    }
                ],
                "colour": "#50a6c9",
                "output": "String",
                "tooltip": "The Hex color of a users accent color.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_members_user_accent_color"] = function (block) {
    const member = Blockly.JavaScript.valueToCode(block, "MEMBER", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`${member}.hexAccentColor`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
Blockly.Blocks["jg_members_user_exactly_equals_user"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "user %1 exactly equals user %2?",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MEMBER",
                        "check": ["Member", "User"]
                    },
                    {
                        "type": "input_value",
                        "name": "MEMBER2",
                        "check": ["Member", "User"]
                    }
                ],
                "colour": "#50a6c9",
                "output": "Boolean",
                "tooltip": "Check if a user is the exact same as another user.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_members_user_exactly_equals_user"] = function (block) {
    const member = Blockly.JavaScript.valueToCode(block, "MEMBER", Blockly.JavaScript.ORDER_ATOMIC);
    const member2 = Blockly.JavaScript.valueToCode(block, "MEMBER2", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`${member}.equals(${member2})`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
Blockly.Blocks["jg_members_member_has_nickname"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "member %1 has nickname?",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MEMBER",
                        "check": ["Member"]
                    }
                ],
                "colour": "#50a6c9",
                "output": "Boolean",
                "tooltip": "Check if a member has a nickname.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_members_member_has_nickname"] = function (block) {
    const member = Blockly.JavaScript.valueToCode(block, "MEMBER", Blockly.JavaScript.ORDER_ATOMIC).replaceAll(/member(?=\.user)\.user/gi, "member");
    const code = [`${member}.nickname != null`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
Blockly.Blocks["jg_members_member_s_nickname"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "member %1 nickname",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MEMBER",
                        "check": ["Member"]
                    }
                ],
                "colour": "#50a6c9",
                "output": "String",
                "tooltip": "The members nickname. Is also the member's username if the nickname is not found.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_members_member_s_nickname"] = function (block) {
    const member = Blockly.JavaScript.valueToCode(block, "MEMBER", Blockly.JavaScript.ORDER_ATOMIC).replaceAll(/member(?=\.user)\.user/gi, "member");
    const code = [`${member}.nickname == null ? ${member}.user.username : ${member}.nickname`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
Blockly.Blocks["jg_roles_get_all_member_roles_then_for_each_do"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "get all member %1 roles then for each %2 do %3",
                "inputsInline": true,
                "tooltip": "Run the blocks inside for each role the member has.",
                "colour": "#2EB66B",
                "previousStatement": null,
                "nextStatement": null,
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MEMBER",
                        "check": "Member"
                    },
                    {
                        "type": "input_dummy"
                    },
                    {
                        "type": "input_statement",
                        "name": "STATEMENTS"
                    }
                ]
            }
        );
    }
}
Blockly.JavaScript["jg_roles_get_all_member_roles_then_for_each_do"] = function (block) {
    const member = Blockly.JavaScript.valueToCode(block, "MEMBER", Blockly.JavaScript.ORDER_ATOMIC).replaceAll(/member(?=\.user)\.user/gi, "member");
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    const code = `${member}.roles.cache.forEach(async (member_role) => {
    ${statements}
})
`;
    return code;
};
Blockly.Blocks["jg_roles_get_all_member_roles_then_for_each_do_role"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "role",
                "args0": [],
                "colour": "#2EB66B",
                "output": "Role",
                "tooltip": "The current role in the member role loop.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_roles_get_all_member_roles_then_for_each_do_role"] = function () {
    const code = [`member_role`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
restrictToParent(
    ["jg_roles_get_all_member_roles_then_for_each_do"],
    "jg_roles_get_all_member_roles_then_for_each_do_role",
    'This block must be in a "get all member roles then for each do" block!'
)
Blockly.Blocks["jg_emoji_text_regex_list_of_custom_emojis_in_text"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "list of custom emojis in text %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "TEXT",
                        "check": "String"
                    }
                ],
                "colour": "#4C97FF",
                "output": ["List", "Array"],
                "tooltip": "A list of custom non-animated emojis in text.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_emoji_text_regex_list_of_custom_emojis_in_text"] = function (block) {
    const text = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`${text}.match(/(?<!\\\\)<:(?<=<:)[a-zA-Z0-9_-]*(?=:):[0-9]*>/gim)`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
Blockly.Blocks["jg_emoji_text_regex_list_of_animated_emojis_in_text"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "list of animated emojis in text %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "TEXT",
                        "check": "String"
                    }
                ],
                "colour": "#4C97FF",
                "output": ["List", "Array"],
                "tooltip": "A list of custom animated emojis in text.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_emoji_text_regex_list_of_animated_emojis_in_text"] = function (block) {
    const text = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`${text}.match(/(?<!\\\\)<a:(?<=<a:)[a-zA-Z0-9_-]*(?=:):[0-9]*>/gim)`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
Blockly.Blocks["jg_emoji_text_regex_list_of_normal_emojis_in_text"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "list of normal emojis in text %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "TEXT",
                        "check": "String"
                    }
                ],
                "colour": "#4C97FF",
                "output": ["List", "Array"],
                "tooltip": "A list of normal emojis in text, like the default thumbs up emoji.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_emoji_text_regex_list_of_normal_emojis_in_text"] = function (block) {
    const text = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`String(${text}).replaceAll(" ", "").match(/((\\u00a9|\\u00ae|[\\u2000-\\u3300]|\\ud83c[\\ud000-\\udfff]|\\ud83d[\\ud000-\\udfff]|\\ud83e[\\ud000-\\udfff]\\s?)+)/gm)`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
Blockly.Blocks["jg_text_regex_create_new_regex_of"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "create new RegEx of %1",
                "args0": [
                    {
                        "type": "field_input",
                        "name": "TEXT"
                    }
                ],
                "colour": "%{BKY_TEXTS_HUE}",
                "output": "RegEx",
                "tooltip": "RegEx is a regular expression that can be used to find text inside of text with a couple checks to make sure that text is exactly the way you want it. You can create RegEx on the \"Help\" button on the block. You'll need to paste in the slashes and the flags from the RegEx into the block.",
                "helpUrl": "https://regex101.com/"
            }
        );
    }
}
Blockly.JavaScript["jg_text_regex_create_new_regex_of"] = function (block) {
    let regex = block.getFieldValue("TEXT")
    try {
        let matches = String(regex).match(/(\/)[\S ]*(\/[a-z]{0,7})/gim)
        if (!(regex && String(regex) && String(regex).startsWith("/") && matches && matches.length == 1)) regex = ""
    } catch (err) {
        console.error("This RegEx check is not supported on this platform.", err)
    }
    const code = [`${regex}`, Blockly.JavaScript.ORDER_ATOMIC];
    return code;
};
Blockly.Blocks["jg_lists_regex_list_of_matches_from_regex_on_text"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "list of matches from RegEx %1 on text %2",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "REGEX",
                        "check": "RegEx"
                    },
                    {
                        "type": "input_value",
                        "name": "TEXT",
                        "check": "String"
                    }
                ],
                "inputsInline": true,
                "colour": "%{BKY_LISTS_HUE}",
                "output": ["List", "Array"],
                "tooltip": "RegEx is a regular expression that can be used to find text inside of text with a couple checks to make sure that text is exactly the way you want it. This block outputs a list of matches from the RegEx being used on the text.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_lists_regex_list_of_matches_from_regex_on_text"] = function (block) {
    const regex = Blockly.JavaScript.valueToCode(block, "REGEX", Blockly.JavaScript.ORDER_ATOMIC);
    const text = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`String(${text}).match(${regex})`, Blockly.JavaScript.ORDER_ATOMIC];
    return code;
};
Blockly.Blocks["jg_member_is_user_in_server"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "is user %1 in server %2?",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MEMBER",
                        "check": ["Member", "User"]
                    },
                    {
                        "type": "input_value",
                        "name": "SERVER",
                        "check": "Server"
                    }
                ],
                "colour": "#50a6c9",
                "output": "Boolean",
                "tooltip": "Check if the member is in the server.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_member_is_user_in_server"] = function (block) {
    const member = Blockly.JavaScript.valueToCode(block, "MEMBER", Blockly.JavaScript.ORDER_ATOMIC);
    const server = Blockly.JavaScript.valueToCode(block, "SERVER", Blockly.JavaScript.ORDER_ATOMIC);
    // i know this is probably not the best way of doing it but i couldnt think of anything else that wouldnt break the original way this block was used
    const code = [`await (() => { return new Promise((resolve, reject) => { ${server}.members.fetch(${member}.id).then(() => resolve(true)).catch(() => resolve(false)) } ) })()`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
Blockly.Blocks["jg_members_roles_fetch_with_id_from_server_then_do"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "fetch %1 with id %2 from server %3 then %4 do %5",
                "inputsInline": true,
                "tooltip": "Put a member or role from a server into the bot's memory, then run the blocks inside.",
                "colour": "#2EB66B",
                "previousStatement": null,
                "nextStatement": null,
                "args0": [
                    {
                        "type": "field_dropdown",
                        "name": "TYPE",
                        "options": [
                            [
                                "member",
                                'members'
                            ],
                            [
                                "role",
                                'roles'
                            ]
                        ],
                    },
                    {
                        "type": "input_value",
                        "name": "SERVER",
                        "check": "Server"
                    },
                    {
                        "type": "input_value",
                        "name": "ID",
                        "check": "String"
                    },
                    {
                        "type": "input_dummy"
                    },
                    {
                        "type": "input_statement",
                        "name": "STATEMENTS"
                    }
                ]
            }
        );
    }
}
Blockly.JavaScript["jg_members_roles_fetch_with_id_from_server_then_do"] = function (block) {
    const type = block.getFieldValue("TYPE")
    const id = Blockly.JavaScript.valueToCode(block, "ID", Blockly.JavaScript.ORDER_ATOMIC);
    const server = Blockly.JavaScript.valueToCode(block, "SERVER", Blockly.JavaScript.ORDER_ATOMIC);
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    const code = `${server}.${type}.fetch(String(${id})).then((fetched_${type}_from_server) => {
    ${statements}
})
`;
    return code;
};
Blockly.Blocks["jg_members_roles_fetch_with_id_from_server_then_do_fetched_item"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "fetched %1",
                "args0": [
                    {
                        "type": "field_dropdown",
                        "name": "TYPE",
                        "options": [
                            [
                                "member",
                                'members'
                            ],
                            [
                                "role",
                                'roles'
                            ]
                        ],
                    }
                ],
                "colour": "#2EB66B",
                "output": "Member",
                "tooltip": "The current role in the member role loop.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_members_roles_fetch_with_id_from_server_then_do_fetched_item"] = function (block) {
    const type = block.getFieldValue("TYPE")
    const code = [`fetched_${type}_from_server`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
restrictToParent(
    ["jg_members_roles_fetch_with_id_from_server_then_do"],
    "jg_members_roles_fetch_with_id_from_server_then_do_fetched_item",
    'Missing Restriction Text'
)
Blockly.Blocks["jg_s4d_other_run_code_inside_file"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "run code inside file %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "FILE",
                        "check": "String"
                    }
                ],
                "inputsInline": true,
                "previousStatement": null,
                "nextStatement": null,
                "colour": "#D14081",
                "tooltip": "Run JavaScript code inside a file in the bot's files.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_s4d_other_run_code_inside_file"] = function (block) {
    const file = Blockly.JavaScript.valueToCode(block, "FILE", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `require((String(${file}).startsWith("./") ? String(${file}) : "./" + String(${file})))
`
    return code;
};
Blockly.Blocks["jg_roles_fetch_all_roles_in_server_then_do"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "fetch all roles in server %1 then %2 do %3",
                "inputsInline": true,
                "tooltip": "Get every role in a server and put it into the bot's memory, then run the blocks inside.",
                "colour": "#2EB66B",
                "previousStatement": null,
                "nextStatement": null,
                "args0": [
                    {
                        "type": "input_value",
                        "name": "SERVER",
                        "check": "Server"
                    },
                    {
                        "type": "input_dummy"
                    },
                    {
                        "type": "input_statement",
                        "name": "STATEMENTS"
                    }
                ]
            }
        );
    }
}
Blockly.JavaScript["jg_roles_fetch_all_roles_in_server_then_do"] = function (block) {
    const server = Blockly.JavaScript.valueToCode(block, "SERVER", Blockly.JavaScript.ORDER_ATOMIC);
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    const code = `${server}.roles.fetch().then(async (s4d_roles_from_server_auydewgfiyewfh) => {
        ${statements}
    })
    `;
    return code;
};
Blockly.Blocks["jg_channels_wait_for_message_in_channel_to_meet_check_for_minutes_then_if_no_messages_pass"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "wait for message in channel %1 to meet check %2 for %3 minutes then %4 %5 if no messages pass %6 %7",
                "inputsInline": false,
                "tooltip": "Wait for a message in the specified channel to meet the requirement (ex: message author ID being equal to someone elses ID) for a certain amount of time, then run the blocks inside depending on if a message passed or if a message didn't pass.",
                "colour": "#4C97FF",
                "previousStatement": null,
                "nextStatement": null,
                "args0": [
                    {
                        "type": "input_value",
                        "name": "CHANNEL",
                        "check": "Channel"
                    },
                    {
                        "type": "input_value",
                        "name": "CHECK",
                        "check": "Boolean"
                    },
                    {
                        "type": "input_value",
                        "name": "TIME",
                        "check": "Number"
                    },
                    {
                        "type": "input_dummy"
                    },
                    {
                        "type": "input_statement",
                        "name": "STATEMENTS"
                    },
                    {
                        "type": "input_dummy"
                    },
                    {
                        "type": "input_statement",
                        "name": "STATEMENT2"
                    }
                ]
            }
        );
    }
}
Blockly.JavaScript["jg_channels_wait_for_message_in_channel_to_meet_check_for_minutes_then_if_no_messages_pass"] = function (block) {
    const channel = Blockly.JavaScript.valueToCode(block, "CHANNEL", Blockly.JavaScript.ORDER_ATOMIC);
    const filter = Blockly.JavaScript.valueToCode(block, "CHECK", Blockly.JavaScript.ORDER_ATOMIC);
    const time = Blockly.JavaScript.valueToCode(block, "TIME", Blockly.JavaScript.ORDER_ATOMIC);
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    const statement2 = Blockly.JavaScript.statementToCode(block, "STATEMENT2");
    const code = `${channel}.awaitMessages({
    filter: (s4dmessage) => ${filter},
    time: (${time} * 60 * 1000),
    max: 1 
}).then(async (S4DAPP_MESSAGES_RETURNED_FCOLLECTED) => {
    s4dmessage = S4DAPP_MESSAGES_RETURNED_FCOLLECTED.first()
    ${statements}
}).catch(async err => {
    ${statement2}
})
`;
    return code;
};
Blockly.Blocks["jg_joins_subleaves_leaving_member"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "leaving member",
                "args0": [],
                "colour": "#187795",
                "output": "Member",
                "tooltip": "The member that left the server.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_joins_subleaves_leaving_member"] = function () {
    const code = [`s4d.leavingMember.user`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
Blockly.Blocks["jg_messages_value_dropdown_content_of_message"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "%1 of message %2",
                "args0": [
                    {
                        "type": "field_grid_dropdown",
                        "name": "TYPE",
                        "options": [
                            [
                                "content",
                                'content'
                            ],
                            [
                                "ID",
                                'id'
                            ],
                            [
                                "timestamp",
                                'createdTimestamp'
                            ],
                            [
                                "author",
                                'author'
                            ],
                            [
                                "member",
                                'member.user'
                            ],
                            [
                                "mentioned member",
                                'mentions.members.first().user'
                            ],
                            [
                                "mentioned channel",
                                'mentions.channels.first()'
                            ],
                            [
                                "mentioned role",
                                'mentions.roles.first()'
                            ],
                            [
                                "channel",
                                'channel'
                            ],
                            [
                                "channel category",
                                'channel.parent'
                            ],
                            [
                                "server",
                                'guild'
                            ]
                        ],
                    },
                    {
                        "type": "input_value",
                        "name": "MSG",
                        "check": "Message"
                    }
                ],
                "colour": "#4C97FF",
                "output": null,
                "tooltip": "Get a property from a message.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_messages_value_dropdown_content_of_message"] = function (block) {
    const property = block.getFieldValue("TYPE")
    const message = Blockly.JavaScript.valueToCode(block, "MSG", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`${message}.${property}`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
Blockly.Blocks["jg_edited_old_new_message"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "%1 message",
                "args0": [
                    {
                        "type": "field_dropdown",
                        "name": "TYPE",
                        "options": [
                            [
                                "new",
                                'new'
                            ],
                            [
                                "original",
                                'old'
                            ]
                        ],
                    }
                ],
                "colour": "#a55b80",
                "output": "Message",
                "tooltip": "The edited message in either it's original state or new state.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_edited_old_new_message"] = function (block) {
    const state = block.getFieldValue("TYPE")
    const code = [`${state}Message`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
// a

Blockly.Blocks["jg_monaco_members_member_is_timed_out"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "member %1 is timed out?",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MEMBER",
                        "check": "Member"
                    }
                ],
                "colour": "#50a6c9",
                "output": "Boolean",
                "tooltip": "Checks if a Member is timed out.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_monaco_members_member_is_timed_out"] = function (block) {
    const member = Blockly.JavaScript.valueToCode(block, "MEMBER", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`${member}.isCommunicationDisabled()`, Blockly.JavaScript.ORDER_NONE];
    return code;
};

Blockly.Blocks["jg_s4d_other_throw_custom_error"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "throw custom error %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "ERROR",
                        "check": null
                    }
                ],
                "inputsInline": true,
                "previousStatement": null,
                "nextStatement": null,
                "colour": "#D14081",
                "tooltip": "Cause a custom error to occur.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_s4d_other_throw_custom_error"] = function (block) {
    const err = Blockly.JavaScript.valueToCode(block, "ERROR", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `throw ${err ? err : null}
`
    return code;
};

// hosting websites YAYAYAY

Blockly.Blocks["jg_express_website_on_page_on_request_type_do"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "on page %1 on request type %2 %3 do %4",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "PAGE",
                        "check": "String"
                    },
                    {
                        "type": "field_dropdown",
                        "name": "TYPE",
                        "options": [
                            [
                                "GET",
                                'get'
                            ],
                            [
                                "POST",
                                'post'
                            ],
                            [
                                "PUT",
                                'put'
                            ],
                            [
                                "DELETE",
                                "delete"
                            ],
                            [
                                "All",
                                'all'
                            ]
                        ],
                    },
                    {
                        "type": "input_dummy"
                    },
                    {
                        "type": "input_statement",
                        "name": "STATEMENTS"
                    }
                ],
                "colour": "#4c8eff",
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "When this page is entered using this request type, the blocks inside will run.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_express_website_on_page_on_request_type_do"] = function (block) {
    const page = Blockly.JavaScript.valueToCode(block, "PAGE", Blockly.JavaScript.ORDER_ATOMIC);
    const type = block.getFieldValue("TYPE")
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    const code = `S4D_WEBSITECREATION_EXPRESS_app.${type}(${page}, async function(req, res) {
  ${statements}
})
`;
    return code;
};
restrictToParent(
    ["jg_express_start_website_then_using_port"],
    "jg_express_website_on_page_on_request_type_do",
    'This block must be in a "start website then" block!'
)
Blockly.Blocks["jg_express_website_on_invalid_request_do"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "on invalid request %1 do %2",
                "args0": [
                    {
                        "type": "input_dummy"
                    },
                    {
                        "type": "input_statement",
                        "name": "STATEMENTS"
                    }
                ],
                "colour": "#4c8eff",
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "When a request fails, the blocks inside will run.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_express_website_on_invalid_request_do"] = function (block) {
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    const code = `S4D_WEBSITECREATION_EXPRESS_app.use(function(req, res) {
  ${statements}
})
`;
    return code;
};
restrictToParent(
    ["jg_express_start_website_then_using_port"],
    "jg_express_website_on_invalid_request_do",
    'This block must be in a "start website then" block!'
)
Blockly.Blocks["jg_express_website_respond_with_text"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "respond with text %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "TEXT",
                        "check": "String"
                    }
                ],
                "colour": "#4c8eff",
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "Sends back text to the page.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_express_website_respond_with_text"] = function (block) {
    const text = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `res.send(String(${text}))
`;
    return code;
};
restrictToParent(
    ["jg_express_website_on_page_on_request_type_do", "jg_express_website_on_invalid_request_do"],
    "jg_express_website_respond_with_text",
    'This block must be in a "on page on request type do" block!'
)
Blockly.Blocks["jg_express_website_respond_with_file"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "respond with file %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "TEXT",
                        "check": "String"
                    }
                ],
                "colour": "#4c8eff",
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "Sends back the contents of a certain file to the page.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_express_website_respond_with_file"] = function (block) {
    const text = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `res.sendFile(S4D_WEBSITECREATION_path.join(__dirname, String(${text})))
`;
    return code;
};
restrictToParent(
    ["jg_express_website_on_page_on_request_type_do", "jg_express_website_on_invalid_request_do"],
    "jg_express_website_respond_with_file",
    'This block must be in a "on page on request type do" block!'
)
Blockly.Blocks["jg_express_website_respond_with_object"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "respond with object %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "OBJECT",
                        "check": "Object"
                    }
                ],
                "colour": "#4c8eff",
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "Sends back an object to the page.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_express_website_respond_with_object"] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, "OBJECT", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `res.json(${object})
`;
    return code;
};
restrictToParent(
    ["jg_express_website_on_page_on_request_type_do", "jg_express_website_on_invalid_request_do"],
    "jg_express_website_respond_with_object",
    'This block must be in a "on page on request type do" block!'
)
Blockly.Blocks["jg_express_website_set_response_status_code_to"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "set response status code to %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "STATUS",
                        "check": "Number"
                    }
                ],
                "colour": "#4c8eff",
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "Sets the page's status code to the specified number. You can find a status code reference by Right Clicking on this block and clicking Help.",
                "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"
            }
        );
    }
}
Blockly.JavaScript["jg_express_website_set_response_status_code_to"] = function (block) {
    const status = Blockly.JavaScript.valueToCode(block, "STATUS", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `res.status(Number(${status}))
`;
    return code;
};
restrictToParent(
    ["jg_express_website_on_page_on_request_type_do", "jg_express_website_on_invalid_request_do"],
    "jg_express_website_set_response_status_code_to",
    'This block must be in a "on page on request type do" block!'
)
Blockly.Blocks["jg_express_website_set_content_type_to"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "set content type to %1",
                "args0": [
                    {
                        "type": "field_dropdown",
                        "name": "TYPE",
                        "options": [
                            ["application/javascript", "application/javascript"],
                            ["application/ogg", "application/ogg"],
                            ["application/pdf", "application/pdf"],
                            ["application/json", "application/json"],
                            ["application/ld+json", "application/ld+json"],
                            ["application/xml", "application/xml"],
                            ["application/zip", "application/zip"],
                            ["audio/mpeg", "audio/mpeg"],
                            ["image/gif", "image/gif"],
                            ["image/jpeg", "image/jpeg"],
                            ["image/png", "image/png"],
                            ["image/tiff", "image/tiff"],
                            ["image/x-icon", "image/x-icon"],
                            ["image/svg+xml", "image/svg+xml"],
                            ["text/css", "text/css"],
                            ["text/csv", "text/csv"],
                            ["text/html", "text/html"],
                            ["text/plain", "text/plain"],
                            ["text/xml", "text/xml"],
                            ["video/mpeg", "video/mpeg"],
                            ["video/mp4", "video/mp4"],
                            ["video/x-ms-wmv", "video/x-ms-wmv"],
                            ["video/x-msvideo", "video/x-msvideo"],
                            ["video/x-flv", "video/x-flv"],
                            ["video/webm", "video/webm"]
                        ]
                    }
                ],
                "colour": "#4c8eff",
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "Sets the page's content type to the specified one.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_express_website_set_content_type_to"] = function (block) {
    const type = block.getFieldValue("TYPE")
    const code = `res.header("Content-Type", '${type}')
`;
    return code;
};
restrictToParent(
    ["jg_express_website_on_page_on_request_type_do", "jg_express_website_on_invalid_request_do"],
    "jg_express_website_set_content_type_to",
    'This block must be in a "on page on request type do" block!'
)
Blockly.Blocks["jg_express_website_query_item_parameter"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "%1 %2",
                "args0": [
                    {
                        "type": "field_dropdown",
                        "name": "TYPE",
                        "options": [
                            ["query item", "query"],
                            ["parameter", "params"]
                        ]
                    },
                    {
                        "type": "input_value",
                        "name": "ITEM",
                        "check": "String"
                    }
                ],
                "colour": "#4c8eff",
                "output": "String",
                "tooltip": "Gets a certain item from the URL's query items or parameters. (ex: ?item1=yes&item2=no) (ex: /:item)",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_express_website_query_item_parameter"] = function (block) {
    const type = block.getFieldValue("TYPE")
    const item = Blockly.JavaScript.valueToCode(block, "ITEM", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`req.${type}[String(${item})]`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
restrictToParent(
    ["jg_express_website_on_page_on_request_type_do", "jg_express_website_on_invalid_request_do"],
    "jg_express_website_query_item_parameter",
    'This block must be in a "on page on request type do" block!'
)
Blockly.Blocks["jg_express_website_post_request_item"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "post request item %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "ITEM",
                        "check": "String"
                    }
                ],
                "colour": "#4c8eff",
                "output": null,
                "tooltip": "Gets a certain item from a post request, like the request's body information.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_express_website_post_request_item"] = function (block) {
    const item = Blockly.JavaScript.valueToCode(block, "ITEM", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`req[String(${item})]`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
restrictToParent(
    ["jg_express_website_on_page_on_request_type_do", "jg_express_website_on_invalid_request_do"],
    "jg_express_website_post_request_item",
    'This block must be in a "on page on request type do" block!'
)
Blockly.Blocks["jg_express_website_set_header_to"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "set header %1 to %2",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "HEADER",
                        "check": "String"
                    },
                    {
                        "type": "input_value",
                        "name": "VALUE",
                        "check": null
                    }
                ],
                "colour": "#4c8eff",
                "inputsInline": true,
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "Sets a header on the page to a certain value.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_express_website_set_header_to"] = function (block) {
    const header = Blockly.JavaScript.valueToCode(block, "HEADER", Blockly.JavaScript.ORDER_ATOMIC);
    const value = Blockly.JavaScript.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `res.header(${header}, ${value})
`;
    return code;
};
restrictToParent(
    ["jg_express_website_on_page_on_request_type_do", "jg_express_website_on_invalid_request_do"],
    "jg_express_website_set_header_to",
    'This block must be in a "on page on request type do" block!'
)
blocklyModule.createMutatorBlock("checkbox", {
    blockName: "jg_testing_urmother_epic_block_test_deez_mf_nuts", // required
    blockData: { // required
        "message0": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        "args0": [],
        "colour": "#7b2d9b",
        "previousStatement": null,
        "nextStatement": null,
        "tooltip": "your mother you tyour hyoyooyoymuyj89898989898989898989898989898989898989",
        "helpUrl": ""
    },
    menuTooltip: "urm om", // optional
    menuUsesBlockColor: true, // optional
    alignLeft: true, // optional
    // all after here are requried
    fields: ["a", "b", "c"],
    types: ["String", "Boolean", "Colour"],
    names: ["text", "question", "color"]
}, function () { // export code function
    const code = `abc cabbcebwf 8y432900[2]3rf2\\ew`
    return code
})
Blockly.Blocks["jg_testing_epic_menu_api_test_pooop_lolo_fard"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "Menu API Test %1",
                "args0": [
                    {
                        "type": "field_checkbox",
                        "name": "A"
                    }
                ],
                "colour": "#abc87d"
            }
        );
        this.canLoadMenu = true
    },
    onchange: function () {
        const bool = this.getFieldValue("A") == "TRUE"
        if (bool && this.canLoadMenu) {
            this.canLoadMenu = false
            const menu = blocklyModule.menus.createMenu({
                width: 640, // required, sets the window's width
                height: 360, // required, sets the window's height (not including top bar)
                title: "Test Window", // not required, sets the window's title
                animateCloseButton: true, // not required, enables or disables the window going offscreen on close button click
                // zindex: number will set the z-index style attribute for the menu (defaults at 10 million)
                // lerp: number will set the interpolation amount when moving the window
                // canclose: false will remove the close button
                // canminimize: false will remove the minimize button
            })
            menu.onclosed = () => { // fired when menu.close() is fired
                this.setColour(Math.round(Math.random() * 360))
            }
            const header = document.createElement("h1")
            header.innerHTML = "Menu API Test"
            menu.content.append(header)
            const p = document.createElement("p")
            p.innerHTML = "Menus are made using the blocklyModule function. Check this block's code for the code example shown here."
            menu.content.append(p)
            const input = document.createElement("input")
            input.value = "HTML Inputs"
            menu.content.append(input)
            const button = menu.createDecoratedButton()
            button.innerHTML = "Decorated Buttons"
            menu.content.append(button)
            const button2 = document.createElement("button")
            button2.innerHTML = "Default Buttons"
            menu.content.append(button2)
        } else if (!bool) {
            this.canLoadMenu = true
        }
    },
    isHiden: true
}
Blockly.JavaScript["jg_testing_epic_menu_api_test_pooop_lolo_fard"] = function () { return '' };

Blockly.Blocks["jg_tests_u98ewhg87fuinweo_googogjoooj_dynamic_mutator_time_mf"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "poop farda a a wa w %1 %2",
                "args0": [
                    {
                        "type": "field_checkbox",
                        "name": "A"
                    },
                    {
                        "type": "field_checkbox",
                        "name": "B"
                    }
                ]
            }
        )
    },
    onchange: function () {
        let ch1 = false
        let ch2 = false
        let ch3 = false
        if (this.getFieldValue("A") == "TRUE") {
            ch1 = true
            this.getField("A").setValue(false)
        }
        if (this.getFieldValue("B") == "TRUE") {
            ch2 = true
            this.getField("B").setValue(false)
        }
        // if (this.getFieldValue("C") == "TRUE") {
        //     ch3 = true
        //     this.getField("C").setValue(false)
        // }
        if (ch1) {
            blocklyModule.setMutatorOnBlock(this, "checkbox", {
                menuId: 1000,
                menuTooltip: "a1", // optional
                alignLeft: true, // optional
                fields: ["a", "b", "c"],
                types: ["String", "Boolean", "Colour"],
                names: ["text", "question", "color"]
            })
        }
        if (ch2) {
            blocklyModule.setMutatorOnBlock(this, "checkbox", {
                menuId: 1001,
                menuTooltip: "a2", // optional
                alignLeft: true, // optional
                fields: ["a", "b", "c"],
                types: ["String", "Boolean", "Colour"],
                names: ["text2", "question2", "color2"]
            })
        }
        if (ch3) {
            blocklyModule.setMutatorOnBlock(this, "builder", {
                menuId: 1001,
                toolbox: ['jg_express_website_set_header_to', 'jg_express_website_set_content_type_to'] // array of block IDs in the toolbox
            })
        }
    },
    isHiden: true
}
Blockly.JavaScript["jg_tests_u98ewhg87fuinweo_googogjoooj_dynamic_mutator_time_mf"] = function () {
    return ''
};

// jblock testing

JBlock.createBlock({
    id: "jg_tests_hfi87ewiugkjbo83q2yfoheiefop432ug_gorpjgrejgo_dietznut_jblock_api_test_mapoapoowip",
    text: "epic radical test [input_one] and then [input_two]",
    color: "#ac9f76",
    tooltip: "ttrolol",
    output: JBlock.OutputType.TEXT,
    hidden: true,
    inputs: {
        input_one: { type: "input_value", check: JBlock.OutputType.BOOL },
        input_two: { type: "input_value", check: JBlock.OutputType.LIST }
    },
    export: (_, args) => {
        return `trolol ${args.input_one}\namogu ${args.input_two}`
    }
})

//
//
//
//
//

// Jimp Update 2

//
//
//
//
//

function ezBlock(name, json, jsCallback) {
    Blockly.Blocks[name] = {
        init: function () {
            this.jsonInit(json)
        }
    }
    Blockly.JavaScript[name] = jsCallback
}

const JimpBlockColor = "#9951f0"

ezBlock("jg_jimp_update2rd_createNewImage", {
    "message0": "create jimp image with url/buffer/file %1 then %2 if image cannot be used %3 do %4",
    "args0": [
        {
            "type": "input_value",
            "name": "FILE",
            "check": ["String", "Buffer", "buffer"]
        },
        {
            "type": "input_statement",
            "name": "THEN"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "ERROR"
        }
    ],
    "colour": JimpBlockColor,
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": `Creates a new "Jimp" type image using the provided buffer, url to an image, or file containing an image. When created, the first statements will run. If the image cannot be used or another error occurs, the second statements will run.`
}, (block) => {
    const file = Blockly.JavaScript.valueToCode(block, "FILE", Blockly.JavaScript.ORDER_ATOMIC)
    const main_Statements = Blockly.JavaScript.statementToCode(block, "THEN")
    const errorStatements = Blockly.JavaScript.statementToCode(block, "ERROR")
    const code = `jimp.read(${file}).then(async S4D_APP_JIMP__JIMPIMAGE_CREATED_821926501243i => {
    ${main_Statements}
}).catch(async err => {
    ${errorStatements}
})
`
    return code
})
ezBlock("jg_jimp_update2rd_created_image", {
    "message0": "created jimp image",
    "args0": [],
    "colour": JimpBlockColor,
    "output": "JimpImage",
    "tooltip": `Creates a new "Jimp" type image using the provided buffer, url to an image, or file containing an image. When created, the first statements will run. If the image cannot be used or another error occurs, the second statements will run.`
}, () => {
    const code = `S4D_APP_JIMP__JIMPIMAGE_CREATED_821926501243i`
    return [code, Blockly.JavaScript.ORDER_NONE]
})
restrictToParent(
    ["jg_jimp_update2rd_createNewImage"],
    "jg_jimp_update2rd_created_image",
    `This block can only be used in "create jimp image" blocks!`
)
//
ezBlock("jg_jimp_update2rd_saveImage", {
    "message0": "save jimp image %1 as %2",
    "args0": [
        {
            "type": "input_value",
            "name": "IMAGE",
            "check": ["JimpImage"]
        },
        {
            "type": "input_value",
            "name": "FILE",
            "check": ["String"]
        }
    ],
    "colour": JimpBlockColor,
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": `Saves the specified image as the file name.`
}, (block) => {
    const image = Blockly.JavaScript.valueToCode(block, "IMAGE", Blockly.JavaScript.ORDER_ATOMIC)
    const name = Blockly.JavaScript.valueToCode(block, "FILE", Blockly.JavaScript.ORDER_ATOMIC)
    const code = `await ${image}.writeAsync(String(${name}))
`
    return code
})