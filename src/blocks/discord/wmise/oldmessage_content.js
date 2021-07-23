import * as Blockly from "blockly/core";


const blockName = "s4d_oldmessage_content";

const blockData = {
    "message0": "Old Message content",
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
    const code = ["oldMessage.content", Blockly.JavaScript.ORDER_NONE];
    return code;
};

