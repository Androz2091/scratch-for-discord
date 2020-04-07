import * as Blockly from "blockly";

const s4d_message_content = {
    "message0": "%{BKY_MESSAGE_CONTENT}",
    "colour": "#9966FF",
    "tooltip": "",
    "output": "String",
    "helpUrl": ""
};

Blockly.Blocks["s4d_message_content"] = {
    init: function() {
        this.jsonInit(s4d_message_content);
    }
};

Blockly.JavaScript["s4d_message_content"] = function() {
    const code = ["s4d.message.content", Blockly.JavaScript.ORDER_NONE];
    return code;
};
