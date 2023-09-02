import Blockly from "blockly/core";


const blockName = "s4d_update_user";

const blockData = {
    "message0": "Updated user",
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
    const code = ["user", Blockly.JavaScript.ORDER_NONE];
    return code;
};

