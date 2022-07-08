import Blockly from "blockly/core";
import { registerRestrictions } from "../../../../restrictions";
const blockName = "gsa_add_blank_field";
const blockData = {
  "type": "gsa_add_blank_field",
  "message0": "add blank field",
  "args0": [
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "must be in a add fields block",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function () {
  return `{
	name: '\\u200b',
	value: '\\u200b',
	inline: false,
},
`
}

registerRestrictions(blockName, [
  {
    type: "hasparent",
    message: "$This block needs to be placed in a \"add fields\" block!",
    types: [
      "gsa_create_fields"
    ]
  }
]);