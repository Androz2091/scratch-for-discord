import Blockly from "blockly/core";
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
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const server = Blockly.JavaScript.valueToCode(block, "SERVER", Blockly.JavaScript.ORDER_ATOMIC);
    const newName = Blockly.JavaScript.valueToCode(block, "NEW_NICKNAME", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${server}.setName(${newName});\n`;
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
