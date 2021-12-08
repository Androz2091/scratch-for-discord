import * as Blockly from "blockly/core";

const blockName = "search_image";

const blockData = {
  "type": "g",
  "message0": "URL of image  %1",
  "args0": [
    {
      "type": "input_value",
      "name": "query",
      "check": "String"
    }
  ],
  "output": "url",
  "colour": "#06ccb2",
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
const query = Blockly.JavaScript.valueToCode(block, "query", Blockly.JavaScript.ORDER_ATOMIC);
  const code =  [`await image_finder.find(${query})`, Blockly.JavaScript.ORDER_NONE ];
  return code;
};
