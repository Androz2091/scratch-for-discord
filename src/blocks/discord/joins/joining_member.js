import Blockly from "blockly/core";

const s4d_joining_member = {
    "message0": "%{BKY_JOINING_MEMBER}",
    "colour": "#9966FF",
    "output": "Member",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks["s4d_joining_member"] = {
    init: function() {
        this.jsonInit(s4d_joining_member);
    }
};

Blockly.JavaScript["s4d_joining_member"] = function() {
    const code = ["s4d.memberJoining", Blockly.JavaScript.ORDER_NONE];
    return code;
};
