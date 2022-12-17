import Blockly from "blockly/core";

const blockName = "reaction_channel";

const blockData = {
    "message0": "Reaction channel",
    "colour": "#A55B80",
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
    const code = ["reaction.message.channel", Blockly.JavaScript.ORDER_NONE];
    return code;
};
