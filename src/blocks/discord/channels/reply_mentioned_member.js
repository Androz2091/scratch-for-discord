import Blockly from "blockly/core";

const blockName = "reply_mentioned_member";

const blockData = {
    "message0": "answer mentioned member",
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
    const code = [`s4d.message.mentions.members.first()`, Blockly.JavaScript.ORDER_NONE];
    return code;
};