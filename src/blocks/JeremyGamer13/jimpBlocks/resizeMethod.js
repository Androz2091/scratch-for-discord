import Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "jg_jimp_resizeMethods";

const blockData = {
  "message0": "Resize Image using Width %1 Height %2 and method %3",
  "args0": [
    {
      "type": "input_value",
      "name": "Width",
      "check": ["Number", "var", "Env"]
    },
    {
      "type": "input_value",
      "name": "Height",
      "check": ["Number", "var", "Env"]
    },
    {
      "type": "field_dropdown",
      "name": "method",
      "options": [
        [
          "Nearest Neighbor",
          'jimp.RESIZE_NEAREST_NEIGHBOR'
        ],
        [
          "Bilinear",
          'jimp.RESIZE_BILINEAR'
        ],
        [
          "Bicubic",
          'jimp.RESIZE_BICUBIC'
        ],
        [
          "Hermite",
          'jimp.RESIZE_HERMITE'
        ],
        [
          "Bezier",
          'jimp.RESIZE_BEZIER'
        ]
      ],
    }
  ],
  "colour": 260,
  "previousStatement": null,
  "nextStatement": null,
  "tooltip": "Resize the image to a specific Width and Height. Can only use Numbers, Variables, or Env secrets.",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  const wide = Blockly.JavaScript.valueToCode(block, "Width", Blockly.JavaScript.ORDER_ATOMIC);
  const high = Blockly.JavaScript.valueToCode(block, "Height", Blockly.JavaScript.ORDER_ATOMIC);
  const method = block.getFieldValue("method");
  return `await image.resize( Number(` + wide + `), Number(` + high + `), ` + method + `)\n`;
}

registerRestrictions(blockName, [
  {
    type: "hasparent",
    message: "RES_JGSAVEIMAGE",
    types: [
      "jg_beginJimp"
    ]
  }
]);