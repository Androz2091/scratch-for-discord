import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { getInputType } from "../../utils";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_add_role";

const blockData = {
    "message0": "%{BKY_ADD_ROLE}",
    "args0": [
        {
            "type": "input_value",
            "name": "ROLE",
            "check": [ "String", "Role" ]
        },
        {
            "type": "input_value",
            "name": "MEMBER",
            "check": "Member"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#4C97FF",
    "tooltip": "%{BKY_ADD_ROLE_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function(block) {
    const role = javascriptGenerator.valueToCode(block, "ROLE", Order.ATOMIC);
    const member = javascriptGenerator.valueToCode(block, "MEMBER", Order.ATOMIC);
    if (getInputType(block, "ROLE") === "String") {
        return `await ${member}.roles.add(${member}.guild.roles.cache.find((role) => role.id === ${role} || role.name === ${role} || "@" + role.name === ${role}));\n`;
    }
    return `await ${member}.roles.add(${role});\n`;
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_ADD_ROLE_MISSING_ROLE",
        types: [
            "ROLE"
        ]
    },
    {
        type: "notempty",
        message: "RES_ADD_ROLE_MISSING_MEMBER",
        types: [
            "MEMBER"
        ]
    }
]);
