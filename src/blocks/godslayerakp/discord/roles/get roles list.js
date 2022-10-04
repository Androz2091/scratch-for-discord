import Blockly from "blockly/core";

Blockly.Blocks["gsa_get_all_roles_on_member"] = {
  init: function () {
    this.jsonInit({
      "message0": "get all role id's on member %1 as a list",
      "args0": [
        {
          "type": "input_value",
          "name": "member",
          "check": "Member"
        }
      ],
      "output": ["List", "Array"],
      "inputsInline": true,
      "colour": '#D14081',
      "tooltip": "gets a list of all role id's on a member",
      "helpUrl": ""
    });
  }
};
  
Blockly.JavaScript["gsa_get_all_roles_on_member"] = function (block) {
  return [`${Blockly.JavaScript.valueToCode(block, "member", Blockly.JavaScript.ORDER_ATOMIC)}._roles`, Blockly.JavaScript.ORDER_ATOMIC];
}
