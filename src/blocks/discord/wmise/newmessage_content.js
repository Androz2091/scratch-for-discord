import * as Blockly from "blockly/core";


const blockName = "s4d_newmessage_content";

const blockData = {
    "message0": "New Message content",
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
    const code = ["newMessage.content", Blockly.JavaScript.ORDER_NONE];
    return code;
};

