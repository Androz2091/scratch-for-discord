import * as Blockly from "blockly/core";

const blockName = "monaco_set_channel_position";


const blockData = {
    "message0": "set channel %1 to position # %2 in server %3",
    "inputsInline": true,
    "args0": [
      {
      "type": "input_value",
      "name": "channel",
      "check": "Channel"
    },
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
    "colour": "#0c97f0",
"previousStatement": null,
"nextStatement": null,
    "tooltip": "Set a channel to a position.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript['monaco_set_channel_position'] = function(block) {
  var value_channel = Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC);
  var value_position = Blockly.JavaScript.valueToCode(block, 'position', Blockly.JavaScript.ORDER_ATOMIC);
  var value_server = Blockly.JavaScript.valueToCode(block, 'server', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_server}.${value_channel}.setPosition(${value_position})\n`;
  return code;
};
