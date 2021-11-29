import * as Blockly from "blockly";


const blockName = "h_permission";

const blockData = {
    "message0": "permission - %1",
    "args0": [
        {
                "type": "field_dropdown",
                "name": "INFO",
                "options": [
                    ["create instant invite", "CREATE_INSTANT_INVITE"],
                    ["kick members", "KICK_MEMBERS"],
                    ["ban members", "BAN_MEMBERS"],
                    ["administrator", "ADMINISTRATOR"],
                    ["manage channels", "MANAGE_CHANNELS"],
                    ["manage guild", "MANAGE_GUILD"],
                    ["add reactions", "ADD_REACTIONS"],
                    ["view audit logs", "VIEW_AUDIT_LOG"],
                    ["priority speaker", "PRIORITY_SPEAKER"],
                    ["stream", "STREAM"],
                    ["view channel", "VIEW_CHANNEL"],
                    ["send messages", "SEND_MESSAGES"],
                    ["send TTS message", "SEND_TTS_MESSAGES"],
                    ["manage messages", "MANAGE_MESSAGES "],
                    ["embed links", "EMBED_LINKS"],
                    ["attach files", "ATTACH_FILES"],
                    ["read message history", "READ_MESSAGE_HISTORY"],
                    ["mention everyone", "MENTION_EVERYONE"],
                    ["use external emojis", "USE_EXTERNAL_EMOJIS"],
                    ["view guild insights", "VIEW_GUILD_INSIGHTS"],
                    ["connect", "CONNECT"],
                    ["speak", "SPEAK"],
                    ["mute members", "MUTE_MEMBERS"],
                    ["deafen members", "DEAFEN_MEMBERS"],
                    ["move members", "MOVE_MEMBERS"],
                    ["use VAD", "USE_VAD"],
                    ["change nickname", "CHANGE_NICKNAME"],
                    ["manage nicknames", "MANAGE_NICKNAMES"],
                    ["manage roles", "MANAGE_ROLES"],
                    ["manage webhooks", "MANAGE_WEBHOOKS"],
                    ["manage emojis and stickers", "MANAGE_EMOJIS_AND_STICKERS"],
                    ["use application commands", "USE_APPLICATION_COMMANDS"],
                    ["request to speak", "REQUEST_TO_SPEAK"],
                    ["manage events", "MANAGE_EVENTS"],
                    ["manage threads", "MANAGE_THREADS"],
                    ["create public threads", "CREATE_PUBLIC_THREADS"],
                    ["create private threads", "CREATE_PRIVATE_THREADS"],
                    ["use external stickers", "USE_EXTERNAL_STICKERS"],
                    ["send messages in threads", "SEND_MESSAGES_IN_THREADS"],
                    ["start embed activities", "START_EMBEDDED_ACTIVITIES"],

            ]
        }
    ],
    "output": "String",
    "colour": "#5BA58C",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const string = block.getFieldValue("INFO")
    
    return [ `'${string}'`, Blockly.JavaScript.ORDER_ATOMIC ];
};