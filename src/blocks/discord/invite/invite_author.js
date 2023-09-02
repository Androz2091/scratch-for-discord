import Blockly from "blockly/core";

const blockName = "s4d_inviter";

const blockData = {
    "message0": "%{BKY_INVITE_AUTHOR}",
    "colour": "#187795",
    "output": "Member",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = ["invite.inviter", Blockly.JavaScript.ORDER_NONE];
    return code;
};  
