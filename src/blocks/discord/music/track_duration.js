import Blockly from "blockly/core";

const blockName = "s4d_track_duration";

const blockData = {
    "message0": "%{BKY_TRACK_DURATION}",
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
    return [`track.duration`, Blockly.JavaScript.ORDER_NONE ];
};
