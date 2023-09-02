import Blockly from "blockly/core";


const blockName = "s4d_join/leave_channel";

const blockData = {
    "message0": "channel",
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
    const code = ["channel", Blockly.JavaScript.ORDER_NONE];
    return code;
};

