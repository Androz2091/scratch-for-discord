import Blockly from "blockly/core";

const blockName = "s4d_mentioned_role";

const blockData = {
    "message0": "%{BKY_MENTIONED_ROLE}",
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
    const code = [`s4dmessage.mentions.roles.first()`, Blockly.JavaScript.ORDER_NONE];
    return code;
};