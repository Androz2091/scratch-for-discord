import Blockly from "blockly/core";


const blockName = "newmsg_channel";

const blockData = {
    "message0": "%{BKY_N_C}",
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
    const code = ["newMessage.channel", Blockly.JavaScript.ORDER_NONE];
    return code;
};
