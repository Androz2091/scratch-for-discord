import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_m_create_embed_then_send";

const blockData = {
    "message0": "send embed in channel %1 with text %2",
    "args0": [{
        "type": "input_value",
        "name": "CHANNEL",
        "check": "Channel"
    },
    {
        "type": "input_value",
        "name": "TEXT",
        "check": "String"
    }],
    "colour": "#40BF4A",
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

Blockly.JavaScript[blockName] = function(block) {
    const channel = Blockly.JavaScript.valueToCode(block, "CHANNEL", Blockly.JavaScript.ORDER_ATOMIC);
    const text = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${channel}.send({${text === "" ? "" : `content:${text},`} embeds: [embed] });\n`;
    return code;
};

registerRestrictions(blockName, [{
    type: "hasparent",
    message: "M_RES_MUST_BE_CREATE_EMBED_THEN",
    types: [
        "s4d_m_create_embed_then",
        "s4d_create_embed_then"
    ]
}]); 
