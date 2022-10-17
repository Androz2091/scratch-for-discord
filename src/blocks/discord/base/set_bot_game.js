import * as Blockly from "blockly/core";

const blockName = "s4d_set_bot_game";

const blockData = {
    "message0": "set bot status to %3 with custom status %1 of type %2",
    "args0": [
        {
            "type": "input_value",
            "name": "GAME",
            "check": [ "Number", "String" ]
        },
        {
            "type": "field_dropdown",
            "name": "TYPE",
            "options": [
                [
                    "Listening",
                    "LISTENING"
                ],
                [
                    "Watching",
                    "WATCHING"
                ],
                [
                    "Competing",
                    "COMPETING"
                ],
                [
                    "Playing",
                    "PLAYING"
                ]
            ]
        },
        {
            "type": "field_dropdown",
            "name": "OIFD",
            "options": [
                [
                    "Online",
                    "online"
                ],
                [
                    "Offline",
                    "offline"
                ],
                [
                    "Idle",
                    "idle"
                ],
                [
                    "Do Not Disturb",
                    "dnd"
                ]
            ]
        },
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "inputsInline": true,
    "tooltip": "Set your bot's game/status.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
    const type = block.getFieldValue("TYPE");
    const game = Blockly.JavaScript.valueToCode(block, "GAME", Blockly.JavaScript.ORDER_ATOMIC);
    const OIFD =  block.getFieldValue("OIFD");
    const code = `s4d.client.user.setPresence({status: "${OIFD}",activities:[{name:${game},type:"${type}"}]}); \n`;
    return code;
};
