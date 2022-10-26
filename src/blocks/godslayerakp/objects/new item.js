// for the love of god vercel DO SOMETHING
import Blockly from "blockly/core";

const blockName = "gsa_new_object_item_creator_empty_search_moment_searchMoment";
const blockData = {
  "type": "gsa_send_embed",
  "message0": "add %1 with value %2",
  "args0": [
    {
      "type": "field_input",
      "name": "name"
    },
    {
      "type": "input_value",
      "name": "value"
    }
  ],
  "previousStatement": "object",
  "nextStatement": "object",
  "inputsInline": true,
  "colour": '#BA4A9A',
  "tooltip": "used in \"create new object with\" block to add items to it",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  const message = Blockly.JavaScript.valueToCode(block, "value", Blockly.JavaScript.ORDER_ATOMIC)
  const color = block.getFieldValue("name")
  return `"${color}": ${message},`;
}
