import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";

const blockName = "s4d_create_channel";

const blockData = {
    "message0": "%{BKY_CREATE_CHANNEL}",
    "args0": [
        {
            "type": "input_value",
            "name": "NAME",
            "check": [ "String", "Number" ]
        },
        {
            "type": "input_value",
            "name": "SERVER",
            "check": [ "Server" ]
        },
        {
            "type": "field_dropdown",
            "name": "TYPE",
            "options": [
                [
                    "%{BKY_TEXT}",
                    "TEXT"
                ],
                [
                    "%{BKY_VOICE}",
                    "VOICE"
                ],
                [
                    "%{BKY_CATEGORY}",
                    "CATEGORY"
                ]
            ]
        }
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "inputsInline": false,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function(block){
    const type = block.getFieldValue("TYPE");
    const name = javascriptGenerator.valueToCode(block, "NAME", Order.ATOMIC);
    const server = javascriptGenerator.valueToCode(block, "SERVER", Order.ATOMIC);
    const channelType = { TEXT: "GuildText", VOICE: "GuildVoice", CATEGORY: "GuildCategory" }[type];
    return `await ${server}.channels.create({ name: String(${name}), type: Discord.ChannelType.${channelType} });\n`;
};
