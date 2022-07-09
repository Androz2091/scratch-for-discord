import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_embed_set_footer";

const blockData = {
    "message0": "set embed footer %1 icon (optional) %2",
    "args0": [
      {
        "type": "input_value",
        "name": "FOOTER"
      },
      {
        "type": "input_value",
        "name": "ICON"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#40BF4A",
    "tooltip": "Set the footer of an embed.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
     const footer = Blockly.JavaScript.valueToCode(block, "FOOTER", Blockly.JavaScript.ORDER_ATOMIC);
    const icon = Blockly.JavaScript.valueToCode(block, "ICON", Blockly.JavaScript.ORDER_ATOMIC);
    if (icon.length == 0) {
      const code = `embed.setFooter({text: String(${footer})}) \n`; 
    return code;
    }
  const code = `embed.setFooter({text: String(${footer}), iconURL: String(${icon})}); \n`; 
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
