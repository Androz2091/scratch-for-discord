import Blockly from "blockly/core";

const blockName = "gsa_modal_text";

const blockData = {
  "message0": "name %1 id %2 label %3 type %4",
  "args0": [
      {
        "type": "field_input",
        "name": "name",
        "text": "modal"
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
        "type": "field_dropdown",
        "name": "type",
        "options": [
          [
            "single line text box",
            "SHORT"
          ],
          [
            "multi line text box ",
            "PARAGRAPH"
          ]
        ]
      }
],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": '#40BF4A',
  "tooltip": "adds a text box, can only be five of these",
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
  const type = Blockly.JavaScript.valueToCode(block, "type", Blockly.JavaScript.ORDER_ATOMIC)
  return [`
const ${name} = new TextInputComponent()
    .setCostomId(${id})
    .setLable(${title})
    .setStyle('${type}')
`, Blockly.JavaScript.ORDER_NONE];};