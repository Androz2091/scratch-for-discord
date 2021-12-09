import Blockly from "blockly/core";

const blockName = "better_botvcid";

const blockData = {
    "message0": "Bot Voice channel",
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