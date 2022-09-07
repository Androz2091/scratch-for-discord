import Blockly from "blockly/core";

const blockName = "gsa_create_simple_embed_fields";

const blockData = {
  "message0": "add fields %2 %1",
  "args0": [
    {
      "type": "input_statement",
      "name": "STATEMENTS"
    },
    {
      "type": "input_dummy"
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
  const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS", Blockly.JavaScript.ORDER_ATOMIC)
  return `fields: [
${statements}
	], \n
`
}