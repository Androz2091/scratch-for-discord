import Blockly from "blockly/core";

const blockName = "s4d_message_channel";

const blockData = {
    "message0": "%{BKY_MESSAGE_CHANNEL}",
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
    const code = ["s4dmessage.channel", Blockly.JavaScript.ORDER_NONE];
    return code;
};
