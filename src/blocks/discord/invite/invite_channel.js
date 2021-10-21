import Blockly from "blockly/core";


const blockName = "s4d_inv_channel";

const blockData = {
    "message0": "%{BKY_INVITE_CHANNEL}",
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
    const code = ["invite.channel", Blockly.JavaScript.ORDER_NONE];
    return code;
};