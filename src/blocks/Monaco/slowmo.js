import * as Blockly from "blockly/core";

const blockName = "monaco_slowmode_of_channel";


const blockData = {
  "type": "monaco_slowmode_of_channel",
  "message0": "Slowmode of channel %1",
  "args0": [
    {
      "type": "input_value",
      "name": "channel",
      "check": "Channel"
    }
  ],
  "colour": "#4C97FF",
  "output": "number",
  "inputsInline": true,
  "tooltip": "Slowmode of a channel in seconds. Only for text channels.",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  var value_channel = Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_channel}.rateLimitPerUser`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
