import * as Blockly from "blockly";


const blockName = "oldmsg_member";

const blockData = {
    "message0": "%{BKY_O_MSG_M}",
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
        const code = ["oldMessage.member.user.id", Blockly.JavaScript.ORDER_NONE];
        return code;
    } else if(searchType === "USERNAME"){
        const code = ["oldMessage.member.user.username", Blockly.JavaScript.ORDER_NONE];
        return code;
    } else if(searchType === "NICKNAME"){
        const code = ["oldMessage.member.user.nickname", Blockly.JavaScript.ORDER_NONE];
        return code;
    }
};
