import Blockly from "blockly/core";

const blockName = "insultos";

const blockData = {
  "message0": "Texto %1  tiene insultos?",
  "args0": [
    {
      "type": "input_value",
      "check": "String",
      "name": "texto"
   
    }
  ],
  "colour": "#ff2600",
  "tooltip": "",
  "helpUrl": ""
}
Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
const insl = Blockly.JavaScript.valueToCode(block, "texto", Blockly.JavaScript.ORDER_ATOMIC);
    const code = ["String(bwdr).includes(String(${insl}))", Blockly.JavaScript.ORDER_NONE];
    return code;
};
