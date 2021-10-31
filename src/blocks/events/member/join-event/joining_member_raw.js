import * as Blockly from "blockly";
import { registerRestrictions } from "../../../../restrictions";

const blockName = "s4d_joining_member_raw";

const blockData = {
    "message0": "%{BKY_JOINING_MEMBER_RAW}",
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
        const code = ["s4d.joiningMember.id", Blockly.JavaScript.ORDER_NONE];
        return code;
    } else if(searchType === "USERNAME"){
        const code = ["s4d.joiningMember.user.username", Blockly.JavaScript.ORDER_NONE];
        return code;
    } else if(searchType === "NICKNAME"){
        const code = ["s4d.joiningMember.nickname", Blockly.JavaScript.ORDER_NONE];
        return code;
    }
};

registerRestrictions(blockName, [
    {
        type: "toplevelparent",
        message: "RES_MUST_BE_IN_ON_MEMBER_JOIN",
        types: [
            "s4d_on_member_join"
        ]
    }
]);
