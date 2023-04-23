import Blockly from "blockly/core";

const blockName = "create_sticker";

const blockData = {
"message0": "In server %1 %2 Create sticker with name %3 %4 With tags %5 %6 With image %7",
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
      "name": "tags",
      "check": "String"
    },
    {
      "type": "input_space"
    },
    {
      "type": "input_value",
      "name": "file"
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#02a836",
  "tooltip": "Creates a sticker on the server.",
  "helpUrl": ""
}
  Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
const file = Blockly.JavaScript.valueToCode(block, "file", Blockly.JavaScript.ORDER_ATOMIC);
const name = Blockly.JavaScript.valueToCode(block, "name", Blockly.JavaScript.ORDER_ATOMIC);
const server = Blockly.JavaScript.valueToCode(block, "server", Blockly.JavaScript.ORDER_ATOMIC);
  const tags = Blockly.JavaScript.valueToCode(block, "tags", Blockly.JavaScript.ORDER_ATOMIC);
  const code =  `${server}.stickers.create(${file}, ${name}, ${tags}); \n`;
  return code;
};
