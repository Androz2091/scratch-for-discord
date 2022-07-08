import Blockly from "blockly/core";
import { registerRestrictions } from "../../../../restrictions";
const blockName = "gsa_set_embed_thumbnail";
const blockData = {
  "type": "gsa_set_embed_thumbnail",
  "message0": "set embed thumbnail url %1",
  "args0": [
    {
      "type": "input_value",
      "name": "name",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "inputsInline": false,
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
  const name = Blockly.JavaScript.valueToCode(block, "name", Blockly.JavaScript.ORDER_ATOMIC)
  return `thumbnail: {
	url: ${name},
},
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