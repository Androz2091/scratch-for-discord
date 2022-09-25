import * as Blockly from "blockly/core";

const blockName = "better_skip";

const blockData = {
    "message0": "Skip to the next song",
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
    const code = `guildQueue.skip();`;
    return code;
};