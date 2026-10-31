import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../../restrictions";
import { PERMISSION_OPTIONS, permissionFlags } from "../permissions";

const blockName = "s4d_member_has_permission";

const blockData = {
    "message0": "%{BKY_MEMBER_HAS_PERMISSION}",
    "args0": [
        {
            "type": "input_value",
            "name": "MEMBER",
            "check": "Member"
        },
        {
            "type": "field_dropdown",
            "name": "PERMISSION",
            "options": PERMISSION_OPTIONS
        }
    ],
    "colour": "#5B80A5",
    "tooltip": "%{BKY_MEMBER_HAS_PERMISSION_TOOLTIP}",
    "output": "Boolean",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function(block) {
    const member = javascriptGenerator.valueToCode(block, "MEMBER", Order.ATOMIC);
    const permission = block.getFieldValue("PERMISSION");
    const code = [ `${member}.permissions.has(Discord.PermissionFlagsBits.${permissionFlags[permission]})`, Order.FUNCTION_CALL ];
    return code;
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_MISSING_MEMBER_HAS_PERMISSION",
        types: [
            "MEMBER"
        ]
    }
]);
