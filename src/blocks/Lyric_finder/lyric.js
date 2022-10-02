import * as Blockly from "blockly/core";

const blockName = "lyric";

const blockData = {
    "message0": "Lyric",
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
  const code = [`lyrics`, Blockly.JavaScript.ORDER_NONE];
  return code;
};
