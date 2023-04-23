/* eslint-disable */
import Blockly from "blockly/core";

const blockName = "gsa_delete_object_search_moment_searchMoment";
const blockData = {
  "type": "gsa_send_embed",
  "message0": "delete %1 from object %2",
  "args0": [
    {
        "type": "input_value",
        "name": "value",
        "check": "String"
    },
    {
        "type": "input_value",
        "name": "object",
        "check": ["Object", null]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "inputsInline": true,
  "colour": '#BA4A9A',
  "tooltip": "deletes something from an object",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  const v = Blockly.JavaScript.valueToCode(block, "value", Blockly.JavaScript.ORDER_ATOMIC)
  const o = Blockly.JavaScript.valueToCode(block, "object", Blockly.JavaScript.ORDER_ATOMIC)
  return `delete ${o}[String(${v})] \n`;
}
