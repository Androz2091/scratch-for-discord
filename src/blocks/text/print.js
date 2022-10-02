import Blockly from "blockly/core";

const blockName = "s4d_print";

const blockData = {
    "message0": "%{BKY_PRINT}",
    "args0": [
				{
          "type": "input_value",
          "name": "VALUE",
          "check": [ "Number", "String" ]
        },
    ],
    "colour": "#5BA55B",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
		const value = Blockly.JavaScript.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_ATOMIC);
    return `console.log(${value})\n`;
};
