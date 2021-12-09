import Blockly from "blockly/core";

const blockName = "hig_role";

const blockData = {
  "message0": "Highest role of member  %1",
  "args0": [
    {
      "type": "input_value",
      "check": "Member",
      "name": "member",
      "text": ""
    }
  ],
  "output": "Role",
  "colour": "#6cb5e6",
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
const MEMBER = Blockly.JavaScript.valueToCode(block, "member", Blockly.JavaScript.ORDER_ATOMIC);
    const code = ["${MEMBER}.roles.highest", Blockly.JavaScript.ORDER_NONE];
    return code;
};
