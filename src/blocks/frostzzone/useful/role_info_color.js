import Blockly from "blockly/core";

const blockName = "fz_role_info_color";

const blockData = {
    "message0": "Color of role %1",
    "args0": [{
        "type": "input_value",
        "name": "ROLE",
        "check": "Role"
    }, ],
    "output": "Color",
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
    const code = [`${role}.color`, Blockly.JavaScript.ORDER_NONE];
    return code;

};