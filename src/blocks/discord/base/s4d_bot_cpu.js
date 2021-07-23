import * as Blockly from "blockly/core";

const blockName = "s4d_bot_cpu";

const blockData = {
    "message0": "Not working! - bot cpu usage",
    "colour": "#5b67ff",
    "tooltip": "Hello this block is in development",
    "output": "Number",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = ["message.reactions.removeAll()", Blockly.JavaScript.ORDER_NONE];
    return code;
};
