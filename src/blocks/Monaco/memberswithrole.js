import * as Blockly from "blockly/core";

const blockName = "monaco_members_with_role";

const blockData = {
  "type": "monaco_members_with_role",
  "message0": "get all members with role %1",
  "args0": [
    {
      "type": "input_value",
      "name": "role",
      "check": "Role"
    }
  ],
  "colour": "#4C97FF",
  "output": "Members",
  "inputsInline": true,
  "tooltip": "Get all members with role",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript['monaco_members_with_role'] = function(block) {
  var value_role = Blockly.JavaScript.valueToCode(block, 'role', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_role}.members`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
