import Blockly from "blockly/core";

const blockName = "gsa_object_has_value_search_moment";

const blockData = {
  "message0": "object %2 has %1?",
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
  "output": "Boolean",
  "inputsInline": true,
  "colour": '#BA4A9A',
  "tooltip": "checks if an object has somthing",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  return [`${Blockly.JavaScript.statementToCode(block, "object", Blockly.JavaScript.ORDER_ATOMIC)}.hasOwnProperty(String(${Blockly.JavaScript.statementToCode(block, "value", Blockly.JavaScript.ORDER_ATOMIC)}))`, Blockly.JavaScript.ORDER_ATOMIC];
}