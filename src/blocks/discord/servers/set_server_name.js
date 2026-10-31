import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_set_server_name";

const blockData = {
    "message0": "%{BKY_SET_SERVER_NAME}",
    "args0": [
        {
            "type": "input_value",
            "name": "SERVER",
            "check": "Server"
        },
        {
            "type": "input_value",
            "name": "NEW_NICKNAME",
            "check": [ "Number", "String" ]
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#4C97FF",
    "tooltip": "%{BKY_SET_SERVER_NAME_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function(block) {
    const server = javascriptGenerator.valueToCode(block, "SERVER", Order.ATOMIC);
    const newName = javascriptGenerator.valueToCode(block, "NEW_NICKNAME", Order.ATOMIC);
    const code = `await ${server}.setName(String(${newName}));\n`;
    return code;
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_SET_SERVER_NAME_SERVER",
        types: [
            "SERVER"
        ]
    },
    {
        type: "notempty",
        message: "RES_SET_SERVER_NAME_NEW_NICKNAME",
        types: [
            "NEW_NICKNAME"
        ]
    }
]);
