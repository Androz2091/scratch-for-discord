import * as Blockly from "blockly/core";

const blockName = "frost_env";
const blockData = {
  "message0": "process.env.%1",
  "colour": "#3333ff",
  "args0": [
    {
      "type": "input_value",
      "name": "VALUE",
      "check": "String"
    },
  ],
  "tooltip": null,
  "output": ["String", "Env"],
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  const value = Blockly.JavaScript.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_ATOMIC);
  const code = [`process.env[String(${value})]`, Blockly.JavaScript.ORDER_NONE];
  return code;
};
