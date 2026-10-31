import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_message_delete";

const blockData = {
    "message0": "%{BKY_MESSAGE_DELETE}",
    "args0": [
        {
            "type": "input_value",
            "name": "MESSAGE",
            "check": "Message"
        }
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "%{BKY_MESSAGE_DELETE_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function(block){
    const message = javascriptGenerator.valueToCode(block, "MESSAGE", Order.ATOMIC);
    return `await ${message}.delete();\n`;
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_VALID_MESSAGE",
        types: [
            "MESSAGE"
        ]
    }
]);
