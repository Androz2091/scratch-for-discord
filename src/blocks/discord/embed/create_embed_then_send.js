import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_create_embed_then_send";

const blockData = {
    "message0": "%{BKY_CREATE_EMBED_THEN_SEND}",
    "args0": [
        {
            "type":"input_value",
            "name":"CHANNEL",
            "check":"Channel"
        }
    ],
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

Blockly.JavaScript[blockName] = function(block){
    const channel = Blockly.JavaScript.valueToCode(block, "CHANNEL", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${channel}.send({embeds:[embed]});\n`;
    return code;
};

registerRestrictions(blockName, [
    {
        type: "hasparent",
        message: "RES_MUST_BE_CREATE_EMBED_THEN",
        types: [
            "s4d_create_embed_then",
            "s4d_m_create_embed_then"
        ]
    }
]);
