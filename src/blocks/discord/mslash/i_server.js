import Blockly from "blockly/core";


const blockName = "interaction_guild";

const blockData = {
    "message0": "%{BKY_S_GUILD}",
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
    const code = ["interaction.guild", Blockly.JavaScript.ORDER_NONE];
    return code;
};