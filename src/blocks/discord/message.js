import * as Blockly from "blockly";

const reply_message = {
    "message0": "%{BKY_REPLY}",
    "args0": [
        {
            "type": "input_value",
            "name": "CONTENT",
            "check": "String"
        },
    ],
    "colour": "#9966FF",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks["discord4stratch_reply_message"] = {
    init: function() {
        this.jsonInit(reply_message);
    }
};

Blockly.JavaScript["discord4stratch_reply_message"] = function(block) {
    const content = Blockly.JavaScript.valueToCode(block, "CONTENT", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`discord4stratch.message.reply(${content});\n`, Blockly.JavaScript.ORDER_NONE];
    return code;
};

const message_content = {
    "message0": "%{BKY_MESSAGE_CONTENT}",
    "colour": "#9966FF",
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
                    "%{BKY_USERNAME}",
                    "USERNAME"
                ],
                [
                    "%{BKY_NICKNAME}",
                    "NICKNAME"
                ],
                [
                    "id",
                    "ID"
                ]
            ]
        }
    ],
    "output": "String",
    "colour": "#9966FF",
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
                    "%{BKY_NAME}",
                    "NAME"
                ],
                [
                    "id",
                    "ID"
                ]
            ]
        }
    ],
    "output": "String",
    "colour": "#9966FF",
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
                    "%{BKY_NAME}",
                    "NAME"
                ],
                [
                    "id",
                    "ID"
                ]
            ]
        }
    ],
    "output": "String",
    "colour": "#9966FF",
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
