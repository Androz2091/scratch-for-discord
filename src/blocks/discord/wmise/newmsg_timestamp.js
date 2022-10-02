import * as Blockly from "blockly/core";


const blockName = "newmsg_timestamp";

const blockData = {
    "message0": "date of message edit",
    "colour": "#5BA58C",
    "tooltip": "The time that the message was edited at.",
    "output": "String",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function () {
    const code = ["newMessage.editedAt", Blockly.JavaScript.ORDER_NONE];
    return code;
};
