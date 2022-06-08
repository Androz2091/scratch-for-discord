import Blockly from "blockly/core";

const blockName = "jg_base_bot";

const blockData = {
    "message0": "bot",
    "args0": [],
    "colour": "#5b67a5",
    "output": ["Member", "User"],
    "tooltip": "The bot itself, as a user.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function () {
    const code = [`s4d.client.user`, Blockly.JavaScript.ORDER_NONE];
    return code;
}