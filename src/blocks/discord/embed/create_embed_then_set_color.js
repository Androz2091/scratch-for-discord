import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_create_embed_then_set_color";

const blockData = {
    "message0": "%{BKY_CREATE_EMBED_THEN_SET_COLOR}",
    "args0": [
        {
            "type":"input_value",
            "name":"COLOR",
            "check": [ "Colour", "String" ]
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
    const color = Blockly.JavaScript.valueToCode(block, "COLOR", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `embed.setColor(${color});\n`;
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
