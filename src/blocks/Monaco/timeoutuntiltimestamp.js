import * as Blockly from "blockly/core";

const blockName = "monaco_member_timeout_until_timestamp";


const blockData = {
  "type": "monaco_member_timeout_until_timestamp",
  "message0": "Member %1's timeout end timestamp",
  "args0": [
    {
      "type": "input_value",
      "name": "member",
      "check": "Member"
    }
  ],
  "colour": "#4C97FF",
  "output": "number",
  "inputsInline": true,
  "tooltip": "The timestamp of when the member's timeout will be removed",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  var value_member = Blockly.JavaScript.valueToCode(block, 'member', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_member}.communicationDisabledUntilTimestamp`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
