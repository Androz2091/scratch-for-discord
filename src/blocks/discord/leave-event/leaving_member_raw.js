import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_leaving_member_raw";

const blockData = {
    "message0": "%{BKY_LEAVING_MEMBER_RAW}",
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

javascriptGenerator.forBlock[blockName] = function(block) {
    const searchType = block.getFieldValue("SEARCH_TYPE");
    if(searchType === "ID"){
        const code = ["s4d.leavingMember.id", Order.NONE];
        return code;
    } else if(searchType === "USERNAME"){
        const code = ["s4d.leavingMember.user.username", Order.NONE];
        return code;
    } else if(searchType === "NICKNAME"){
        const code = ["s4d.leavingMember.nickname", Order.NONE];
        return code;
    }
};

registerRestrictions(blockName, [
    {
        type: "toplevelparent",
        message: "RES_MUST_BE_IN_ON_MEMBER_LEAVE",
        types: [
            "s4d_on_member_leave"
        ]
    }
]);
