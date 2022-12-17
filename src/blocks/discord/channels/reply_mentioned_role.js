import Blockly from "blockly/core";

const blockName = "reply_mentioned_role";

const blockData = {
    "message0": "answer mentioned role",
    "colour": "#187795",
    "tooltip": "",
    "output": "Role",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = [`s4d.message.mentions.roles.first()`, Blockly.JavaScript.ORDER_NONE];
    return code;
};