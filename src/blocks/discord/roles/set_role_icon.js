import Blockly from "blockly/core";

const blockName = "set_role_icon"

const blockData = {
    "type": "set_role_icon",
    "message0": "set icon %1 on role %2",
    "args0": [
        {
            "type": "input_value",
            "name": "icon"
        },
        {
            "type": "input_value",
            "name": "role",
            "Check": "Role"
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#4C97FF",
    "tooltip": "",
    "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript['set_role_icon'] = function (block) {
    var icon = Blockly.JavaScript.valueToCode(block, 'icon', Blockly.JavaScript.ORDER_ATOMIC);
    var role = Blockly.JavaScript.valueToCode(block, 'role', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `${role}.setIcon(${icon});\n`;
    return code;
};
