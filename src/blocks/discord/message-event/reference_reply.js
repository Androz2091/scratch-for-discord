import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_reference_reply";

const blockData = {
    "message0": "%{BKY_REPLY_REFERENCE}",
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
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "CODE"
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
    const code = Blockly.JavaScript.statementToCode(block, "CODE");
    if(content.length > 2){
            return(`try {s4dmessage.channel.messages.cache.get(s4dmessage.reference.messageId).reply({embeds: ${embed}, content: String(${content})})}\ncatch {\n${code}\n}\n`)
    } else {
            return(`try {s4dmessage.channel.messages.cache.get(s4dmessage.reference.messageId).reply({embeds: ${embed}})} catch {\n${code}\n}\n;\n`)
    }
}
    

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
        message: "RES_MUST_BE_IN_ON_MESSAGE",
        types: [
            "s4d_on_message"
        ]
    }
]);
