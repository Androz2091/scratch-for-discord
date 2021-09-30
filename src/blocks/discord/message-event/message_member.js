import Blockly from "blockly/core";

const blockName = "s4d_message_member";

const blockData = {
    "message0": "%{BKY_MESSAGE_MEMBER}",
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
    const code = ["s4dmessage.member", Blockly.JavaScript.ORDER_NONE];
    return code;
};

