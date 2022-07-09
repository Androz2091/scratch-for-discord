import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_embed_set_title";

const blockData = {
    "message0": "set embed title %1 add url (optional) %2",
    "args0": [
      {
        "type": "input_value",
        "name": "TITLE"
      },
      {
        "type": "input_value",
        "name": "HYPERLINK"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#40BF4A",
    "tooltip": "Set the title of an embed.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
    const title = Blockly.JavaScript.valueToCode(block, "TITLE", Blockly.JavaScript.ORDER_ATOMIC);
    const hyperlink = Blockly.JavaScript.valueToCode(block, "HYPERLINK", Blockly.JavaScript.ORDER_ATOMIC);
    if (hyperlink.length == 0) {
      const code = `embed.setTitle(String(${title})) \n`; 
    return code; 
    }
    const code = `embed.setTitle(String(${title})) \n embed.setURL(String(${hyperlink})); \n`; 
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
