import * as Blockly from "blockly/core";

const blockName = "frost_slowmode";

const blockData = {
    "message0": "Set slowmode of channel %1 to (seconds) %2 with reason %3",
    "args0": [
    {
        "type": "input_value",
        "name": "CHANNEL",
        "check": "Channel"
    },
      {
        "type": "input_value", 
        "name": "TIME",
        "check": "Number"
      },
      {
        "type": "input_value", 
        "name": "REASON", 
        "check": "String"
      }],
    "colour": "#a55b80",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const channel = Blockly.JavaScript.valueToCode(block, "CHANNEL", Blockly.JavaScript.ORDER_ATOMIC);
const time = Blockly.JavaScript.valueToCode(block, "TIME", Blockly.JavaScript.ORDER_ATOMIC);
const reason = Blockly.JavaScript.valueToCode(block, "REASON", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${channel}.setRateLimitPerUser(${time}, ${reason});\n`;
    return code;
};