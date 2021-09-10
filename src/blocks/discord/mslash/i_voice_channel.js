import Blockly from "blockly/core";


const blockName = "interaction_voice_channel";

const blockData = {
    "message0": "interaction member voice channel",
    "colour": "#D85E47",
    "output": "VoiceChannel",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = ["member.voice.channel", Blockly.JavaScript.ORDER_NONE];
    return code;
};