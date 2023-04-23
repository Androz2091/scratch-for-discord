import * as Blockly from "blockly/core";

const blockName = "better_shuffle";

const blockData = {
    "message0": "Shuffle the queue",
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
    const code = `guildQueue.shuffle();`;
    return code;
};