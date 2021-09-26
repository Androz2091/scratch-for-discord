import * as Blockly from "blockly/core";


const blockName = "register_c_s";

const blockData = {
    "message0": "Register slash command name %1 description %2 options %3 %4",
    "args0": [
      {
          "type": "input_value",
          "name": "NAME",
          "check": [ "String" ]
      },
      {
          "type": "input_value",
          "name": "DESCRIPTION",
          "check": [ "String" ]
      },
        {
            "type": "input_statement",
            "name": "THEN"
        },
        {
            "type": "input_dummy"
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

Blockly.JavaScript[blockName] = function(block) {

  const name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  const description = Blockly.JavaScript.valueToCode(block, "DESCRIPTION", Blockly.JavaScript.ORDER_ATOMIC);
    const statementThen = Blockly.JavaScript.statementToCode(block, "THEN");
    const code = `{ \n name: ${name}, \n description: ${description}, \n options: [\n ${statementThen} \n] \n } \n`;
    return code;
};