import * as Blockly from "blockly/core";

const blockName = "monaco_random_role";


const blockData = {
  "type": "random_role_in_server",
  "message0": "Random role in server %1",
  "args0": [
    {
      "type": "input_value",
      "name": "server",
      "check": "Server"
    }
  ],
  "colour": "#4C97FF",
  "output": "Role",
  "inputsInline": true,
  "tooltip": "Gets a random role in a specified server.",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  var value_server = Blockly.JavaScript.valueToCode(block, 'server', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_server}.roles.cache.random()`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};