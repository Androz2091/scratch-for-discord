import Blockly from "blockly/core";

const s4d_mentioned_member = {
    "message0": "%{BKY_MENTIONED_MEMBER}",
    "colour": "#9966FF",
    "tooltip": "",
    "output": "Member",
    "helpUrl": ""
};

Blockly.Blocks["s4d_mentioned_member"] = {
    init: function() {
        this.jsonInit(s4d_mentioned_member);
    }
};

Blockly.JavaScript["s4d_mentioned_member"] = function() {
    const code = [`s4d.message.mentions.members.first()`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
