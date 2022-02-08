import * as Blockly from "blockly/core";

const blockName = "frost_created_cat";

const blockData = {
  "message0": "Created Category/Channel",
  "output": ["Category", "Channel"],
  "colour": "#a55b80",
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function () {
  var code = 'cat';
  return [code, Blockly.JavaScript.ORDER_NONE];
};