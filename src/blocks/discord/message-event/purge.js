import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
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
    "tooltip": "%{BKY_PURGE_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function(block) {
    const channel = javascriptGenerator.valueToCode(block, "CHANNEL", Order.ATOMIC);
    const amount = javascriptGenerator.valueToCode(block, "AMOUNT", Order.ATOMIC);
    const code = `await ${channel}.bulkDelete(Number(${amount}) || 1, true);\n`;
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