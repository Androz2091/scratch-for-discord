import * as Blockly from "blockly";

const message_content = {
    "message0": "%{BKY_MESSAGE_CONTENT}",
    "colour": 230,
    "tooltip": "",
    "output": "String",
    "helpUrl": ""
};

Blockly.Blocks["discord4stratch_message_content"] = {
    init: function() {
        this.jsonInit(message_content);
    }
};

Blockly.JavaScript["discord4stratch_message_content"] = function() {
    const code = [`discord4stratch.message.content`, Blockly.JavaScript.ORDER_NONE];
    return code;
};

const message_author = {
    "message0": "%{BKY_MESSAGE_AUTHOR}",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "SEARCH_TYPE",
            "options": [
                [
                    "id",
                    "ID"
                ],
                [
                    "%{BKY_USERNAME}",
                    "USERNAME"
                ],
                [
                    "%{BKY_NICKNAME}",
                    "NICKNAME"
                ]
            ]
        }
    ],
    "output": "String",
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks["discord4stratch_message_author"] = {
    init: function() {
        this.jsonInit(message_author);
    }
};

Blockly.JavaScript["discord4stratch_message_author"] = function(block) {
    const searchType = block.getFieldValue("SEARCH_TYPE");
    if(searchType === "ID"){
        const code = [`discord4stratch.message.author.id`, Blockly.JavaScript.ORDER_NONE];
        return code;
    } else if(searchType === "USERNAME"){
        const code = [`discord4stratch.message.author.username`, Blockly.JavaScript.ORDER_NONE];
        return code;
    } else if(searchType === "NICKNAME"){
        const code = [`(discord4stratch.message.member || await discord4stratch.message.guild.members.fetch(discord4stratch.message.author.id)).nickname`, Blockly.JavaScript.ORDER_NONE];
        return code;
    }
};

const message_guild = {
    "message0": "%{BKY_MESSAGE_GUILD}",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "SEARCH_TYPE",
            "options": [
                [
                    "id",
                    "ID"
                ],
                [
                    "%{BKY_NAME}",
                    "NAME"
                ]
            ]
        }
    ],
    "output": "String",
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks["discord4stratch_message_guild"] = {
    init: function() {
        this.jsonInit(message_guild);
    }
};

Blockly.JavaScript["discord4stratch_message_guild"] = function(block) {
    const searchType = block.getFieldValue("SEARCH_TYPE");
    if(searchType === "ID"){
        const code = [`(discord4stratch.message.guild || {}).id`, Blockly.JavaScript.ORDER_NONE];
        return code;
    } else if(searchType === "NAME"){
        const code = [`(discord4stratch.message.guild || {}).name`, Blockly.JavaScript.ORDER_NONE];
        return code;
    }
};

const message_channel = {
    "message0": "%{BKY_MESSAGE_CHANNEL}",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "SEARCH_TYPE",
            "options": [
                [
                    "id",
                    "ID"
                ],
                [
                    "%{BKY_NAME}",
                    "NAME"
                ]
            ]
        }
    ],
    "output": "String",
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks["discord4stratch_message_channel"] = {
    init: function() {
        this.jsonInit(message_channel);
    }
};

Blockly.JavaScript["discord4stratch_message_channel"] = function(block) {
    const searchType = block.getFieldValue("SEARCH_TYPE");
    if(searchType === "ID"){
        const code = [`(discord4stratch.message.channel || {}).id`, Blockly.JavaScript.ORDER_NONE];
        return code;
    } else if(searchType === "NAME"){
        const code = [`(discord4stratch.message.channel || {}).name`, Blockly.JavaScript.ORDER_NONE];
        return code;
    }
};
