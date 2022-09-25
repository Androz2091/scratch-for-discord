import Blockly from "blockly/core";

const blockName = "set_member_cooldown";

const blockData = {
    "message0": "set member on cooldown %1",
    "args0": [
        {
            "type": "input_value",
            "name": "MEMBER",
            "check":"Member"
        },
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const member = Blockly.JavaScript.valueToCode(block, "MEMBER", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `Cooldown.add(${member}.id);\n`
    return code;
};
