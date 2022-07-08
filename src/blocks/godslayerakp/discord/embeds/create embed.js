/* eslint-disable */
import Blockly from "blockly/core";

const blockName = "gsa_create_embed";

const blockData = {
  "type": "gsa_create_embed",
  "message0": "make embed with name %1 %2 then %3",
  "args0": [
    {
      "type": "field_input",
      "name": "name",
    },
    {
      "type": "input_dummy"
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
  let name = block.getFieldValue("name")
  const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS", Blockly.JavaScript.ORDER_ATOMIC)
  return `let ${name.replaceAll(" ", "_").replace(/[!@#\$%\^&\*\(\)-=\]\[\|{}\+`~'":;\?\/\.<>,\/]/g, '_')} = {
    ${statements}
    }
    `
}