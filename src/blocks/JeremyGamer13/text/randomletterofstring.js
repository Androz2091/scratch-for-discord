// ("hello").charAt(Math.floor(Math.random() * ("hello").length))
import Blockly from "blockly/core";

const blockName = "jg_text_randomletter";

const blockData = {
    "message0": "get random letter from text %1",
    "args0": [
      {
        "type": "input_value", 
        "name": "TEXT",
        "check": null
        }
    ],
    "colour": "%{BKY_TEXTS_HUE}",
    "output": "String",
    "tooltip": "Gets a random letter from the text.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
  const text = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`(${text}).charAt(Math.floor(Math.random() * (${text}).length))`, Blockly.JavaScript.ORDER_NONE ];
    return code;
}