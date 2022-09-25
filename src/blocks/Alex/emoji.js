import Blockly from "blockly/core";

const blockName = "create_emoji";

const blockData = {
  "message0": "In server %1 %2 Create emoji with name %3 %4 with URL %5",
  "args0": [
    {
      "type": "input_value",
      "name": "server",
      "check": "Server"
    },
    {
      "type": "input_space"
    },
    {
      "type": "input_value",
      "name": "name",
      "check": "String"
    },
    {
      "type": "input_space"
    },
    {
      "type": "input_value",
      "name": "url",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#32a852",
  "tooltip": "Create an emoji in a server with the specified image URL.",
  "helpUrl": ""
}
Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  const url = Blockly.JavaScript.valueToCode(block, "url", Blockly.JavaScript.ORDER_ATOMIC);
  const name = Blockly.JavaScript.valueToCode(block, "name", Blockly.JavaScript.ORDER_ATOMIC);
  const server = Blockly.JavaScript.valueToCode(block, "server", Blockly.JavaScript.ORDER_ATOMIC);
  const code = `${server}.emojis.create(${url}, ${name}) \n`;
  return code;
};
