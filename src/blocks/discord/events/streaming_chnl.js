import Blockly from "blockly/core";


const blockName = "s4d_streaming_channel";

const blockData = {
    "message0": "streaming channel",
    "colour": "#a55b80",
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
    const code = ["voiceChannel", Blockly.JavaScript.ORDER_NONE];
    return code;
};