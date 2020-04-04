import * as Blockly from "blockly";

const s4d_message_author_raw = {
    "message0": "%{BKY_MESSAGE_AUTHOR_RAW}",
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

Blockly.Blocks["s4d_message_author_raw"] = {
    init: function() {
        this.jsonInit(s4d_message_author_raw);
    }
};

Blockly.JavaScript["s4d_message_author_raw"] = function(block) {
    const searchType = block.getFieldValue("SEARCH_TYPE");
    if(searchType === "ID"){
        const code = ["s4d.message.author.id", Blockly.JavaScript.ORDER_NONE];
        return code;
    } else if(searchType === "USERNAME"){
        const code = ["s4d.message.author.username", Blockly.JavaScript.ORDER_NONE];
        return code;
    } else if(searchType === "NICKNAME"){
        const code = ["(s4d.message.member || await s4d.message.guild.members.fetch(s4d.message.author.id)).nickname", Blockly.JavaScript.ORDER_NONE];
        return code;
    }
};
