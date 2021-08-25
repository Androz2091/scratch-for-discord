import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_get_edit_webhook";

const blockData = {
    "message0": "%{BKY_EDIT_WEBHOOK}",
    "args0": [
        {
            "type": "input_value",
            "name": "NAME",
            "check": [ "String" ]
        },
        {
            "type": "input_value",
            "name": "AVATAR",
            "check": [ "String" ]
        },
        {
            "type": "input_value",
            "name": "CHANNEL",
            "check": [ "Channel" ]
        },
    ],
    "colour": "#135cc2",
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

Blockly.JavaScript[blockName] = function(block){
const name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
const avatar = Blockly.JavaScript.valueToCode(block, "AVATAR", Blockly.JavaScript.ORDER_ATOMIC);
const channel = Blockly.JavaScript.valueToCode(block, "CHANNEL", Blockly.JavaScript.ORDER_ATOMIC);
return `gwebhook.edit({name:${name},avatar:${avatar},channel:${channel}.id});\n`
};
registerRestrictions(blockName, [
    {
        type: "hasparent",
        message: "RES_GET_WEBHOOK_PARENT",
        types: [
            "s4d_get_webhook_then"
        ]
    }
]);
