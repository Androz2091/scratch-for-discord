import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_send_thread";

const blockData = {
    "message0": "%{BKY_SEND_THREAD}",
    "args0": [
        {
            "type": "input_value",
            "name": "CONTENT",
            "check": ["Number", "String"]
        },
        {
            "type": "input_value",
            "name": "EMBED",
            "check": "MessageEmbed"
        },
        {
            "type": "input_value",
            "name": "CHANNEL",
            "check": "Thread"
        }
    ],
    "colour": "#4C97FF",
    "inputsInline": false,
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

    const content = Blockly.JavaScript.valueToCode(block, "CONTENT", Blockly.JavaScript.ORDER_ATOMIC);
    const embed = Blockly.JavaScript.valueToCode(block, "EMBED", Blockly.JavaScript.ORDER_ATOMIC) || null;
    const channel = Blockly.JavaScript.valueToCode(block, "CHANNEL", Blockly.JavaScript.ORDER_ATOMIC) || "false";


    if(content.length > 2){
        return(`${channel}.send({embeds: ${embed}, content: ${content}});\n`)
    } else {
        return(`${channel}.send({embeds: ${embed}});\n`)
    }

}

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_MISSING_CONTENT",
        types: [
            "CONTENT"
        ]
    }
]);
