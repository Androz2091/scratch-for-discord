import Blockly from "blockly/core";

const blockName = "s4d_delete_role";

const blockData = {
    "message0": "%{BKY_DELETE_ROLE}",
    "args0": [
        {
            "type": "input_value",
            "name": "ROLE",
            "check": [ "String", "Role" ]
        },
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
    const code = `${role}.delete();\n`;
    return code
};