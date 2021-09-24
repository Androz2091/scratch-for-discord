import * as Blockly from "blockly/core";


const blockName = "guild_g";

const blockData = {
    "message0": " name %2 register global slash commands %1",
    "args0": [
      {
          "type": "input_value",
          "name": "NAME",
          "check": [ "String" ]
      },
      {
          "type": "input_value",
          "name": "NAME_VAR",
          "check": [ "String" ]
      },
    ],
    "colour": "#0339fc",
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

Blockly.JavaScript[blockName] = function(block) {



    const var_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
    let text1 = var_name.replace("'","")
    let var_name2 = text1.replace("'","")
    const name_var = Blockly.JavaScript.valueToCode(block, "NAME_VAR", Blockly.JavaScript.ORDER_ATOMIC);
    let text2 = name_var.replace("'","")
    let var_name3 = text2.replace("'","")
    const code = `const ${var_name3} = await s4d.client.application?.commands.create(${var_name2}); \n`;
    return code;
};
