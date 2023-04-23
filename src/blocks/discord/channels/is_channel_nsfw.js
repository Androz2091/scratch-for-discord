import * as Blockly from "blockly";


const blockName = "s4d_is_channel_nsfw";

const blockData = {
    "message0": "%{BKY_IS_CHANNEL_NSFW}",
    "args0": [
        {
            "type": "input_value",
            "name": "CHANNEL",
            "check": "Channel"
        },
    ],
    "colour": "#4C97FF",
    "output": "Boolean",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};


Blockly.JavaScript[blockName] = function(block) {
  var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_ATOMIC);
  var code =`${channel}.nsfw`
  return [code, Blockly.JavaScript.ORDER_NONE];
};