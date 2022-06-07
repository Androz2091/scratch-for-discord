import Blockly from "blockly/core";
import { registerRestrictions } from "../../restrictions";
import '@blockly/field-grid-dropdown';
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
                                'mentions.users.size > 0'
                            ],
                            [
                                "mentions roles?",
                                'mentions.roles.size > 0'
                            ],
                            [
                                "mentions channels?",
                                'mentions.channels.size > 0'
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
                                'embeds.length > 0'
                            ],
                            [
                                "has buttons or menus?",
                                'components.length > 0'
                            ],
                            [
                                "has attachments?",
                                'attachments.size > 0'
                            ],
                            [
                                "has stickers?",
                                'stickers.size > 0'
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
    const property = block.getFieldValue("TYPE")
    const code = [`${message}.${property}`, Blockly.JavaScript.ORDER_NONE];
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
    const code = `${channel}.messages.fetch({ limit: ${amount} }).then((last_messages_in_channel) => {
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
    const code = [`${msg}.attachments.at(${index})`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
Blockly.Blocks["jg_attachment_get_attachment_property"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "get property %2 from attachment %1",
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
    const code = [`${msg}.mentions.${type}.at(${index})`, Blockly.JavaScript.ORDER_NONE];
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
    var usableA, usableB;
    if (!(users === null)) {
        usableA = `users: ${users},`
    }
    if (!(roles === null)) {
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
            "s4d_on_message"
        ]
    }
]);
