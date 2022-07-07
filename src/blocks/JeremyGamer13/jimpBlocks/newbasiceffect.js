import Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "jg_jimp_basicE";

const blockData = {
  "message0": "Set %1 effect",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "effect",
      "options": [
        [
          "grayscale",
          'greyscale'
        ],
        [
          "invert",
          'invert'
        ],
        [
          "sepia",
          'sepia'
        ],
        [
          "dither",
          'dither565'
        ],
        [
          "normalize",
          'normalize'
        ],
        [
          "opaque",
          'opaque'
        ]
      ],
    }
  ],
  "colour": 260,
  "previousStatement": null,
  "nextStatement": null,
  "tooltip": "Adds the specified effect to the image.\nDither: Dithers the image and reduces the color space to 16-bits.\nSepia: Adds a warm brown color on the image.\nInvert: Inverts the colors on the image.\nNormalize: Normalizes the channels in the image.",
  "helpUrl": "https://www.npmjs.com/package/jimp#methods"
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  const effect = block.getFieldValue("effect");
  return `await image.` + effect + `()\n`;
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