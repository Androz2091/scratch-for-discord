import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../../restrictions";
import { getInputType } from "../../utils";

const blockName = "s4d_member_has_role";

const blockData = {
    "message0": "%{BKY_MEMBER_HAS_ROLE}",
    "args0": [
        {
            "type": "input_value",
            "name": "MEMBER",
            "check": "Member"
        },
        {
            "type": "input_value",
            "name": "ROLE",
            "check": [ "String", "Role" ]
        }
    ],
    "colour": "#5B80A5",
    "output": "Boolean",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function(block) {
    const member = javascriptGenerator.valueToCode(block, "MEMBER", Order.ATOMIC);
    const role = javascriptGenerator.valueToCode(block, "ROLE", Order.ATOMIC);
    if (getInputType(block, "ROLE") === "String") {
        return [ `${member}.roles.cache.some((role) => role.id === ${role} || role.name === ${role} || "@" + role.name === ${role})`, Order.FUNCTION_CALL ];
    }
    return [ `${member}.roles.cache.has(${role}.id)`, Order.FUNCTION_CALL ];
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_VALID_MEMBER",
        types: [
            "MEMBER"
        ]
    },
    {
        type: "notempty",
        message: "RES_GET_ROLE_VALUE",
        types: [
            "ROLE"
        ]
    }
]);
