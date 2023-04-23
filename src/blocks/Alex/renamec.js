import Blockly from "blockly/core";

const blockName = "renamec";

const blockData = {
"message0": "Rename channel %1 %2 New name %3",
  "args0": [
    {
      "type": "input_value",
      "check": "Channel",
      "name": "channel"
    },
    {
      "type": "input_space"
    },
    {
      "check": "String",
      "type": "input_value",
      "name": "name"
    }
  ],
  "previousStatement": null,
  "nextStatement": null, 
  "colour": "#0c97f0",
  "tooltip": "Rename a channel",
  "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
const cn = Blockly.JavaScript.valueToCode(block, "channel", Blockly.JavaScript.ORDER_ATOMIC);
const nn = Blockly.JavaScript.valueToCode(block, "name", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${cn}.setName(${nn})
    `;
    return code;
};
