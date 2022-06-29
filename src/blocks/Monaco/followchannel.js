import * as Blockly from "blockly/core";

const blockName = "monaco_toggle_follow_channel";


const blockData = {
  "message0": "follow channel %1 to channel %2 with reason %3",
  "inputsInline": true,
  "args0": [
    {
      "type": "input_value",
      "name": "togglechannel",
      "check": "Channel"
    },
    {
      "type": "input_value",
      "name": "locationchannel",
      "check": "Channel"
    },
    {
      "type": "input_value",
      "name": "reason",
      "check": "String"
    }
  ],
  "colour": "#0c97f0",
  "previousStatement": null,
  "nextStatement": null,
  "tooltip": "Follow news channels.",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  var value_togglechannel = Blockly.JavaScript.valueToCode(block, 'togglechannel', Blockly.JavaScript.ORDER_ATOMIC);
  var value_locationchannel = Blockly.JavaScript.valueToCode(block, 'locationchannel', Blockly.JavaScript.ORDER_ATOMIC);
  var value_reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = ` ${value_togglechannel}.addFollower(${value_locationchannel}, String(${value_reason}))
`;
  return code;
};
