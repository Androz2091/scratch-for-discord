import Blockly from "blockly/core";

const s4d_add_role = {
    "message0": "%{BKY_ADD_ROLE}",
    "args0": [
        {
            "type": "input_value",
            "name": "ROLE"
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

Blockly.Blocks["s4d_add_role"] = {
    init: function() {
        this.jsonInit(s4d_add_role);
    }
};

Blockly.JavaScript["s4d_add_role"] = function(block) {
    const role = Blockly.JavaScript.valueToCode(block, "ROLE", Blockly.JavaScript.ORDER_ATOMIC);
    const roleType = block.getInput("ROLE").connection.targetConnection.getSourceBlock().type;
    const member = Blockly.JavaScript.valueToCode(block, "MEMBER", Blockly.JavaScript.ORDER_ATOMIC);
    if(roleType === "text"){
        const code = `${member}.roles.add(${member}.guild.roles.find((role) => role.id === ${role} || role.name === ${role} || '@'+role.name === ${role})):\n`;
        return code;
    } else {
        const code = `${member}.roles.add(${role});\n`;
        return code;
    }
};
