import * as Blockly from "blockly/core";

const blockName = "url_image";

const blockData = {
 
  "message0": "Image URL",
  "name": "url",
  "output": "url",
  "colour": "#04ccab",
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function () {  
const code = [`await image_finder.find(query)`, Blockly.JavaScript.ORDER_NONE];
  return code;
};

