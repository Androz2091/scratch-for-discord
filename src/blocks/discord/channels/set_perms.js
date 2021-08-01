import * as Blockly from "blockly";


const blockName = "set_perms";

const blockData = {
    "message0": "%2 %1",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "BOOLEAN",
            "options": [
                [
                    "True",
                    "TRUE"
                ],
                [
                    "False",
                    "FALSE"
                ],
            ]
        },
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
    "output": "String",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};


Blockly.JavaScript[blockName] = function(block) {
    const boolean = block.getFieldValue("BOOLEAN");
    const searchType = block.getFieldValue("SEARCH");
    if(searchType === "VIEW_CHANNEL"){
        const code = [`VIEW_CHANNEL: ${boolean},`, Blockly.JavaScript.ORDER_NONE];
        return code;
    } else if(searchType === "MANAGE_CHANNEL"){
        const code = [`MANAGE_CHANNEL: ${boolean},`, Blockly.JavaScript.ORDER_NONE];
        return code;
    } else if(searchType === "MANAGE_WEBHOOKS"){
        const code = [`MANAGE_WEBHOOKS: ${boolean},`, Blockly.JavaScript.ORDER_NONE];
        return code;
    } else if(searchType === "MANAGE_PERMISSIONS"){
    const code = [`MANAGE_PERMISSIONS: ${boolean},`, Blockly.JavaScript.ORDER_NONE];
    return code;
    } else if(searchType === "CREATE_INSTANT_INVITE"){
        const code = [`CREATE_INSTANT_INVITE: ${boolean},`, Blockly.JavaScript.ORDER_NONE];
        return code;
    }else if(searchType === "SEND_MESSAGES"){
        const code = [`SEND_MESSAGES: ${boolean},`, Blockly.JavaScript.ORDER_NONE];
        return code;
    } else if(searchType === "EMBED_LINKS"){
        const code = [`EMBED_LINKS: ${boolean},`, Blockly.JavaScript.ORDER_NONE];
        return code;
    } else if(searchType === "ATTACH_FILES"){
        const code = [`ATTACH_FILES: ${boolean},`, Blockly.JavaScript.ORDER_NONE];
        return code;
    } else if(searchType === "READ_MESSAGE_HISTORY"){
        const code = [`READ_MESSAGE_HISTORY: ${boolean},`, Blockly.JavaScript.ORDER_NONE];
        return code;
    } else if(searchType === "USE_EXTERNAL_EMOJIS"){
        const code = [`USE_EXTERNAL_EMOJIS: ${boolean},`, Blockly.JavaScript.ORDER_NONE];
        return code;
    } else if(searchType === "VIEW_GUILD_INSIGHTS"){
        const code = [`VIEW_GUILD_INSIGHTS: ${boolean},`, Blockly.JavaScript.ORDER_NONE];
        return code;
    } else if(searchType === "USE_SLASH_COMMANDS"){
        const code = [`USE_SLASH_COMMANDS: ${boolean},`, Blockly.JavaScript.ORDER_NONE];
        return code;
    } else if(searchType === "SEND_TTS_MESSAGES"){
        const code = [`SEND_TTS_MESSAGES: ${boolean},`, Blockly.JavaScript.ORDER_NONE];
        return code;
    }
};




