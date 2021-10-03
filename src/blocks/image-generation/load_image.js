import * as Blockly from "blockly/core";

const blockName = "load_image";

const blockData = {
    "message0": "load image %1",
    "args0": [
        {
          "type": "input_value",
          "name": "TOLOAD",
          "check": [ "ImageBuffPng" ]
        },
    ],
    "colour": "#4C97FF",
    "output":"image",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
	const toload = Blockly.JavaScript.valueToCode(block, "TOLOAD", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`new Discord.MessageAttachment(${toload}, "image.png")`, Blockly.JavaScript.ORDER_NONE];
    return code;
};

