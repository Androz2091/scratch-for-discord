import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_set_bot_game";

const blockData = {
    "message0": "%{BKY_SET_BOT_ACTIVITY}",
    "args0": [
        {
            // Projects saved before this field existed get the first option, the old behavior
            "type": "field_dropdown",
            "name": "TYPE",
            "options": [
                [
                    "%{BKY_ACTIVITY_PLAYING}",
                    "Playing"
                ],
                [
                    "%{BKY_ACTIVITY_WATCHING}",
                    "Watching"
                ],
                [
                    "%{BKY_ACTIVITY_LISTENING}",
                    "Listening"
                ],
                [
                    "%{BKY_ACTIVITY_COMPETING}",
                    "Competing"
                ]
            ]
        },
        {
            "type": "input_value",
            "name": "GAME",
            "check": [ "Number", "String" ]
        },
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "%{BKY_SET_BOT_GAME_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function(block){
    const type = block.getFieldValue("TYPE");
    const game = javascriptGenerator.valueToCode(block, "GAME", Order.ATOMIC);
    const code = `s4d.client.user.setActivity(String(${game}), { type: Discord.ActivityType.${type} });\n`;
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
