import * as Blockly from "blockly/core";

const blockName = "post_Image";

const blockData = {
    "message0": "Post Image",
    "colour": "#5ba58b",
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
  const code = [`postImage`, Blockly.JavaScript.ORDER_NONE];
  return code;
};
