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
        },        
        {
            "type": "input_value",
            "name": "STRING",
            "check": "String"
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
    const memberr = Blockly.JavaScript.valueToCode(block, "MEMBER", Blockly.JavaScript.ORDER_ATOMIC);
    let member = memberr.replace(".user","")
    const reason = Blockly.JavaScript.valueToCode(block, "STRING", Blockly.JavaScript.ORDER_ATOMIC);
    if(reason === null) {
        const code = `${member}.kick({ reason: ${reason} });\n`;
        return code;
    }else{
        const code = `${member}.kick({ reason: ${reason} });\n`;
        return code;
    }

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
