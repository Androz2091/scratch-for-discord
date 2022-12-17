import Blockly from "blockly/core";

const blockName = "monaco_delete_role";

const blockData = {
  "message0": "delete role %1 with reason %2 in server %3",
  "args0": [
    {
      "type": "input_value",
      "name": "role",
      "check": "Role"
    },
    {
      "type": "input_value",
      "name": "reason",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "server",
      "check": "Server"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#4C97FF",
  "tooltip": "Deletes a role with a reason.",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  var value_role = Blockly.JavaScript.valueToCode(block, 'role', Blockly.JavaScript.ORDER_ATOMIC);
  var value_reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
  var value_server = Blockly.JavaScript.valueToCode(block, 'server', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_server}.roles.delete(${value_role}, String(${value_reason}))\n`;
  return code;
};