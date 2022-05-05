//"output": "Boolean",
import Blockly from "blockly/core";

const blockName = "jg_text_booleanfrom";

const blockData = {
    "message0": "boolean from text %1",
    "args0": [
      {
        "type": "input_value", 
        "name": "TEXT",
        "check": null
        }
    ],
    "colour": "%{BKY_TEXTS_HUE}",
    "output": "Boolean",
    "tooltip": "Gets the text and checks if it equals \"true.\"",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
  const text = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`((${text}).toLowerCase() == 'true')`, Blockly.JavaScript.ORDER_NONE ];
    return code;
}