
import Blockly from "blockly/core";

const blockName = "create_random_string";

const blockData = {
    "message0": "create random string with the length of %1",
    "args0": [
      {
        "type": "input_value", 
        "name": "TEXT",
        "check": null
        }
    ],
    "colour": "195",
    "output": "String",
    "tooltip": "if you are reading this you stink",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
  const text = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`S4D_makeid(${text})`, Blockly.JavaScript.ORDER_NONE ];
    return code;
}
