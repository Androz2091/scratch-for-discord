import Blockly from "blockly/core";

const blockName = "everyn";

const blockData = {
  "message0": "Get everyone of server  %1",
  "args0": [
    {
      "type": "input_value",
      "name": "server",
      "check": "Server"
    }
  ],
  "output": "Everyone",
  "colour": "#5BA58C",
  "tooltip": "Get everyone in a server.",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  const server = Blockly.JavaScript.valueToCode(block, "server", Blockly.JavaScript.ORDER_ATOMIC);
  const code = [`(${server} || {}).id`, Blockly.JavaScript.ORDER_NONE];
  return code;
};
