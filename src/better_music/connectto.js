import Blockly from "blockly/core";

const blockName = "discord_connect";

const blockData = {
    "message0": "Connect to %1",
    "args0": [
        {
            "type": "input_value",
            "name": "VOICECHANNEL",
            "check": "VoiceChannel"
        },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#4C97FF",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const voice = Blockly.JavaScript.valueToCode(block, "VOICECHANNEL", Blockly.JavaScript.ORDER_ATOMIC) || 's4dmessage.member.voice.channel';
    const code = `await queue.join(${voice});\n;`;
    return code;
};