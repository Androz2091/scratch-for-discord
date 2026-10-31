import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../../restrictions";

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
    "tooltip": "%{BKY_MESSAGE_AUTHOR_RAW_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function(block) {
    const searchType = block.getFieldValue("SEARCH_TYPE");
    if(searchType === "ID"){
        const code = ["s4dmessage.author.id", Order.NONE];
        return code;
    } else if(searchType === "USERNAME"){
        const code = ["s4dmessage.author.username", Order.NONE];
        return code;
    } else if(searchType === "NICKNAME"){
        const code = ["(s4dmessage.member || await s4dmessage.guild.members.fetch(s4dmessage.author.id)).nickname", Order.NONE];
        return code;
    }
};

registerRestrictions(blockName, [
    {
        type: "toplevelparent",
        message: "RES_MUST_BE_IN_ON_MESSAGE",
        types: [
            "s4d_on_message",
            "s4d_on_message_edit"
        ]
    }
]);
