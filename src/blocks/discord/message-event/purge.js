import Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_purge";

const blockData = {
    "message0": "%{BKY_PURGE}",
    "args0": [
        {
            "type": "input_value",
            "name": "CHANNEL",
            "check": "Channel"
        },
        {
            "type": "input_value",
            "name": "AMOUNT",
            "check":  "Number" 
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "inputsInline": true,
    "colour": "#1a75ff",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const channel = Blockly.JavaScript.valueToCode(block, "CHANNEL", Blockly.JavaScript.ORDER_ATOMIC);
    const amount = Blockly.JavaScript.valueToCode(block, "AMOUNT", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${channel}.bulkDelete((${amount}|1)); \n`;
    return code;
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
        message: "RES_PURGE_AMOUNT",
        types: [
            "AMOUNT"
        ]
    }
]);