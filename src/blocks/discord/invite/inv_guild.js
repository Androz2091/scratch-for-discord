import Blockly from "blockly/core";


const blockName = "s4d_inv_guild";

const blockData = {
    "message0": "%{BKY_INVITE_SERVER}",
    "colour": "#D85E47",
    "output": "Server",
    "tooltip": "In invite create/delete",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = ["(invite.guild)", Blockly.JavaScript.ORDER_NONE];
    return code;
};