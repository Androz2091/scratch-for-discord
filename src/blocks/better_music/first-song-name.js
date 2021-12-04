import Blockly from "blockly/core";

const blockName = "song-first";

const blockData = {
    "message0": "First song name",
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
    return [`song`, Blockly.JavaScript.ORDER_NONE ];
};