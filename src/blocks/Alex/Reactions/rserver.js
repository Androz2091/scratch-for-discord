import Blockly from "blockly/core";

const blockName = "reaction_server";

const blockData = {
    "message0": "Reaction server",
    "colour": "#D85E47",
    "output": "Server",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = ["reaction.message.guild", Blockly.JavaScript.ORDER_NONE];
    return code;
};
