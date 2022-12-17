import * as Blockly from "blockly/core";

const blockName = "s4d_get_string_of_data";

const blockData = {
    "message0": "%{BKY_GET_STRING_OF_DATA}",
    "colour": "#40BF4A",
		"args0": [
        {
          "type": "input_value",
          "name": "VALUE",
          "check": [ "Number", "String" ]
        },
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

Blockly.JavaScript[blockName] = function(block) {
	const value = Blockly.JavaScript.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_ATOMIC);
	const replacedValue = value.replace("'",'').replace("'",'')
  const code = [`data.${replacedValue}`, Blockly.JavaScript.ORDER_NONE];
  return code;
};
