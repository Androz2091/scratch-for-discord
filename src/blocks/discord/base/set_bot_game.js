import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_set_bot_game";

const blockData = {
    "message0": "%{BKY_SET_BOT_GAME}",
    "args0": [{
            "type": "input_value",
            "name": "GAME",
            "check": ["Number", "String"]
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
                    "%{BKY_COMPETING}",
                    "COMPETING"
                ],
                [
                    "%{BKY_PLAYING}",
                    "PLAYING"
                ]
            ]
        },
        {
            "type": "field_dropdown",
            "name": "STATUS",
            "options": [
                [
                    "%{BKY_ONLINE}",
                    "online"
                ],
                [
                    "%{BKY_IDLE}",
                    "idle"
                ],
                [
                    "%{BKY_DND}",
                    "dnd"
                ],
                [
                    "%{BKY_INVIS}",
                    "invisible"
                ]
            ]
        },
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "inputsInline": true,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const type = block.getFieldValue("TYPE");
    const game = Blockly.JavaScript.valueToCode(block, "GAME", Blockly.JavaScript.ORDER_ATOMIC);
    const status = block.getFieldValue("STATUS");
    const code = `s4d.client.user.setPresence({status: "${status}",activity:{name:${game},type:"${type}"}});; \n`;
    return code;
};

registerRestrictions(blockName, [{
    type: "notempty",
    message: "RES_MISSING_GAME",
    types: [
        "GAME"
    ]
}]);
