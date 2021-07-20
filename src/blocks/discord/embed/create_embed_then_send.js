import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_create_embed_then_send";

const blockData = {
    "message0": "%{BKY_CREATE_EMBED_THEN_SEND}",
    "args0": [
    ],
    "colour": "#40BF4A",
    "previousStatement": null,
    "nextStatement": null,    
    "inputsInline": true,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(){
    const code = `s4dmessage.channel.send(embed);\n`;
    return code;
};

registerRestrictions(blockName, [
    {
        type: "hasparent",
        message: "RES_MUST_BE_CREATE_EMBED_THEN",
        types: [
            "s4d_create_embed_then"
        ]
    }
]);
