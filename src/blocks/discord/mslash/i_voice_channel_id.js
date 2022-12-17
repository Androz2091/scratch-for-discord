import Blockly from "blockly/core";


const blockName = "interaction_voice_channel_id";

const blockData = {
    "message0": "interaction member voice channel id",
    "colour": "#D85E47",
    "output": "VoiceChannelId",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = ["member.voice.channelId", Blockly.JavaScript.ORDER_NONE];
    return code;
};