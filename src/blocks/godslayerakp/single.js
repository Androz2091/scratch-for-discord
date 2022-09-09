/* eslint-disable */
import Blockly from "blockly/core";

Blockly.Blocks["gsa_make_db_with_path_x"] = {
  init: function () {
    this.jsonInit({
      "type": "gsa_send_embed",
      "message0": "create a new db with path %1 .json",
      "args0": [
        {
            "type": "input_value",
            "name": "path",
            "check": "String"
        }
      ],
      "output": null,
      "inputsInline": true,
      "colour": '#5ba58b',
      "tooltip": "creates a new database, put in a variable and then put the variable in the db blocks to use",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript["gsa_make_db_with_path_x"] = function (block) {
  const path = Blockly.JavaScript.valueToCode(block, "path", Blockly.JavaScript.ORDER_ATOMIC)
  return `new Database(String(${path + '.json'}))`;
}
