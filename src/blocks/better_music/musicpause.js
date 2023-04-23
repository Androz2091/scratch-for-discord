import * as Blockly from "blockly/core";

const blockName = "better_pause";

const blockData = {
    "message0": "pause the player",
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
    const code = `guildQueue.setPaused(true);`;
    return code;
};