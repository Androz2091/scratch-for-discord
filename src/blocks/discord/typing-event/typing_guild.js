import Blockly from "blockly/core";


const blockName = "s4d_typing_server";

const blockData = {
    "message0": "%{BKY_TYPING_SERVER}",
    "colour": "#D85E47",
    "output": "Server",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = ["s4dTyping.guild", Blockly.JavaScript.ORDER_NONE];
    return code;
};