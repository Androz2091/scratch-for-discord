/* eslint-disable */
import Blockly from "blockly/core";

const blockName = "gsa_convert_parse_json_so_it_becomes_list_or_object";
const blockData = {
  "message0": "convert json string %1 to object/list",
  "args0": [
    {
      "type": "input_value",
      "name": "message",
      "check": 'string'
    }
  ],
  "output": ["Object", "Array", "List"],
  "inputsInline": true,
  "colour": '#BA4A9A',
  "tooltip": "does what it says",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  const message = Blockly.JavaScript.valueToCode(block, "message", Blockly.JavaScript.ORDER_ATOMIC)
  return `JSON.parse(${message})`;
}