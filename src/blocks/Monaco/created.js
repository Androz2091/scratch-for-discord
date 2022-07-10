import * as Blockly from "blockly/core";

const blockName = "monaco_created_guild";

const blockData = {
  "type": "monaco_created_guild",
  "message0": "created server",
  "colour": "#4C97FF",
  "output": "Server",
  "inputsInline": true,
  "tooltip": "Get the created guild.",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript['monaco_created_guild'] = function() {
  // TODO: Assemble JavaScript into code variable.
  var code = `newServer`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
