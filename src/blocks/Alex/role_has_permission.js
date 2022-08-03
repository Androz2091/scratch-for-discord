import Blockly from "blockly/core";

const blockName = "role_has_permission";

const blockData = {
    "message0": "Role %1 has permission %2",
    "args0": [
        {
            "type": "input_value",
            "name": "role",
            "check": "Role"
        },
        {
            "type": "field_dropdown",
            "name": "perm",
            "options": [
                ["CREATE_INSTANT_INVITE",
                    "CREATE_INSTANT_INVITE"],
                ["KICK_MEMBERS",
                    "KICK_MEMBERS"],
                ["BAN_MEMBERS",
                    "BAN_MEMBERS"],
                ["ADMINISTRATOR",
                    "ADMINISTRATOR"],
                ["MANAGE_CHANNELS",
                    "MANAGE_CHANNELS"],
                ["MANAGE_GUILD",
                    "MANAGE_GUILD"],
                ["ADD_REACTIONS",
                    "ADD_REACTIONS"],
                ["VIEW_AUDIT_LOG",
                    "VIEW_AUDIT_LOG"],
                ["PRIORITY_SPEAKER",
                    "PRIORITY_SPEAKER"],
                ["STREAM",
                    "STREAM"],
                ["VIEW_CHANNEL",
                    "VIEW_CHANNEL"],
                ["SEND_MESSAGES",
                    "SEND_MESSAGES"],
                ["SEND_TTS_MESSAGES",
                    "SEND_TTS_MESSAGES"],
                ["MANAGE_MESSAGES",
                    "MANAGE_MESSAGES"],
                ["EMBED_LINKS",
                    "EMBED_LINKS"],
                ["ATTACH_FILES",
                    "ATTACH_FILES"],
                ["READ_MESSAGE_HISTORY",
                    "READ_MESSAGE_HISTORY"],
                ["MENTION_EVERYONE",
                    "MENTION_EVERYONE"],
                ["USE_EXTERNAL_EMOJIS",
                    "USE_EXTERNAL_EMOJIS"],
                ["CONNECT",
                    "CONNECT"],
                ["SPEAK",
                    "SPEAK"],
                ["MUTE_MEMBERS",
                    "MUTE_MEMBERS"],
                ["DEAFEN_MEMBERS",
                    "DEAFEN_MEMBERS"],
                ["MOVE_MEMBERS",
                    "MOVE_MEMBERS"],
                ["USE_VAD",
                    "USE_VAD"],
                ["CHANGE_NICKNAME",
                    "CHANGE_NICKNAME"],
                ["MANAGE_NICKNAMES",
                    "MANAGE_NICKNAMES"],
                ["MANAGE_ROLES",
                    "MANAGE_ROLES"],
                ["MANAGE_WEBHOOKS",
                    "MANAGE_WEBHOOKS"],
                ["MANAGE_EMOJIS_AND_STICKERS",
                    "MANAGE_EMOJIS_AND_STICKERS"],
                ["USE_APPLICATION_COMMANDS",
                    "USE_APPLICATION_COMMANDS"],
                ["REQUEST_TO_SPEAK",
                    "REQUEST_TO_SPEAK"],
                ["MANAGE_EVENTS",
                    "MANAGE_EVENTS"],
                ["MANAGE_THREADS",
                    "MANAGE_THREADS"],
                ["USE_PUBLIC_THREADS",
                    "USE_PUBLIC_THREADS"],
                ["CREATE_PUBLIC_THREADS",
                    "CREATE_PUBLIC_THREADS"],
                ["USE_PRIVATE_THREADS",
                    "USE_PRIVATE_THREADS"],
                ["CREATE_PRIVATE_THREADS",
                    "CREATE_PRIVATE_THREADS"],
                ["USE_EXTERNAL_STICKERS",
                    "USE_EXTERNAL_STICKERS"],
                ["SEND_MESSAGES_IN_THREADS",
                    "SEND_MESSAGES_IN_THREADS"],
                ["START_EMBEDDED_ACTIVITIES",
                    "START_EMBEDDED_ACTIVITIES"],
                ["MODERATE_MEMBERS",
                    "MODERATE_MEMBERS"],

            ]
        },
    ],
    "colour": "#4C97FF",
    "tooltip": "Checks if a role has a certain permission.",
    "helpUrl": "",
    "output": "Boolean"
}

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const role = Blockly.JavaScript.valueToCode(block, "role", Blockly.JavaScript.ORDER_ATOMIC);
    const perm = block.getFieldValue("perm");

    const code = `${role}.permissions.has('${perm}')`;
    return code;
};