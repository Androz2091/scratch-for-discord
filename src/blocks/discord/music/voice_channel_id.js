import Blockly from "blockly/core";

const blockName = "s4d_voice_channel_id";

const blockData = {
    "message0": "%{BKY_VOICE_CHANNEL_ID}",
    "args0": [
    ],
    "output": "VoiceChannelId",
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
    return ['s4dmessage.member.voice.channelId', Blockly.JavaScript.ORDER_NONE ];
};
