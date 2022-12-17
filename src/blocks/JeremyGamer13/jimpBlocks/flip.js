import Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "jg_jimp_flip";

const blockData = {
  "message0": "Flip Image %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "flipDir",
      "options": [
        [
          "Horizontally",
          'true, false'
        ],
        [
          "Vertically",
          'false, true'
        ],
        [
          "Both",
          'true, true'
        ]
      ]
    }
  ],
  "colour": 260,
  "previousStatement": null,
  "nextStatement": null,
  "tooltip": "Flips the image in the specified way.",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  const flipDir = block.getFieldValue("flipDir");
  return `await image.flip( ` + flipDir + ` )\n`;
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