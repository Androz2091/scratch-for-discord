import Blockly from "blockly/core";

const blockName = "Server";

const blockData = {
    "message0": "Server",
    "colour": "#187795",
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
    const code = ["member.guild", Blockly.JavaScript.ORDER_NONE];
    return code;
};
