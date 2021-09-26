import Blockly from "blockly/core";

const blockName = "s4d_track_url";

const blockData = {
    "message0": "%{BKY_TRACK_URL}",
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
    return [`track.url`, Blockly.JavaScript.ORDER_NONE ];
};
