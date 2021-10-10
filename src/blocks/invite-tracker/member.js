import Blockly from "blockly/core";

const blockName = "Member";

const blockData = {
    "message0": "Member",
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
    const code = ["member", Blockly.JavaScript.ORDER_NONE];
    return code;
};
