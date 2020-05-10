import * as Blockly from "blockly/core";
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
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
    const value = Blockly.JavaScript.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_ATOMIC);
    const channel = Blockly.JavaScript.valueToCode(block, "CHANNEL", Blockly.JavaScript.ORDER_ATOMIC);
    return [ `(${channel}.messages.cache.get(${value}) || await ${channel}.messages.fetch(${value}))`, Blockly.JavaScript.ORDER_NONE ];
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
