import Blockly from "blockly/core";

const blockName = "s4d_voice_channel";

const blockData = {
    "message0": "%{BKY_VOICE_CHANNEL_C}",
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
