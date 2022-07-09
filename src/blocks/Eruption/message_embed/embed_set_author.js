import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_embed_set_author";

const blockData = {
    "message0": "set embed author %1 set profile %2 add url (optional) %3",
    "args0": [
      {
        "type": "input_value",
        "name": "AUTHOR"
      },
      {
        "type": "input_value",
        "name": "PROFILE"
      },
      {
        "type": "input_value",
        "name": "URL"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#40BF4A",
    "tooltip": "Set the author of an embed.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
    const author = Blockly.JavaScript.valueToCode(block, "AUTHOR", Blockly.JavaScript.ORDER_ATOMIC);
    const profile = Blockly.JavaScript.valueToCode(block, "PROFILE", Blockly.JavaScript.ORDER_ATOMIC);
    const url = Blockly.JavaScript.valueToCode(block, "URL", Blockly.JavaScript.ORDER_ATOMIC);
    if (url.length == 0) {
      const code = `embed.setAuthor({name: String(${author}), iconURL: String(${profile})}); \n`;
    return code;
    }
    const code = `embed.setAuthor({name: String(${author}), iconURL: String(${profile}), url: String(${url})}); \n`;
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
