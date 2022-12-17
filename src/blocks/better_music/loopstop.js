import * as Blockly from "blockly/core";

const blockName = "loop_stop";

const blockData = {
    "message0": "Stop the loop",
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
    const code = `guildQueue.setRepeatMode(RepeatMode.DISABLED);`;
    return code;
};