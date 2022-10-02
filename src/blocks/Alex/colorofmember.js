import Blockly from "blockly/core";

const blockName = "member_color";

const blockData = {
  "message0": "Color of member %1",
  "args0": [
    {
      "type": "input_value",
      "check": "Member",
      "name": "member",
      "text": ""
    }
  ],
  "output": ["Colour", "String"],
  "colour": "#57a0d9",
  "tooltip": "Gets the color that the member appears as in the server.",
  "helpUrl": ""
}

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  const member = Blockly.JavaScript.valueToCode(block, "member", Blockly.JavaScript.ORDER_ATOMIC);
  const code = [`${member}.displayHexColor`, Blockly.JavaScript.ORDER_NONE];
  return code;
};
