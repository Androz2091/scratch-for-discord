import Blockly from "blockly/core";


const blockName = "new_message_server";

const blockData = {
    "message0": "New Message server",
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
    const code = ["newMessage.guild", Blockly.JavaScript.ORDER_NONE];
    return code;
};

