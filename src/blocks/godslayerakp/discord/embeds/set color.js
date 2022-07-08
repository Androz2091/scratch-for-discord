import Blockly from "blockly/core";
import { registerRestrictions } from "../../../../restrictions";

const blockName = "gsa_set_embed_color";

const blockData = {
  "type": "gsa_set_embed_color",
  "message0": "set embed color %1",
  "args0": [
    {
      "type": "input_value",
      "name": "color",
      "check": [
        "String",
        "Colour"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
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
  const color = Blockly.JavaScript.valueToCode(block, "color", Blockly.JavaScript.ORDER_ATOMIC)
  return `color: ${color},
`
}
registerRestrictions(blockName, [
  {
    type: "hasparent",
    message: "$This block needs to be placed in a \"create embed with name () then\" block!",
    types: [
      "gsa_create_embed"
    ]
  }
]);