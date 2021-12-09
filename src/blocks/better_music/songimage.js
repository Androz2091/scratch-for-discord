import Blockly from "blockly/core";

const blockName = "better_song_thumbnail";

const blockData = {
    "message0": "track thumbnail",
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
    return [`newSong.thumbnail`, Blockly.JavaScript.ORDER_NONE ];
};