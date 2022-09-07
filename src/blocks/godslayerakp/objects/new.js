import Blockly from "blockly/core";

const blockName = "gsa_new_object_creator_empty_search_moment_searchMoment";

const blockData = {
  "message0": "create new object with %2 %1",
  "args0": [
    {
      "type": "input_statement",
      "check": "object",
      "name": "STATEMENTS"
    },
    {
      "type": "input_dummy"
    }
  ],
  "output": "Object",
  "inputsInline": false,
  "colour": '#BA4A9A',
  "tooltip": "must be in a make embed with name block",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  return [`{${Blockly.JavaScript.statementToCode(block, "STATEMENTS", Blockly.JavaScript.ORDER_ATOMIC)}}`, Blockly.JavaScript.ORDER_ATOMIC];
}