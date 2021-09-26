import Blockly from "blockly/core";


const blockName = "m_member";

const blockData = {
    "message0": "context member",
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
    const code = ["interaction.member", Blockly.JavaScript.ORDER_NONE];
    return code;
};
