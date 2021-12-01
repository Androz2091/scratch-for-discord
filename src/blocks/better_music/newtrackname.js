import Blockly from "blockly/core";

const blockName = "new_track_name";

const blockData = {
    "message0": "Name of the new track",
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
    return [`newSong`, Blockly.JavaScript.ORDER_NONE ];
};
