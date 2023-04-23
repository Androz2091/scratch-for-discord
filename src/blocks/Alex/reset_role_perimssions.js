import Blockly from "blockly/core";

const blockName = "reset_role_perms";

const blockData = {
    "message0": "Reset all permissions of role %1",
    "args0": [
        {
            "type": "input_value",
            "name": "role",
            "check": "Role"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#4C97FF",
    "tooltip": "This will remove all permissions from a role.",
    "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const role = Blockly.JavaScript.valueToCode(block, "role", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${role}.setPermissions(0n)
`;
    return code;
};