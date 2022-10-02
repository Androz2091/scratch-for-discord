import Blockly from "blockly/core";

const blockName = "typing_member";

const blockData = {
    "message0": "Typing member",
    "colour": "#0b409c",
    "output": "Member",
    "tooltip": "The typing member",
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
