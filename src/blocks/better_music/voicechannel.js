import Blockly from "blockly/core";

const blockName = "better_voice_channel";

const blockData = {
    "message0": "Voice Channel",
    "args0": [
    ],
    "output": "VoiceChannel",
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
    return ['s4dmessage.member.voice.channel', Blockly.JavaScript.ORDER_NONE ];
};