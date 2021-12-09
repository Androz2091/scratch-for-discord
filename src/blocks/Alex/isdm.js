import Blockly from "blockly/core";

const blockName = "isdm";

const blockData = {
  "message0": "Channel %1  is DM?",
  "args0": [
    {
      "type": "input_value",
      "check": "Channel",
      "name": "channel"
   
    }
  ],
  "output": "Boolean",
  "colour": "#33a146",
  "tooltip": "",
  "helpUrl": ""
}
Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
const chan = Blockly.JavaScript.valueToCode(block, "channel", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`${chan}.type === "DM"`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
