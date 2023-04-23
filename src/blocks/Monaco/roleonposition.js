import * as Blockly from "blockly/core";

const blockName = "monaco_get_role_on_position";


const blockData = {
  "type": "monaco_get_role_on_position",
  "message0": "get role on position # %1 in server %2",
  "args0": [
    {
      "type": "input_value",
      "name": "position",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "server",
      "check": "Server"
    }
  ],
  "colour": "#4C97FF",
  "output": "Role",
  "inputsInline": true,
  "tooltip": "Get a role on a specific position in a server.",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript['monaco_get_role_on_position'] = function(block) {
  var value_position = Blockly.JavaScript.valueToCode(block, 'position', Blockly.JavaScript.ORDER_ATOMIC);
  var value_server = Blockly.JavaScript.valueToCode(block, 'server', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_server}.roles.cache.find(role => role.position === ${value_position})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
