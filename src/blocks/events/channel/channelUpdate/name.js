import * as Blockly from "blockly";


const blockName = "cu_name";

const blockData = {
    "message0": "%1 of %2",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "INFO",
            "options": [
                [
                    "name",
                    "name"
                ],
                [
                    "topic",
                    "topic"
                ],
                [
                    "type",
                    "type"
                ],
                [
                    "position",
                    "position"
                ],
                [
                    "bitrate",
                    "bitrate"
                ],
                [
                    "user limit",
                    "userLimit"
                ],
                [
                    "slowmode",
                    "rateLimitPerUser"
                ],
                [
                    "NSFW",
                    "nsfw"
                ],
            ]
        },
        {
            "type": "field_dropdown",
            "name": "CHANNEL",
            "options": [
                [
                    "new channel",
                    "newChannel"
                ],
                [
                    "old channel",
                    "oldChannel"
                ]
            ]
        }
    ],
    "output": "String",
    "colour": "#5BA58C",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const channel = block.getFieldValue("CHANNEL");
    const info = block.getFieldValue("INFO");
    const code = [`${channel}.${info}`, Blockly.JavaScript.ORDER_NONE];
    return code;
};

