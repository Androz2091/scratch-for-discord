import Blockly from "blockly/core";

const blockName = "lime_s4d_embed_create";

const blockData = {
  "type": "s4d_embed_create",
  "message0": "Create Embed With name %1 Then %2",
  "args0": [
    {
      "type": "input_value",
      "name": "name_value",
      "check": "String"
    },
    {
      "type": "input_statement",
      "name": "THEN"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#54CF83",
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript['s4d_embed_create'] = function (block) {
  let name_value = Blockly.JavaScript.valueToCode(block, 'name_value', Blockly.JavaScript.ORDER_ATOMIC);
  let statements_then = Blockly.JavaScript.statementToCode(block, 'THEN');
  name_value = name_value.split(" ")
  name_value = name_value.join('_')
  name_value = name_value.toLowerCase()
  name_value = name_value.replace("'", "")
  name_value = name_value.replace("'", "")
  let code = `let ${name_value} = new Discord.MessageEmbed() \n ${statements_then}\n`;
  return code;
};
