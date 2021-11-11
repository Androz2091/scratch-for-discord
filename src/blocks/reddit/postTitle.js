
   
import * as Blockly from "blockly/core";

const blockName = "post_Title";

const blockData = {
    "message0": "Post Title",
    "colour": "#40BF4A",
		"args0": [
		],
    "tooltip": null,
    "output": "String",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
  const code = [`postTitle`, Blockly.JavaScript.ORDER_NONE];
  return code;
};
