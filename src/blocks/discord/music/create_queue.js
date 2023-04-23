import Blockly from "blockly/core";

const blockName = "s4d_create_queue";

const blockData = {
    "message0": "%{BKY_CREATE_QUEUE}",
    "args0": [
        {
            "type": "input_value",
            "name": "GUILD",
            "check": "Server"
        },
        {
            "type": "input_value",
            "name": "CHANNEL",
            "check": "Channel"
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
    const channel = Blockly.JavaScript.valueToCode(block, "CHANNEL", Blockly.JavaScript.ORDER_ATOMIC);
    const server = Blockly.JavaScript.valueToCode(block, "GUILD", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `const queue = s4d.player.createQueue(${server}, {metadata: {channel: ${channel}}, async onBeforeCreateStream(track, source, _queue) {
        if (source === "youtube") {
            return (await playdl.stream(track.url, { discordPlayerCompatibility : true })).stream;
        }
    }
});\n`;
    return code;
};
