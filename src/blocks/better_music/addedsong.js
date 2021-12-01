import Blockly from "blockly/core";

const blockName = "added_song_name";

const blockData = {
    "message0": "Name of the added track",
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
