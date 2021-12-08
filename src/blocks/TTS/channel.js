import Blockly from "blockly/core";

const blockName = "tts_channel";

const blockData = {
    "message0": "Voice Channel",
    "args0": [
    ],
    "output": "VoiceChannel",
    "colour": "#5153c2",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    s4dmessage.member.voice.channelId
};
