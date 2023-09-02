import Blockly from "blockly/core";

const blockName = "s4d_typing_author";

const blockData = {
    "message0": "%{BKY_TYPING_AUTHOR}",
    "output": "Member",
    "colour": "#187795",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = ["s4dTyping.member", Blockly.JavaScript.ORDER_NONE];
    return code;
};
