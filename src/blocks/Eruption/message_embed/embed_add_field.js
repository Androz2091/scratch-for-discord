import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_embed_add_field";

const blockData = {
    "message0": "add embed field %1 with title %2 with description %3 inline (optional) %4",
    "args0": [
      {
        "type": "input_dummy",
      },
      {
        "type": "input_value",
        "name": "TITLE"
      },
      {
        "type": "input_value",
        "name": "DESCRIPTION"
      },
      {
        "type": "input_value",
        "name": "INLINE",
        "check": "Boolean"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#40BF4A",
    "tooltip": "Add a field to an embed.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
    const title = Blockly.JavaScript.valueToCode(block, "TITLE", Blockly.JavaScript.ORDER_ATOMIC);
    const description = Blockly.JavaScript.valueToCode(block, "DESCRIPTION", Blockly.JavaScript.ORDER_ATOMIC);
  const inline = Blockly.JavaScript.valueToCode(block, "INLINE", Blockly.JavaScript.ORDER_ATOMIC);
  if (inline.length == 0) {
    const code = `embed.addField(String(${title}), String(${description}), false); \n`;
    return code;
  }
  const code = `embed.addField(String(${title}), String(${description}), ${inline}); \n`;
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
