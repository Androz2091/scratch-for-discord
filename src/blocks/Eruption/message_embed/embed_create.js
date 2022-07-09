import * as Blockly from "blockly/core";

const blockName = "s4d_embed_create";

const blockData = {
    "message0": "create an embed %1 then %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "THEN"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#40BF4A",
    "tooltip": "Create a perfect embed.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
    const then = Blockly.JavaScript.statementToCode(block, "THEN");
    const code = `let embed = new Discord.MessageEmbed(); \n ${then}\n`;
    return code;
};
