import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_get_message";

const blockData = {
    "message0": "%{BKY_GET_MESSAGE}",
    "args0": [
        {
            "type": "input_value",
            "name": "VALUE",
            "check": [ "String", "Number" ]
        },
        {
            "type": "input_value",
            "name": "CHANNEL",
            "check": "Channel"
        }
    ],
    "colour": "#41AAC0",
    "output": "Message",
    "inputsInline": true,
    "tooltip": "%{BKY_GET_MESSAGE_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function(block){
    const id = javascriptGenerator.valueToCode(block, "VALUE", Order.ATOMIC);
    const channel = javascriptGenerator.valueToCode(block, "CHANNEL", Order.ATOMIC);
    return [ `(await ${channel}.messages.fetch(String(${id})))`, Order.NONE ];
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_GET_MESSAGE_VALUE",
        types: [
            "VALUE"
        ]
    },
    {
        type: "notempty",
        message: "RES_GET_MESSAGE_CHANNEL",
        types: [
            "CHANNEL"
        ]
    }
]);
