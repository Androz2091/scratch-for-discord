import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_set_bot_game";

const blockData = {
    "message0": "%{BKY_SET_BOT_GAME}",
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
                    "%{BKY_LISTENING}",
                    "LISTENING"
                ],
                [
                    "%{BKY_WATCHING}",
                    "WATCHING"
                ],
                [
                    "%{BKY_STREAMING}",
                    "STREAMING"
                ],
                [
                    "%{BKY_PLAYING}",
                    "PLAYING"
                ]
            ]
        },
        {
            "type": "field_dropdown",
            "name": "OIFD",
            "options": [
                [
                    "%{BKY_ONLINE}",
                    "online"
                ],
                [
                    "%{BKY_OFFLINE}",
                    "offline"
                ],
                [
                    "%{BKY_IDLE}",
                    "idle"
                ],
                [
                    "%{BKY_DND}",
                    "dnd"
                ]
            ]
        },
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
    const type = block.getFieldValue("TYPE");
    const OIFD = block.getFieldValue("OIFD");
    const game = Blockly.JavaScript.valueToCode(block, "GAME", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `s4d.client.user.setActivity(String(${game}),{status: '${type}', type: '${OIFD}' });\n`;
    return code;
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_MISSING_GAME",
        types: [
            "GAME"
        ]
    }
]);
