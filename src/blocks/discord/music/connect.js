import Blockly from "blockly/core";

const blockName = "s4d_connect";

const blockData = {
    "message0": "%{BKY_CONNECT}",
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
    const code = `await queue.connect(${voice})\n;`;
    return code;
};
