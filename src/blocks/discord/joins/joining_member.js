import Blockly from "blockly/core";

const blockName = "s4d_joining_member";

const blockData = {
    "message0": "%{BKY_JOINING_MEMBER}",
    "colour": "#9966FF",
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
    const code = ["s4d.memberJoining", Blockly.JavaScript.ORDER_NONE];
    return code;
};
