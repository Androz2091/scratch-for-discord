import Blockly from "blockly/core";

const blockName = "better_vcid";

const blockData = {
    "message0": "Voice channel id",
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