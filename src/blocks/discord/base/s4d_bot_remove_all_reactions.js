import * as Blockly from "blockly/core";


const blockName = "s4d_bot_cpus";

const blockData = {
    "message0": "Remove All reactions",
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
    const code = `s4dmessage.reactions.removeAll();\n`;
    return code;
};


