import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../../restrictions";
import { CHANNEL_PERMISSION_OPTIONS, permissionFlags } from "../permissions";

const blockName = "s4d_set_channel_permission";

const blockData = {
    "message0": "%{BKY_SET_CHANNEL_PERMISSION}",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "PERMISSION",
            "options": CHANNEL_PERMISSION_OPTIONS
        },
        {
            "type": "input_value",
            "name": "TARGET",
            "check": [ "Role", "Member" ]
        },
        {
            "type": "input_value",
            "name": "CHANNEL",
            "check": "Channel"
        },
        {
            "type": "field_dropdown",
            "name": "STATE",
            "options": [
                [
                    "%{BKY_PERMISSION_ALLOWED}",
                    "true"
                ],
                [
                    "%{BKY_PERMISSION_DENIED}",
                    "false"
                ],
                [
                    "%{BKY_PERMISSION_DEFAULT}",
                    "null"
                ]
            ]
        }
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "inputsInline": false,
    "tooltip": "%{BKY_SET_CHANNEL_PERMISSION_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function(block){
    const permission = permissionFlags[block.getFieldValue("PERMISSION")];
    const state = block.getFieldValue("STATE");
    const target = javascriptGenerator.valueToCode(block, "TARGET", Order.ATOMIC);
    const channel = javascriptGenerator.valueToCode(block, "CHANNEL", Order.NONE);
    // Threads take the permissions of their parent channel
    return `await (async (channel) => (channel.isThread() ? channel.parent : channel).permissionOverwrites.edit(${target}, { ${permission}: ${state} }))(${channel});\n`;
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_VALID_ROLE_OR_MEMBER",
        types: [
            "TARGET"
        ]
    },
    {
        type: "notempty",
        message: "RES_PURGE_CHANNEL",
        types: [
            "CHANNEL"
        ]
    }
]);
