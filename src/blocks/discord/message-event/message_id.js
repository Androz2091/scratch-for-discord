import * as Blockly from "blockly/core";

const blockName = "s4d_message_id";

const blockData = {
    "message0": "%{BKY_MESSAGE_ID}",
    "colour": "#5BA58C",
    "tooltip": "",
    "output": "String",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = ["s4dmessage.id", Blockly.JavaScript.ORDER_NONE];
    return code;
};