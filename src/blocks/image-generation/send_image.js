import * as Blockly from "blockly/core";
import "@blockly/field-grid-dropdown";

const blockName = "send_on_channel";

const blockData = {
    "message0": "send in channel %1 image %2",
    "args0": [
      {
        "type":"input_value",
        "name":"CHANNEL",
        "check":"Channel"
      },
			{
        "type":"input_value",
        "name":"IMAGE",
        "check":"image"
      },
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
		"inputsInline": true,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
    const channel = Blockly.JavaScript.valueToCode(block, "CHANNEL", Blockly.JavaScript.ORDER_ATOMIC);
		const image = Blockly.JavaScript.valueToCode(block, "IMAGE", Blockly.JavaScript.ORDER_ATOMIC);
let code = `${channel}.send({files:[${image}]});\n`;
return code
};