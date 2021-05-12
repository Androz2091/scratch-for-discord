import Blockly from "blockly/core";
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
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const member = Blockly.JavaScript.valueToCode(block, "MEMBER", Blockly.JavaScript.ORDER_ATOMIC);
    const newName = Blockly.JavaScript.valueToCode(block, "NEW_NICKNAME", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${member}.setNickname(${newName});\n`;
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
