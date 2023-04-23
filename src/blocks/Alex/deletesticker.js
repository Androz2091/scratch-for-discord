import Blockly from "blockly/core";

const blockName = "delete_sticker";

const blockData = {
"message0": "In server %1 %2 Delete sticker %3",
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
      "name": "sticker",
      "check": "Sticker"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#02a836",
  "tooltip": "Deletes a sticker from the server.",
  "helpUrl": ""
}
  Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {

const sticker = Blockly.JavaScript.valueToCode(block, "sticker", Blockly.JavaScript.ORDER_ATOMIC);
const server = Blockly.JavaScript.valueToCode(block, "server", Blockly.JavaScript.ORDER_ATOMIC);
  
const code =  `${server}.stickers.delete(${sticker}); \n`;
  return code;
};
