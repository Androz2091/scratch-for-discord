import Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_member_has_permission";

const blockData = {
    "message0": "%{BKY_MEMBER_HAS_PERMISSION}",
    "args0": [
        {
            "type": "input_value",
            "name": "MEMBER",
            "check": "Member"
        },
        {
            "type": "field_dropdown",
            "name": "PERMISSION",
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
        }
    ],
    "colour": "#5B80A5",
    "tooltip": "",
    "output": "Boolean",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const member = Blockly.JavaScript.valueToCode(block, "MEMBER", Blockly.JavaScript.ORDER_ATOMIC);
    const permission = block.getFieldValue("PERMISSION");
    const code = [ `${member}.hasPermission('${permission}')`, Blockly.JavaScript.ORDER_FUNCTION_CALL ];
    return code;
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_MISSING_MEMBER_HAS_PERMISSION",
        types: [
            "MEMBER"
        ]
    }
]);
