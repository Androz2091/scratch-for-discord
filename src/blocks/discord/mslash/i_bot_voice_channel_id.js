import Blockly from "blockly/core";


const blockName = "bot_voice_channel_id";

const blockData = {
    "message0": "bot voice channel id",
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
    const code = ["interaction.guild.me.voice.channelId", Blockly.JavaScript.ORDER_NONE];
    return code;
};