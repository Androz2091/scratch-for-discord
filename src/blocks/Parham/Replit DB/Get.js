import * as Blockly from "blockly";

const blockName = "parham_replitdb_get";

const blockData = {
  "message0": "Get %1 from Replit DB %2 then %3",
  "args0": [
    {
      "type": "input_value",
      "name": "get",
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
  "tooltip": "Get An Item From Replit DB",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    var value_get = Blockly.JavaScript.valueToCode(block, 'get', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_then = Blockly.JavaScript.statementToCode(block, 'then');
    // TODO: Assemble JavaScript into code variable.
    var code = `S4D_APP_Replit_DB.get(${value_get}).then(S4D_APP_Replit_DB_Data => {${statements_then}});\n`;
    return code;
  };