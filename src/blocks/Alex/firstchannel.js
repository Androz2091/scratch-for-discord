import Blockly from "blockly/core";

const blockName = "first_channel";

const blockData = {
  "message0": "Get the first channel of server %1",
  "args0": [
    {
      "type": "input_value",
      "name": "server",
      "check": "Server"
    }
  ],
  "output": "Channel",
  "colour": "#ff6f00",
  "tooltip": "Gets the first channel of a server.",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  const server = Blockly.JavaScript.valueToCode(block, "server", Blockly.JavaScript.ORDER_ATOMIC);
  const code = [`${server}.channels.cache.first()`, Blockly.JavaScript.ORDER_NONE];
  return code;
};
