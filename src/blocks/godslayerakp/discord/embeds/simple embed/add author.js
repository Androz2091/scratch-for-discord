import Blockly from "blockly/core";
const blockName = "gsa_set_simple_embed_author";
const blockData = {
  "message0": "set embed author name %1 pfp %2 url %3",
  "args0": [
    {
      "type": "input_value",
      "name": "name",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "icon_url",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "url",
      "check": "String"
    }
  ],
  "output": blockName,
  "inputsInline": false,
  "colour": '#40BF4A',
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
  const url = Blockly.JavaScript.valueToCode(block, "url", Blockly.JavaScript.ORDER_ATOMIC)
  const icon_url = Blockly.JavaScript.valueToCode(block, "icon_url", Blockly.JavaScript.ORDER_ATOMIC)
  const code = `author: {
		name: String(${name}),
		icon_url: String(${icon_url}),
		url: String(${url}),
  }, 
`
return [code, Blockly.JavaScript.ORDER_ATOMIC];
}