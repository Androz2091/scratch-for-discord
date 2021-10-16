import Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_has_role";

const blockData = {
    "message0": "%{BKY_HAS_ROLE}",
    "args0": [
        {
            "type": "input_value",
            "name": "ROLE",
            "check":  "Role" 
        },
        {
            "type": "input_value",
            "name": "MEMBER",
            "check": "Member"
        }
    ],
    "output": "Boolean",
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
    const role = Blockly.JavaScript.valueToCode(block, "ROLE", Blockly.JavaScript.ORDER_ATOMIC);
    const memberr = Blockly.JavaScript.valueToCode(block, "MEMBER", Blockly.JavaScript.ORDER_ATOMIC);
    let member = memberr.replace(".user","")
    const code = [`${member}._roles.includes(${role}.id)`, Blockly.JavaScript.ORDER_NONE ];
    return code;
    
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_HAS_ROLE_MISSING_ROLE",
        types: [
            "ROLE"
        ]
    },
    {
        type: "notempty",
        message: "RES_HAS_ROLE_MISSING_MEMBER",
        types: [
            "MEMBER"
        ]
    }
]);