import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_create_embed_then_set_thumbnail";

const blockData = {
    "message0": "%{BKY_CREATE_EMBED_THEN_SET_THUMBNAIL}",
    "args0": [
        {
            "type":"input_value",
            "name":"THUMBNAIL",
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
    const thumbnail = Blockly.JavaScript.valueToCode(block, "THUMBNAIL", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `embed.setThumbnail(${thumbnail});\n`;
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
