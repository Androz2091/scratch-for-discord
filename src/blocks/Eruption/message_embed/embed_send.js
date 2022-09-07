import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_embed_send";

const blockData = {
    "message0": "send embed with message %1",
    "args0": [
        {
            "type": "input_value",
            "check": "String",
            "name": "MESSAGE"
        }
    ],
    "output": "MessageEmbed",
    "colour": "#40BF4A",
    "tooltip": "Send a perfect embed.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
    let message = ''
    if (Blockly.JavaScript.valueToCode(block, "MESSAGE", Blockly.JavaScript.ORDER_ATOMIC)) {
        message = `, content: ${Blockly.JavaScript.valueToCode(block, "MESSAGE", Blockly.JavaScript.ORDER_ATOMIC)}`
    }
    const code = [`embeds: [embed]${message}`, Blockly.JavaScript.ORDER_ATOMIC];
    return code;
};

registerRestrictions(blockName, [
    {
        type: "hasparent",
        message: "RES_MUST_BE_CREATE_EMBED_THEN",
        types: [
            "s4d_embed_create"
        ]
    }
]);
