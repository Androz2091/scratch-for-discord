import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_create_embed_then_set_author";

const blockData = {
    "message0": "%{BKY_CREATE_EMBED_THEN_SET_AUTHOR}",
    "args0": [
        {
            "type":"input_value",
            "name":"AUTHOR",
            "check":"String"
        },
        {
            "type":"input_value",
            "name":"PFP",
            "check":"String"  
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
    const author = Blockly.JavaScript.valueToCode(block, "AUTHOR", Blockly.JavaScript.ORDER_ATOMIC);
    const pfp = Blockly.JavaScript.valueToCode(block, "PFP", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `embed.setAuthor(${author},${pfp});\n`;
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
