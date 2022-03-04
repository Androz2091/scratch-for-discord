import * as Blockly from "blockly/core";


const blockName = "set_perms_parent";

const blockData = {
    "message0": "%{BKY_C_PERM_P}",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "SEARCH",
            "options": [
                [
                    "View channel",
                    "VIEW_CHANNEL"
                ],
                [
                    "Manage channel",
                    "MANAGE_CHANNEL"
                ],
                [
                    "Manage webhooks",
                    "MANAGE_WEBHOOKS"
                ],
                [
                    "Manage permissions",
                    "MANAGE_PERMISSIONS"
                ],
                [
                    "Create invite",
                    "CREATE_INSTANT_INVITE"
                ],
                [
                    "Send messages",
                    "SEND_MESSAGES"
                ],
                [
                    "Embed links",
                    "EMBED_LINKS"
                ],
                [
                    "Attach files",
                    "ATTACH_FILES"
                ],
                [
                    "Add reactions",
                    "ADD_REACTIONS"
                ],
                [
                    "Send Messages",
                    "USE_EXTERNAL_EMOJIS"
                ],
                [
                    "Mention everyone",
                    "MENTION_EVERYONE"
                ],
                [
                    "Manage messages",
                    "MANAGE_MESSAGES "
                ],
                [
                    "Read message history",
                    "READ_MESSAGE_HISTORY"
                ],
                [
                    "Atach files",
                    "ATTACH_FILES"
                ],
                [
                    "Read message history",
                    "READ_MESSAGE_HISTORY"
                ],
                [
                    "Use external emojis",
                    "USE_EXTERNAL_EMOJIS"
                ],
                [
                    "View server insights",
                    "VIEW_GUILD_INSIGHTS"
                ],
                [
                    "Use slash commands",
                    "USE_SLASH_COMMANDS"
                ],
                [
                    "Send TTS messages",
                    "SEND_TTS_MESSAGES"
                ],
            ]
        }
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
    const searchType = block.getFieldValue("SEARCH");
    const code = `['${searchType}'],`
    return code;

};