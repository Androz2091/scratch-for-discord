import Blockly from "blockly/core";

const blockName = "retro_track_channel";

const blockData = {
    "message0": "Track channel",
    "args0": [
    ],
    "output": "Channel",
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
    return [`queue.data.channel`, Blockly.JavaScript.ORDER_NONE ];
};