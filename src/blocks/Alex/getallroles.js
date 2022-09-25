import * as Blockly from "blockly/core";

const blockName = "get_all_roles";

const blockData = {

  "message0": "Get all roles of member %1 in server %2 then %3 %4",
  "args0": [
    {
      "type": "input_value",
      "name": "member",
      "check": "Member"
    },
    {
      "type": "input_value",
      "name": "server",
      "check": "Server"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "then",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#56afdb",
  "tooltip": "Get all of the roles a member has in a server and run the blocks below.",
  "helpUrl": ""
}

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  const Then = Blockly.JavaScript.statementToCode(block, "then");
  const member = Blockly.JavaScript.valueToCode(block, "member", Blockly.JavaScript.ORDER_ATOMIC);
  const server = Blockly.JavaScript.valueToCode(block, "server", Blockly.JavaScript.ORDER_ATOMIC);
  const code = `memberRoles = ${member}.roles.cache
.filter((roles) => roles.id !== ${server}.id)
.map ((role) => role.toString()); \n ${Then}`;
  return code;
};
