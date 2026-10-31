import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_set_channel_name";

const blockData = {
    "message0": "%{BKY_SET_CHANNEL_NAME}",
    "args0": [
        {
            "type": "input_value",
            "name": "CHANNEL",
            "check": "Channel"
        },
        {
            "type": "input_value",
            "name": "NAME",
            "check": [ "String", "Number" ]
        }
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "%{BKY_SET_CHANNEL_NAME_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function(block){
    const channel = javascriptGenerator.valueToCode(block, "CHANNEL", Order.ATOMIC);
    const name = javascriptGenerator.valueToCode(block, "NAME", Order.ATOMIC);
    return `await ${channel}.setName(String(${name}));\n`;
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_PURGE_CHANNEL",
        types: [
            "CHANNEL"
        ]
    },
    {
        type: "notempty",
        message: "RES_VALID_NAME",
        types: [
            "NAME"
        ]
    }
]);
