import Blockly from "blockly/core";

const blockName = "gsa_buffer_get_length";

const blockData = {
  "message0": "length of %1",
  "args0": [
    {
      "type": "input_value",
      "name": "buffer",
      "check": "buffer"
    }
  ],
  "output": 'Number',
  "colour": '#AE4FA7',
  "tooltip": "gets the length of a buffer",
  "helpUrl": "https://nodejs.org/api/buffer.html#bufindex"
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
    this.setInputsInline(true)
  }
};

Blockly.JavaScript[blockName] = function (block) {
  const buf = Blockly.JavaScript.valueToCode(block, "buffer", Blockly.JavaScript.ORDER_ATOMIC)
  return [`${buf}.length`, Blockly.JavaScript.ORDER_ATOMIC]
};