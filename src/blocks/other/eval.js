import Blockly from "blockly/core";

const blockName = "s4d_eval";

const blockData = {
  "message0": "evaluate code %1",
  "args0": [
    {
      "type": "input_value",
      "name": "EVAL"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#D14081",
  "tooltip": "Eval a line of code.",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
  const evals = Blockly.JavaScript.valueToCode(block, "EVAL", Blockly.JavaScript.ORDER_ATOMIC);
  const code = `eval(${evals}); \n`;
  return code;
};
