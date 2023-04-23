import Blockly from "blockly/core";

const blockName = "gsa_string_from_buffer";

const blockData = {
  "message0": "string from buffer %1 with encoding %2",
  "args0": [
    {
      "type": "input_value",
      "name": "string",
      "check": "buffer"
    },
    {
      "type": "field_dropdown",
      "name": "encode",
      "options": [
        [
            "utf-8",
            "utf8"
        ],
        [
            "utf-16le",
            "utf16le"
        ],
        [
            "ISO-8859-1",
            "latin18"
        ],
        [
            "base64",
            "base64"
        ],
        [
            "base64-url",
            "base64url"
        ],
        [
            "hex",
            "hex"
        ],
        [
            "ascii",
            "ascii"
        ],
        [
            "binary",
            "binary"
        ]
      ]
    }
  ],
  "output": 'String',
  "colour": '#AE4FA7',
  "tooltip": "converts a buffer to a string",
  "helpUrl": "https://nodejs.org/api/buffer.html#buftostringencoding-start-end"
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
    this.setInputsInline(true)
  }
};

Blockly.JavaScript[blockName] = function (block) {
  const string = Blockly.JavaScript.valueToCode(block, "string", Blockly.JavaScript.ORDER_ATOMIC)
  const encode = block.getFieldValue('encode')
  return [`${string}.toString('${encode}')`, Blockly.JavaScript.ORDER_ATOMIC]
};