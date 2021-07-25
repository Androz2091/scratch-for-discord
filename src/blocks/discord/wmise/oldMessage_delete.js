import * as Blockly from "blockly/core";


const blockName = "s4d_oldmsg_del";

const blockData = {
    "message0": "Delete old message content",
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(){
    const code = `oldMessage.delete()\n`;
    return code;
};


