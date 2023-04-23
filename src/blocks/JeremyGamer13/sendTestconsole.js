import Blockly from "blockly/core";

const blockName = "jg_testblock";

const blockData = {
    "message0": "%{BKY_JGPRINTTEST}",
    "args0": [],
    "colour": "#FFAA00",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Sends test text to console, don't use this block.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    return `console.log('Test block, it worked bro')\n`;
}
