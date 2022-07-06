import * as Blockly from "blockly";

const blockName = "parham_replitdb_setto";

const blockData = {
  "message0": "Set %1 to %2 in Replit DB %3 then %4",
  "args0": [
    {
      "type": "input_value",
      "name": "set",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "to"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "then"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#09499e",
  "tooltip": "Set Something To Something In Replit DB",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  var value_set = Blockly.JavaScript.valueToCode(block, 'set', Blockly.JavaScript.ORDER_ATOMIC);
  var value_to = Blockly.JavaScript.valueToCode(block, 'to', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_then = Blockly.JavaScript.statementToCode(block, 'then');
  // TODO: Assemble JavaScript into code variable.
  var code = `S4D_APP_Replit_DB.set(${value_set}, ${value_to}).then(() => {${statements_then}});\n`;
  return code;
};