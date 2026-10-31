import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_delete_role";

const blockData = {
    "message0": "%{BKY_DELETE_ROLE}",
    "args0": [
        {
            "type": "input_value",
            "name": "ROLE",
            "check": "Role"
        }
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "%{BKY_DELETE_ROLE_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function(block){
    const role = javascriptGenerator.valueToCode(block, "ROLE", Order.ATOMIC);
    return `await ${role}.delete();\n`;
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
