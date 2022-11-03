import Blockly from "blockly/core";

const blockName = "gsa_buffer_empty";

const blockData = {
  "message0": "create a buffer full of %2 with length %1",
  "args0": [
    {
      "type": "input_value",
      "name": "number",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "fill",
      "check": ["String", "Number", "buffer"]
    }
  ],
  "output": 'buffer',
  "colour": '#AE4FA7',
  "tooltip": "creates a new buffer with a provided length, fills with all zero's",
  "helpUrl": "https://nodejs.org/api/buffer.html#static-method-bufferallocsize-fill-encoding"
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
    this.setInputsInline(true)
  }
};

Blockly.JavaScript[blockName] = function (block) {
  const number = Blockly.JavaScript.valueToCode(block, "number", Blockly.JavaScript.ORDER_ATOMIC)
  const fill = Blockly.JavaScript.valueToCode(block, "fill", Blockly.JavaScript.ORDER_ATOMIC)
  return [`Buffer.alloc(Number(${number}), ${fill})`, Blockly.JavaScript.ORDER_ATOMIC]
};