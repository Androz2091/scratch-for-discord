import Blockly from "blockly/core";

const blockName = "captcha_value";

const blockData = {
    "message0": "Captcha Value",
    "args0": [
    ],
    "colour": "#187795",
    "output": "String",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = [`captcha.value`, Blockly.JavaScript.ORDER_NONE];
    return code;
};