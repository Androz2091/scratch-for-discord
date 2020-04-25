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
    const game = Blockly.JavaScript.valueToCode(block, "GAME", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `s4d.client.user.setActivity(String(${game}));\n`;
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
