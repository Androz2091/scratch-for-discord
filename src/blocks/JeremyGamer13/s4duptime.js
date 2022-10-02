import Blockly from "blockly/core";

const blockName = "jg_s4duptime";
const blockData = {
    "message0": "bot uptime",
    "inputsInline": true,
    "colour": "#4C97FF",
    "args0": [],
    "output": "Number",
    "tooltip": "How long the bot has been up for in milliseconds.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = [`s4d.client.uptime`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
