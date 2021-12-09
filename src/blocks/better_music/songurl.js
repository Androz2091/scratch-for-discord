import Blockly from "blockly/core";

const blockName = "better_track_url";

const blockData = {
    "message0": "Song URL",
    "args0": [
    ],
    "output": "String",
    "colour": "#a55b80",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    return [`newSong.url`, Blockly.JavaScript.ORDER_NONE ];
};