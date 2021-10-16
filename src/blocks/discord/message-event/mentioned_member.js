import Blockly from "blockly/core";

const blockName = "s4d_mentioned_member";

const blockData = {
    "message0": "%{BKY_MENTIONED_MEMBER}",
    "colour": "#187795",
    "tooltip": "",
    "output": "Member",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = [`s4dmessage.mentions.members.first().user`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
