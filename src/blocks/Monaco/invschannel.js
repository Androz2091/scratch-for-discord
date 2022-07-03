import * as Blockly from "blockly/core";

const blockName = "monaco_invites_channels";


const blockData = {
  "type": "monaco_invites_channels",
  "message0": "all invites of channel %1 in server %2",
  "args0": [
     {
      "type": "input_value",
      "name": "channel",
      "check": "Channel"
    },
    {
      "type": "input_value",
      "name": "server",
      "check": "Server"
    }
  ],
  "colour": "#4C97FF",
  "output": "Invites",
  "inputsInline": true,
  "tooltip": "Get all invites of a specific channel in a specific server.",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript['invs_channel'] = function(block) {
  var value_channel = Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC);
  var value_server = Blockly.JavaScript.valueToCode(block, 'server', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_server}.invites.fetch({ channelId: ${value_channel}.id })`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
