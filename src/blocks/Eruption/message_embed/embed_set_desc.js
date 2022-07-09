import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_embed_set_desc";

const blockData = {
    "message0": "set embed description %1",
    "args0": [
      {
        "type": "input_value",
        "name": "DESC"
      },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#40BF4A",
    "tooltip": "Set the description of an embed.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
    const description = Blockly.JavaScript.valueToCode(block, "DESC", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `embed.setDescription(String(${description})); \n`; 
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
