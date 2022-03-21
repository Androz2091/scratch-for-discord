import * as Blockly from "blockly/core";

const blockName = "create_event";

const blockData = {
  "message0": "When event with the name %1 is emited %2 %3",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "String"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "THEN"
    }
  ],
  "colour": 230,
  "tooltip": "Create event",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
  var code
  let value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  let statements_then = Blockly.JavaScript.statementToCode(block, 'THEN');
  code = `eventEmitter.on(${value_name}, async => {${statements_then}});\n`;
  return code;
};