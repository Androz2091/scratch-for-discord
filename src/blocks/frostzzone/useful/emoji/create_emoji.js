import * as Blockly from "blockly/core";

const blockName = "fz_create_emoji";

const blockData = {
  "message0": "Create emoji %1 with image %2 on server %3 Then %4 (optional) %5",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "IMAGE",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "SERVER",
      "check": "Server"
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
  "colour": 230,
  "tooltip": "Create emoji with name of the emoji \\n and with Image url",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  var code
  let value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  let value_server = Blockly.JavaScript.valueToCode(block, 'SERVER', Blockly.JavaScript.ORDER_ATOMIC);
  let value_image = Blockly.JavaScript.valueToCode(block, 'IMAGE', Blockly.JavaScript.ORDER_ATOMIC);
  let statements_then = Blockly.JavaScript.statementToCode(block, 'THEN');
  if ((statements_then || null) == null) {
    code = `${value_server}.emojis.create(${value_image},${value_name});\n`;
  } else {
    code = `${value_server}.emojis.create(${value_image},${value_name}).then(async emoj =>{
${statements_then}});\n`;
  }
  return code;
};