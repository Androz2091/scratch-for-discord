import * as Blockly from "blockly";

const blockName = "s4d_message_author_raw";

const blockData = {
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
    const searchType = block.getFieldValue("SEARCH_TYPE");
    if(searchType === "ID"){
        const code = ["s4dmessage.author.id", Blockly.JavaScript.ORDER_NONE];
        return code;
    } else if(searchType === "USERNAME"){
        const code = ["s4dmessage.author.username", Blockly.JavaScript.ORDER_NONE];
        return code;
    } else if(searchType === "NICKNAME"){
        const code = ["(s4dmessage.member || await s4dmessage.guild.members.fetch(s4dmessage.author.id)).nickname", Blockly.JavaScript.ORDER_NONE];
        return code;
    }
};
