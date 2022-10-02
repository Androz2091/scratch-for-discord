import Blockly from "blockly/core";
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
    if(block.getInput("ROLE").connection.targetConnection){
        const roleType = block.getInput("ROLE").connection.targetConnection.getSourceBlock().outputConnection.check_ ?
        block.getInput("ROLE").connection.targetConnection.getSourceBlock().outputConnection.check_[0] :
        null;
        if(roleType === "String"){
            const code = `${member}.roles.add(${member}.guild.roles.cache.find((role) => role.id === ${role} || role.name === ${role} || '@'+role.name === ${role}));\n`;
            return code;
        } else {
            const code = `${member}.roles.add(${role});\n`;
            return code;
        }
    } else {
        const code = `${member}.roles.add(${role});\n`;
        return code;
    }
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
