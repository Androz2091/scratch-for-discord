import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../../restrictions";

const blockName = "s4d_embed_set_author";

const blockData = {
    "message0": "set embed author %1",
    "args0": [
      {
        "type": "input_value",
        "name": "AUTHOR",
        "check": "String"
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
    const code = `embed.setAuthor(${author}) \n`;
    return code;
};


registerRestrictions(blockName, [
    {
        type: "toplevelparent",
        message: "This block must be used in 'create an embed' bl!",
        types: [
            "s4d_on_message"
        ]
    }
]);
