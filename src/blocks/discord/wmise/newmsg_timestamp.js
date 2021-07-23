import * as Blockly from "blockly/core";


const blockName = "newmsg_timestamp";

const blockData = {
    "message0": "timestamp",
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
    const code = ["newMessage.editedAt", Blockly.JavaScript.ORDER_NONE];
    return code;
};

