import Blockly from "blockly/core";

const blockName = "captcha_image";

const blockData = {
    "message0": "Captcha Image",
    "args0": [
    ],
    "colour": "#187795",
    "output": "Captcha",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = [`new Discord.MessageAttachment(captcha.JPEGStream, "captcha.jpeg") `, Blockly.JavaScript.ORDER_NONE];
    return code;
};