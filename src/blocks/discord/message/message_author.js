import Blockly from "blockly/core";

const s4d_message_author = {
    "message0": "%{BKY_MESSAGE_AUTHOR}",
    "colour": "#9966FF",
    "output": "Member",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks["s4d_message_author"] = {
    init: function() {
        this.jsonInit(s4d_message_author);
    }
};

Blockly.JavaScript["s4d_message_author"] = function() {
    const code = ["s4d.message.member", Blockly.JavaScript.ORDER_NONE];
    return code;
};
