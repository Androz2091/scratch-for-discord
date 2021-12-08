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
  "nextStatement": null,
  "colour": "#04ccab",
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
const query = Blockly.JavaScript.valueToCode(block, "query", Blockly.JavaScript.ORDER_ATOMIC);
  const code =  [`query = ${query}`, Blockly.JavaScript.ORDER_NONE ];
  return code;
};
