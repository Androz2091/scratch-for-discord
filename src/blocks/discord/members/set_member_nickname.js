import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_set_member_nickname";

const blockData = {
    "message0": "%{BKY_SET_MEMBER_NICKNAME}",
    "args0": [
        {
            "type": "input_value",
            "name": "MEMBER",
            "check": "Member"
        },
        {
            "type": "input_value",
            "name": "NEW_NICKNAME",
            "check": [ "Number", "String" ]
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#4C97FF",
    "tooltip": "%{BKY_SET_MEMBER_NICKNAME_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function(block) {
    const member = javascriptGenerator.valueToCode(block, "MEMBER", Order.ATOMIC);
    const newName = javascriptGenerator.valueToCode(block, "NEW_NICKNAME", Order.ATOMIC);
    const code = `await ${member}.setNickname(String(${newName}));\n`;
    return code;
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_SET_MEMBER_NICKNAME_MEMBER",
        types: [
            "MEMBER"
        ]
    },
    {
        type: "notempty",
        message: "RES_SET_MEMBER_NICKNAME_NEW_NICKNAME",
        types: [
            "NEW_NICKNAME"
        ]
    }
]);
