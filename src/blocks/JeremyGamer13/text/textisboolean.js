//"output": "Boolean",
import Blockly from "blockly/core";

const blockName = "jg_text_isboolean";

const blockData = {
    "message0": "text %1 is boolean?",
    "args0": [
      {
        "type": "input_value", 
        "name": "TEXT",
        "check": null
        }
    ],
    "colour": "%{BKY_TEXTS_HUE}",
    "output": "Boolean",
    "tooltip": "Checks if the input text is either \"true\" or \"false\" regardless of capitalizations.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
  const text = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`((${text}).toLowerCase() == 'true' || (${text}).toLowerCase() == 'false')`, Blockly.JavaScript.ORDER_NONE ];
    return code;
}