import * as Blockly from "blockly/core";

const blockName = "better_stop";

const blockData = {
    "message0": "Stop the queue and disconnect",
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
    const code = `guildQueue.stop();`;
    return code;
};