import Blockly from "blockly/core";

const blockName = "typing_channel";

const blockData = {
    "message0": "Typing channel",
    "colour": "#1392ed",
    "output": "Channel",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = ["s4dTyping.channel", Blockly.JavaScript.ORDER_NONE];
    return code;
};
