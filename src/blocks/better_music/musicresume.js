import * as Blockly from "blockly/core";

const blockName = "better_resume";

const blockData = {
    "message0": "resume the player",
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
    const code = `guildQueue.setPaused(false);\n`;
    return code;
};