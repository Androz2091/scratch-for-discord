import Blockly from "blockly/core";
const blockName = "s4d_member_banner";

const blockData = {
    "message0": "Member Banner URL",
    "colour": "#187795",
    "output": "String",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = ["banner", Blockly.JavaScript.ORDER_NONE];
    return code;
};
