import * as Blockly from "blockly/core";

const blockName = "temp_member_name";

const blockData = {
    "message0": "name of channel creator",
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
  const code = [`s4dmember.user.username`, Blockly.JavaScript.ORDER_NONE];
  return code;
};
