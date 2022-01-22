import Blockly from "blockly/core";

const blockName = "str_to_num";

const blockData = {
  "message0": "convert %1 to a number",
  "args0": [
    {
      "type": "input_value",
      "check": "String",
      "name": "convert",
      "text": ""
    }
  ],
  "output": ["Number"],
  "colour": "#57a0d9",
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
const convert = Blockly.JavaScript.valueToCode(block, "convert", Blockly.JavaScript.ORDER_ATOMIC);
  const code =  [`parseInt(${convert})`, Blockly.JavaScript.ORDER_NONE ];
  return code;
};
