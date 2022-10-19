import Blockly from "blockly/core";

const blockName = "gsa_buffer_from_string";

const blockData = {
  "message0": "create buffer from %1 with encoding %2",
  "args0": [
    {
      "type": "input_value",
      "name": "string",
      "check": "String"
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
  "output": 'buffer',
  "colour": '#AE4FA7',
  "tooltip": "creates a new buffer from any given string",
  "helpUrl": "https://nodejs.org/api/buffer.html#static-method-bufferfromstring-encoding"
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
  return [`Buffer.from(String(${string}), '${encode}')`, Blockly.JavaScript.ORDER_ATOMIC]
};