import Blockly from "blockly/core";

Blockly.Blocks["frost_await"] = {
  init: function () {
    this.jsonInit({
      "message0": "await %1",
      "args0": [
        {
          "type": "input_value",
          "name": "input_block"
        }
      ],
      "output": null,
      "inputsInline": true,
      "colour": '#D14081',
      "tooltip": "awaits code from block, search exclusive :O",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript["frost_await"] = function (block) {
  let input_block = Blockly.JavaScript.valueToCode(block, "input_block", Blockly.JavaScript.ORDER_ATOMIC)
  let code = `await ${input_block}`
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
}
