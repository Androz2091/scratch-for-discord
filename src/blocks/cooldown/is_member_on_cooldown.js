import Blockly from "blockly/core";

const blockName = "is_member_on_cooldown";

const blockData = {
    "message0": "is member on cooldown %1",
    "args0": [
        {
          "type": "input_value",
          "name": "USER",
          "check": "Member" 
        }
    ],
    "colour": "#187795",
    "output": "Boolean",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const user = Blockly.JavaScript.valueToCode(block, "USER", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`Cooldown.has(${user}.id)`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
