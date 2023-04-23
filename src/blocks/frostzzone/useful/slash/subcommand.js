import * as Blockly from "blockly/core";

const blockName = "frost_slash_sub_command";

const blockData = {
    "message0": "Create Sub Command Name %1 Description %2 %3 Options %4",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "DESC",
      "check": "String"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "OPTIONS"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3d79cc",
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
  var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var desc = Blockly.JavaScript.valueToCode(block, 'DESC', Blockly.JavaScript.ORDER_ATOMIC);
  var options = Blockly.JavaScript.statementToCode(block, 'OPTIONS');
  var code = `{
    name: ${name.toLowerCase()},
		description: ${desc},
    type: 1,
		options: [
      ${options}
    ]
},`;
  return code;
};