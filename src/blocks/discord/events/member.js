import Blockly from "blockly/core";

const blockName = "s4d_update_member";

const blockData = {
    "message0": "Updated member",
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


