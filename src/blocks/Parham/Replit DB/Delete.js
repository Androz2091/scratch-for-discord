import * as Blockly from "blockly";

const blockName = "parham_replitdb_delete";

const blockData = {
  "message0": "Delete %1 from Replit DB %2 then %3",
  "args0": [
    {
      "type": "input_value",
       "name": "delete",
       "check": "String"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "then"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#09499e",
  "tooltip": "Delete An Item From Replit DB",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    var value_delete = Blockly.JavaScript.valueToCode(block, 'delete', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_then = Blockly.JavaScript.statementToCode(block, 'then');
    // TODO: Assemble JavaScript into code variable.
    var code = `S4D_APP_Replit_DB.delete(${value_delete}).then(() => {${statements_then}});`;
    return code;
  };