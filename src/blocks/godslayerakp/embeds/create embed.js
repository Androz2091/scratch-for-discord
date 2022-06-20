import Blockly from "blockly/core";

const blockName = "gsa_create_embed";

const blockData = {
  "type": "gsa_create_embed",
  "message0": "make embed with name %1 then %2",
  "args0": [
    {
      "type": "input_value",
      "name": "name",
      "check": "String"
    },
    {
      "type": "input_statement",
      "name": "STATEMENTS"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "inputsInline": true,
  "colour": 120,
  "tooltip": "note that you CANNOT put anything other than the embed blocks",
  "helpUrl": "https://discordjs.guide/popular-topics/embeds.html#using-an-embed-object"
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  const name = Blockly.JavaScript.valueToCode(block, "name", Blockly.JavaScript.ORDER_ATOMIC)
  const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS", Blockly.JavaScript.ORDER_ATOMIC)
  return `const ${name} = {
${statements}
};
`
}