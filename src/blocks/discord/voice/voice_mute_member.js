import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_voice_mute_member";

const blockData = {
    "message0": "%{BKY_VOICE_MUTE_MEMBER}",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "ACTION",
            "options": [
                [
                    "%{BKY_VOICE_MUTE}",
                    "setMute(true)"
                ],
                [
                    "%{BKY_VOICE_UNMUTE}",
                    "setMute(false)"
                ],
                [
                    "%{BKY_VOICE_DEAFEN}",
                    "setDeaf(true)"
                ],
                [
                    "%{BKY_VOICE_UNDEAFEN}",
                    "setDeaf(false)"
                ]
            ]
        },
        {
            "type": "input_value",
            "name": "MEMBER",
            "check": "Member"
        }
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "%{BKY_VOICE_MUTE_MEMBER_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function(block){
    const action = block.getFieldValue("ACTION");
    const member = javascriptGenerator.valueToCode(block, "MEMBER", Order.ATOMIC);
    return `await ${member}.voice.${action};\n`;
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_VALID_MEMBER",
        types: [
            "MEMBER"
        ]
    }
]);
