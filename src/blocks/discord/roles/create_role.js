import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_create_role";

const blockData = {
    "message0": "%{BKY_CREATE_ROLE}",
    "args0": [
        {
            "type": "input_value",
            "name": "NAME",
            "check": [ "String", "Number" ]
        },
        {
            "type": "input_value",
            "name": "SERVER",
            "check": "Server"
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
    const name = javascriptGenerator.valueToCode(block, "NAME", Order.ATOMIC);
    const server = javascriptGenerator.valueToCode(block, "SERVER", Order.ATOMIC);
    return `await ${server}.roles.create({ name: String(${name}) });\n`;
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_VALID_NAME",
        types: [
            "NAME"
        ]
    },
    {
        type: "notempty",
        message: "RES_VALID_SERVER",
        types: [
            "SERVER"
        ]
    }
]);
