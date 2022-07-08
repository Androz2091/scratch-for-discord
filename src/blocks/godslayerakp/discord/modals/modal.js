import Blockly from "blockly/core";

const blockName = "gsa_modal_create";

const blockData = {
  "message0": "name %1 %2 id %3 title %4 %5",
  "args0": [
      {
        "type": "field_input",
        "name": "name",
        "text": "modal"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "id",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_statement",
        "name": "beep"
      }
],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": '#40BF4A',
  "tooltip": "makes a form menu",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  const name = Blockly.JavaScript.valueToCode(block, "name", Blockly.JavaScript.ORDER_ATOMIC)
  const id = Blockly.JavaScript.valueToCode(block, "id", Blockly.JavaScript.ORDER_ATOMIC)
  const title = Blockly.JavaScript.valueToCode(block, "title", Blockly.JavaScript.ORDER_ATOMIC)
  const beep = Blockly.JavaScript.valueToCode(block, "beep", Blockly.JavaScript.ORDER_ATOMIC)
  return `
const ${name} = new modal()
    .setCostomId(${id})
    .setTitle(${title})
${beep}
`};