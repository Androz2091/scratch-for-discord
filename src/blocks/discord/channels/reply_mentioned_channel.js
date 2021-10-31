import Blockly from "blockly/core";

const blockName = "reply_mentioned_channel";

const blockData = {
    "message0": "answer mentioned channel",
    "colour": "#187795",
    "tooltip": "",
    "output": "Channel",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = [`s4d.message.mentions.channels.first()`, Blockly.JavaScript.ORDER_NONE];
    return code;
};