import Blockly from "blockly/core";

const blockName = "typing_server";

const blockData = {
    "message0": "Typing server",
    "colour": "#7b3a9c",
    "output": "Server",
    "tooltip": "The server someone is typing in",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = ["s4dTyping.guild", Blockly.JavaScript.ORDER_NONE];
    return code;
};
