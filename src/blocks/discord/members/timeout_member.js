import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_timeout_member";

const blockData = {
    "message0": "%{BKY_TIMEOUT_MEMBER}",
    "args0": [
        {
            "type": "input_value",
            "name": "MEMBER",
            "check": "Member"
        },
        {
            "type": "input_value",
            "name": "MINUTES",
            "check": "Number"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "inputsInline": true,
    "colour": "#4C97FF",
    "tooltip": "%{BKY_TIMEOUT_MEMBER_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function(block) {
    const member = javascriptGenerator.valueToCode(block, "MEMBER", Order.ATOMIC);
    const minutes = javascriptGenerator.valueToCode(block, "MINUTES", Order.ATOMIC) || 0;
    // 0 minutes removes the timeout
    return `await ${member}.timeout(Number(${minutes}) * 60 * 1000 || null);\n`;
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
