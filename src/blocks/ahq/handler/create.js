import * as Blockly from "blockly/core";

const blockName = "create_ahq_handler";


const blockData = {
    "type": "block_type",
    "message0": "Create command handler %1 Prefix %2 %3 OwnerId %4 %5 Owner Only Message %6 %7 Set NSFW channel only message %8 %9 Set moderation permission %10 %11 Set not mod message %12",
    "args0": [
        {
            "type": "input_space"
        },
        {
            "type": "input_value",
            "name": "TOKEN",
            "check": "String"
        },
        {
            "type": "input_space"
        },
        {
            "type": "input_value",
            "name": "ownerId",
            "check": "String"
        },
        {
            "type": "input_space"
        },
        {
            "type": "input_value",
            "name": "notowner",
            "check": "String"
        },
        {
            "type": "input_space"
        },
        {
            "type": "input_value",
            "name": "ahq",
            "check": "String"
        },
        {
            "type": "input_space"
        },
        {
            "type": "field_dropdown",
            "name": "perms",
            "options": [
                [
                    "%{BKY_PERM_CREATE_INSTANT_INVITE}",
                    "CREATE_INSTANT_INVITE"
                ],
                [
                    "%{BKY_PERM_KICK_MEMBERS}",
                    "KICK_MEMBERS"
                ],
                [
                    "%{BKY_PERM_BAN_MEMBERS}",
                    "BAN_MEMBERS"
                ],
                [
                    "%{BKY_PERM_ADMINISTRATOR}",
                    "ADMINISTRATOR"
                ],
                [
                    "%{BKY_PERM_MANAGE_CHANNELS}",
                    "MANAGE_CHANNELS"
                ],
                [
                    "%{BKY_PERM_MANAGE_GUILD}",
                    "MANAGE_GUILD"
                ],
                [
                    "%{BKY_PERM_ADD_REACTIONS}",
                    "ADD_REACTIONS"
                ],
                [
                    "%{BKY_PERM_VIEW_AUDIT_LOG}",
                    "VIEW_AUDIT_LOG"
                ],
                [
                    "%{BKY_PERM_PRIORITY_SPEAKER}",
                    "PRIORITY_SPEAKER"
                ],
                [
                    "%{BKY_PERM_VIEW_CHANNEL}",
                    "VIEW_CHANNEL"
                ],
                [
                    "%{BKY_PERM_READ_MESSAGES}",
                    "READ_MESSAGES"
                ],
                [
                    "%{BKY_PERM_SEND_MESSAGES}",
                    "SEND_MESSAGES"
                ],
                [
                    "%{BKY_PERM_SEND_TTS_MESSAGES}",
                    "SEND_TTS_MESSAGES"
                ],
                [
                    "%{BKY_PERM_MANAGE_MESSAGES}",
                    "MANAGE_MESSAGES"
                ],
                [
                    "%{BKY_PERM_EMBED_LINKS}",
                    "EMBED_LINKS"
                ],
                [
                    "%{BKY_PERM_ATTACH_FILES}",
                    "ATTACH_FILES"
                ],
                [
                    "%{BKY_PERM_READ_MESSAGE_HISTORY}",
                    "READ_MESSAGE_HISTORY"
                ],
                [
                    "%{BKY_PERM_MENTION_EVERYONE}",
                    "MENTION_EVERYONE"
                ],
                [
                    "%{BKY_PERM_EXTERNAL_EMOJIS}",
                    "EXTERNAL_EMOJIS"
                ],
                [
                    "%{BKY_PERM_USE_EXTERNAL_EMOJIS}",
                    "USE_EXTERNAL_EMOJIS"
                ],
                [
                    "%{BKY_PERM_CONNECT}",
                    "CONNECT"
                ],
                [
                    "%{BKY_PERM_SPEAK}",
                    "SPEAK"
                ],
                [
                    "%{BKY_PERM_MUTE_MEMBERS}",
                    "MUTE_MEMBERS"
                ],
                [
                    "%{BKY_PERM_DEAFEN_MEMBERS}",
                    "DEAFEN_MEMBERS"
                ],
                [
                    "%{BKY_PERM_MOVE_MEMBERS}",
                    "MOVE_MEMBERS"
                ],
                [
                    "%{BKY_PERM_USE_VAD}",
                    "USE_VAD"
                ],
                [
                    "%{BKY_PERM_CHANGE_NICKNAME}",
                    "CHANGE_NICKNAME"
                ],
                [
                    "%{BKY_PERM_MANAGE_NICKNAMES}",
                    "MANAGE_NICKNAMES"
                ],
                [
                    "%{BKY_PERM_MANAGE_ROLES}",
                    "MANAGE_ROLES"
                ],
                [
                    "%{BKY_PERM_MANAGE_WEBHOOKS}",
                    "MANAGE_WEBHOOKS"
                ],
                [
                    "%{BKY_PERM_MANAGE_EMOJIS}",
                    "MANAGE_EMOJIS"
                ]
            ]
        },
        {
            "type": "input_space"
        },
        {
            "type": "input_value",
            "name": "notperms",
            "check": "String"
        },
    ],
    "colour": "#3333ff",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const value = Blockly.JavaScript.valueToCode(block, "TOKEN", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `const ahqhandler = {
        "prefix": ${value},
        "owner": ${(Blockly.JavaScript.valueToCode(block, "ownerId", Blockly.JavaScript.ORDER_ATOMIC))},
        "not-owner": ${Blockly.JavaScript.valueToCode(block, "notowner", Blockly.JavaScript.ORDER_ATOMIC)},
        "nsfw": ${Blockly.JavaScript.valueToCode(block, "ahq", Blockly.JavaScript.ORDER_ATOMIC)},
        "perms-mod": \`${block.getFieldValue("perms")}\`,
        "not-perms": ${Blockly.JavaScript.valueToCode(block, "notperms", Blockly.JavaScript.ORDER_ATOMIC)}
    }`;
    return code;
};
