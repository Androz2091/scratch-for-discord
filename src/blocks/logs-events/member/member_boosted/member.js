import Blockly from "blockly/core";

const blockName = "member";

const blockData = {
    "message0": "member",
    "output": "Member",
    "colour": "#5BA58C",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
        const code = ["member.user", Blockly.JavaScript.ORDER_NONE];
        return code;
};