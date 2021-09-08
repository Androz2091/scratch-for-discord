import * as Blockly from "blockly/core";

const blockName = "s4d_return";

const blockData = {
    "message0": "%{BKY_RETURN}",
    "args0": [
    ],
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
    return `return\n`;
};