import * as Blockly from "blockly/core";

const blockName = "load_gif";

const blockData = {
    "message0": "load gif %1",
    "args0": [
        {
          "type": "input_value",
          "name": "TOLOAD",
          "check": [ "ImageBuffGif" ]
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
    const code = [`new Discord.MessageAttachment(${toload}, "image.gif")`, Blockly.JavaScript.ORDER_NONE];
    return code;
};

