import Blockly from "blockly/core";

const blockName = "InviteMember";

const blockData = {
    "message0": "Inviter",
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
    const code = ["Inviter", Blockly.JavaScript.ORDER_NONE];
    return code;
};
