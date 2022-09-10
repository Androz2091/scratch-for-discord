import * as Blockly from "blockly/core";

const blockName = "s4d_embed_create";

const blockData = {
    "message0": "create an embed%1with name %2 %3 then %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "text": "embed1",
        "name": "NAME"
      },
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
    "inputsInline": true,
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
    const name = block.getFieldValue("NAME");
    const name2 = name.replace(/ /g, "_");
    const then = Blockly.JavaScript.statementToCode(block, "THEN");
    const then2 = then.replace(/embed./g, name2 + ".")
    const code = `var ${name2} = new Discord.MessageEmbed(); \n ${then2}\n`;
    return code;
};
