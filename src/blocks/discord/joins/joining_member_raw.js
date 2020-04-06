import * as Blockly from "blockly";

const s4d_joining_member_raw = {
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
    "colour": "#9966FF",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks["s4d_joining_member_raw"] = {
    init: function() {
        this.jsonInit(s4d_joining_member_raw);
    }
};

Blockly.JavaScript["s4d_joining_member_raw"] = function(block) {
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
