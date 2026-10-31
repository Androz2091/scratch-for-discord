import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_unban_member";

const blockData = {
    "message0": "%{BKY_UNBAN_MEMBER}",
    "args0": [
        {
            "type": "input_value",
            "name": "ID",
            "check": [ "String", "Number" ]
        },
        {
            "type": "input_value",
            "name": "SERVER",
            "check": "Server"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#4C97FF",
    "tooltip": "%{BKY_UNBAN_MEMBER_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function(block) {
    const id = javascriptGenerator.valueToCode(block, "ID", Order.ATOMIC);
    const server = javascriptGenerator.valueToCode(block, "SERVER", Order.ATOMIC);
    return `await ${server}.members.unban(String(${id}));\n`;
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_VALID_SERVER",
        types: [
            "SERVER"
        ]
    },
    {
        type: "notempty",
        message: "RES_GET_MEMBER_VALUE",
        types: [
            "ID"
        ]
    }
]);
