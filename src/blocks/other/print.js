import Blockly from "blockly/core";

const blockName = "s4d_print";

const blockData = {
  "message0": "print in console %1",
  "args0": [
    {
      "type": "input_value",
      "name": "PRINT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#D14081",
  "tooltip": "Print something in the console.",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
  const print = Blockly.JavaScript.valueToCode(block, "PRINT", Blockly.JavaScript.ORDER_ATOMIC);
  const code = `console.log(${print}); \n`;
  return code;
};
