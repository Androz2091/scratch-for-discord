import * as Blockly from "blockly/core";


const blockName = "return";

const blockData = {
    "message0": "return",
    "colour": "#D14081",
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
    const code = `return\n`;
    return code;
};


