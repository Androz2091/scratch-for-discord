import * as Blockly from "blockly/core";

const blockName = "monaco_all_invites";


const blockData = {
  "type": "monaco_all_invites",
  "message0": "all invites in server %1",
  "args0": [
    {
      "type": "input_value",
      "name": "server",
      "check": "Server"
    }
  ],
  "colour": "#4C97FF",
  "output": "Invites",
  "inputsInline": true,
  "tooltip": "Get all invites created.",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript['monaco_all_invites'] = function(block) {
  var value_server = Blockly.JavaScript.valueToCode(block, 'server', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_server}.invites.fetch()`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
