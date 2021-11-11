import Blockly from "blockly/core";

const blockName = "vc_channel";

const blockData = {
    "message0": "Together voice channel",
    "args0": [
    ],
    "output": "VoiceChannel",
    "colour": "#40BF4A",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = ['s4dmessage.member.voice.channel.id', Blockly.JavaScript.ORDER_NONE ];
    return code;
};
