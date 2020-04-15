import Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_kick_member";

const blockData = {
    "message0": "%{BKY_KICK_MEMBER}",
    "args0": [
        {
            "type": "input_value",
            "name": "MEMBER",
            "check": "Member"
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
    const code = `${member}.kick();\n`;
    return code;
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_KICK_MEMBER_MISSING_MEMBER",
        types: [
            "MEMBER"
        ]
    }
]);
