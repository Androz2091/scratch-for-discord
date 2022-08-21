import Blockly from "blockly/core";

const blockName = "sticker_exist";

const blockData = {
  "message0": "Sticker %1 exis?",
  "args0": [
    {
      "type": "input_value",
      "check": "Sticker",
      "name": "sticker"
   
    },

  ],
  "output": "Boolean",
  "colour": "#02a836",
  "tooltip": "Checks if a role exists on the server.",
  "helpUrl": ""
}
Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
const sticker = Blockly.JavaScript.valueToCode(block, "sticker", Blockly.JavaScript.ORDER_ATOMIC);

    const code = [`${sticker}!= null`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
