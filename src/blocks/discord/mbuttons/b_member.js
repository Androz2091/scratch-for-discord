import Blockly from "blockly/core";


const blockName = "button_author";

const blockData = {
    "message0": "%{BKY_B_CLICKER}",
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
    const code = ["interaction.member.user", Blockly.JavaScript.ORDER_NONE];
    return code;
};
