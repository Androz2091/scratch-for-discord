import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_create_embed_then_set_footer";

const blockData = {
    "message0": "%{BKY_CREATE_EMBED_THEN_SET_FOOTER}",
    "args0": [
        {
            "type":"input_value",
            "name":"FIELD",
            "check":"String"
        },
        {
            "type":"input_value",
            "name":"IMAGE",
            "check":"String"
        }
    ],
    "colour": "#4C97FF",
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
    const field = Blockly.JavaScript.valueToCode(block, "FIELD", Blockly.JavaScript.ORDER_ATOMIC);
    const fieldimage = Blockly.JavaScript.valueToCode(block, "IMAGE", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `embed.setField(${field},${fieldimage});\n`;
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
