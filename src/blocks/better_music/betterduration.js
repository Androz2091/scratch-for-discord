import Blockly from "blockly/core";

const blockName = "better_duration";

const blockData = {
    "message0": "Duration of the track",
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
    return [`newSong.duration`, Blockly.JavaScript.ORDER_NONE ];
};
