import Blockly from "blockly/core";

const blockName = "role_name";

const blockData = {
  "message0": "Edit role name %1 %2 New name %3",
  "args0": [
    {
      "type": "input_value",
      "name": "role",
      "Check": "Role"
    },
    {
      "type": "input_space"
    },
    {
      "type": "input_value",
      "name": "name",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null, 
  "colour": "#48a4f0",
  "tooltip": "Change role name",
  "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
const role = Blockly.JavaScript.valueToCode(block, "role", Blockly.JavaScript.ORDER_ATOMIC);
const name = Blockly.JavaScript.valueToCode(block, "name", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${role}.edit({
            name: ${name}
        });`;
    return code;
};
