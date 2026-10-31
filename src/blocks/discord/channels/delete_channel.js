import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_delete_channel";

const blockData = {
    "message0": "%{BKY_DELETE_CHANNEL}",
    "args0": [
        {
            "type": "input_value",
            "name": "CHANNEL",
            "check": "Channel"
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
    const channel = javascriptGenerator.valueToCode(block, "CHANNEL", Order.ATOMIC);
    return `await ${channel}.delete();\n`;
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_PURGE_CHANNEL",
        types: [
            "CHANNEL"
        ]
    }
]);
