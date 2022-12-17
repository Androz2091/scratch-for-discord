import * as Blockly from "blockly/core";

const blockName = "all_roles";

const blockData = {

  "message0": "All roles",
  "name": "roles",
  "output": "String",
  "colour": "#56afdb",
  "tooltip": "All of the roles that the member has.",
  "helpUrl": ""
}

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function () {
  const code = [`memberRoles`, Blockly.JavaScript.ORDER_NONE];
  return code;
};
