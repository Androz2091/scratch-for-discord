import Blockly from "blockly/core";


const blockName = "button_channel";

const blockData = {
    "message0": "%{BKY_B_CHANNEL}",
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
    const code = ["interaction.channel", Blockly.JavaScript.ORDER_NONE];
    return code;
};