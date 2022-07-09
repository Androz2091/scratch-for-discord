import Blockly from "blockly/core";

const blockName = "vc_kick";

const blockData = {
  "message0": "Kick member %1 from voice",
  "args0": [
    {
      "type": "input_value",
      "name": "member",
      "check": "Member"
    }
  ],
  "previousStatement": null,
  "nextStatement": null, 
  "colour": "#0c97f0",
  "tooltip": "Kick a memebr from a voice chat",
  "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
const member = Blockly.JavaScript.valueToCode(block, "member", Blockly.JavaScript.ORDER_ATOMIC);

    const code = `${member}.voice.disconnect() \n`;
    return code;
};
