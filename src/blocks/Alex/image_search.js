import * as Blockly from "blockly/core";

const blockName = "get_image";

const blockData = {

  "message0": "Find image with query  %1  then %2 %3",
  "args0": [
    {
      "type": "input_value",
      "name": "query",
      "Check": "String"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "then",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#05a386",
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  const Then = Blockly.JavaScript.statementToCode(block, "then");
  const query = Blockly.JavaScript.valueToCode(block, "query", Blockly.JavaScript.ORDER_ATOMIC);
  const code = `let query = ${query} \n ${Then}`;
  return code;
};
