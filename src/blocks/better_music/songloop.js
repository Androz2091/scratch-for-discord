import * as Blockly from "blockly/core";

const blockName = "better_loop_song";

const blockData = {
    "message0": "Loop the current song",
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
    const code = `guildQueue.setRepeatMode(RepeatMode.SONG);`;
    return code;
};