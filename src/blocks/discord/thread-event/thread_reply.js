import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_thread_reply";

const blockData = {
    "message0": "%{BKY_THREAD_REPLY}",
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
            "name": "MENTION",
            "check": "Boolean"
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
    const mention = Blockly.JavaScript.valueToCode(block, "MENTION", Blockly.JavaScript.ORDER_ATOMIC) || "false";
    if(mention === "true") {
        if(content.length > 2){
            return(`s4dThread.reply({embeds: ${embed}, content: ${content}});\n`)
        } else {
            return(`s4dThread.reply({embeds: ${embed}});\n`)
        }
    }else {
        if(content.length > 2){
            return(`s4dThread.channel.send({embeds: ${embed}, content: ${content}});\n`)
        } else {
            return(`s4dThread.channel.send({embeds: ${embed}});\n`)
        }
    }}

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_MISSING_CONTENT",
        types: [
          "CONTENT"
        ]
    },
    {
        type: "toplevelparent",
        message: "RES_MUST_BE_IN_ON_THREAD_MESSAGE",
        types: [
            "s4d_on_thread_message"
        ]
    }
]);
