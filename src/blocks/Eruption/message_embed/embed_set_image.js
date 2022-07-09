import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_embed_set_image";

const blockData = {
    "message0": "set embed image %1",
    "args0": [
      {
        "type": "input_value",
        "name": "IMAGE"
      },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#40BF4A",
    "tooltip": "Set the image of an embed.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
    const image = Blockly.JavaScript.valueToCode(block, "IMAGE", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `embed.setImage(String(${image})); \n`; 
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
