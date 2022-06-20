import Blockly from "blockly/core";
const blockName = "gsa_send_embed";
const blockData = {
  "type": "gsa_send_embed",
  "message0": "send embed %1",
  "args0": [
    {
      "type": "input_value",
      "name": "title",
      "check": "String"
    }
  ],
  "output": 'embed',
  "inputsInline": true,
  "colour": 120,
  "tooltip": "must be in a make embed with name block",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  const color = Blockly.JavaScript.valueToCode(block, "title", Blockly.JavaScript.ORDER_ATOMIC)
  return `embeds: [${color}]`
}
