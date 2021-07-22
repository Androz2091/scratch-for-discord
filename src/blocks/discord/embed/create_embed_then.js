import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_create_embed_then";

const blockData = {
    "message0": "%{BKY_CREATE_EMBED_THEN}",
    "args0": [
        {
            "type": "input_statement",
            "name": "THEN"
        },
        {
            "type":"input_dummy"
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
    const statementThen = Blockly.JavaScript.statementToCode(block, "THEN");
    const code = `let embed = new Discord.MessageEmbed() \n ${statementThen}\n`;
    return code;
};

registerRestrictions(blockName, [
    {
        type: "toplevelparent",
        message: "RES_MUST_BE_IN_ON_MESSAGE",
        types: [
            "s4d_on_message"
        ]
    }
]);
