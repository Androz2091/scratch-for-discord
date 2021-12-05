import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_m_create_embed_then_add_blankfield";

const blockData = {
    "message0": "%{BKY_M_CREATE_EMBED_THEN_ADD_BLANKFIELD}",
    "args0": [],
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

Blockly.JavaScript[blockName] = function() {
    const code = `embed.addField('‎‎‎‎‎‎‎‎', '‎‎');\n`;
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