import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_member_dynamic_icon";

const blockData = {
    "message0": "member %1 animated profile picture",
    "args0": [
        {
            "type": "input_value",
            "name": "MEMBER",
            "check": "Member"
        }
    ],
    "colour": "#50a6c9",
    "output": "String",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
    const member = Blockly.JavaScript.valueToCode(block, "MEMBER", Blockly.JavaScript.ORDER_ATOMIC);
    return [ `${member}.displayAvatarURL({ dynamic : true })`, Blockly.JavaScript.ORDER_NONE ];
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_VALID_MEMBER",
        types: [
            "MEMBER"
        ]
    }
]);
