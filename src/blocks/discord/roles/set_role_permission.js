import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../../restrictions";
import { PERMISSION_OPTIONS, permissionFlags } from "../permissions";

const blockName = "s4d_set_role_permission";

const blockData = {
    "message0": "%{BKY_SET_ROLE_PERMISSION}",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "PERMISSION",
            "options": PERMISSION_OPTIONS
        },
        {
            "type": "input_value",
            "name": "ROLE",
            "check": "Role"
        },
        {
            "type": "field_dropdown",
            "name": "STATE",
            "options": [
                [
                    "%{BKY_PERMISSION_ALLOWED}",
                    "add"
                ],
                [
                    "%{BKY_PERMISSION_DENIED}",
                    "remove"
                ]
            ]
        }
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

javascriptGenerator.forBlock[blockName] = function(block){
    const permission = permissionFlags[block.getFieldValue("PERMISSION")];
    const state = block.getFieldValue("STATE");
    const role = javascriptGenerator.valueToCode(block, "ROLE", Order.NONE);
    // The role's own permissions are read-only: change a copy
    return `await (async (role) => role.setPermissions(new Discord.PermissionsBitField(role.permissions).${state}(Discord.PermissionFlagsBits.${permission})))(${role});\n`;
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_VALID_ROLE",
        types: [
            "ROLE"
        ]
    }
]);
