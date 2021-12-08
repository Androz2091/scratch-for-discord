import * as Blockly from "blockly/core";

const blockName = "played-tts";

const blockData = {
    "message0": "Played TTS",
    "args0": [
    ],
    "output": "String",
    "colour": "#4287f5",
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
