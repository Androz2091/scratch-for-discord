import Blockly from "blockly/core";

const blockName = "s4d_bot_voice_channel";

const blockData = {
    "message0": "%{BKY_BOT_VOICE_CHANNEL}",
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
    return ['s4dmessage.guild.me.voice.channelId', Blockly.JavaScript.ORDER_NONE ];
};
