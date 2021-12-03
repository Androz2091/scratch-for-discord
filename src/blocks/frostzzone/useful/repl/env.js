import * as Blockly from "blockly/core";

const blockName = "frost_env";
function colourRandom() {
  var num = Math.floor(Math.random() * Math.pow(2, 24));
  return '#' + ('00000' + num.toString(16)).substr(-6);
}
const blockData = {
    "message0": "process.env. %1",
    "colour": (colourRandom()),
		"args0": [
        {
          "type": "input_value",
          "name": "VALUE",
          "check": "String"
        },
		],
    "tooltip": null,
    "output": "Env",
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
  const code = [`process.env.${replacedValue}`, Blockly.JavaScript.ORDER_NONE];
  return code;
};
