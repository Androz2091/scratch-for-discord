import Blockly from "blockly/core";

const blockName = "s4d_message_guild";

const blockData = {
    "message0": "%{BKY_MESSAGE_GUILD}",
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
    const code = ["s4dmessage.guild", Blockly.JavaScript.ORDER_NONE];
    return code;
};
