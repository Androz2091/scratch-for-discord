import Blockly from "blockly/core";


const blockName = "cd_channel";

const blockData = {
    "message0": "deleted channel",
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
    const code = ["channel.channel", Blockly.JavaScript.ORDER_NONE];
    return code;
};