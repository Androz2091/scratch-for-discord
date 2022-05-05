import * as Blockly from "blockly/core";


const blockName = "jg_bDI_encodedecodetype";

const blockData = {
  "message0": "%1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "type",
      "options": [
        [
          "ASCII",
          "'ASCII'"
        ],
        [
          "UTF8",
          "'UTF8'"
        ],
        [
          "UCS2",
          "'UCS2'"
        ],
        [
          "Base64",
          "'Base64'"
        ],
        [
          "Binary",
          "'Binary'"
        ],
        [
          "Hex",
          "'Hex'"
        ]
      ],
    },

  ],
  "colour": 195,
  "output": "encodedecodedropdowntype0216980",
  "tooltip": "A type to encode or decode to. You can set it using text by just inputting the lowercase version of the name, or by just putting the name the way it is now.",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  const type = block.getFieldValue("type");
  const code = [`${type}`, Blockly.JavaScript.ORDER_NONE]

  return code;

};
