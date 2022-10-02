import Blockly from "blockly/core";

const blockName = "jg_web_keynumber";

const blockData = {
    "message0": "Key number %1",
    "args0": [
        {
        "type": "input_value", 
        "name": "datafile",
        "check": "Number"
        }
    ],
    "colour": 230,
    "output": null,
    "tooltip": "Grabs the value of the key that is numbered.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
  const datafile = Blockly.JavaScript.valueToCode(block, "datafile", Blockly.JavaScript.ORDER_ATOMIC);
  const code = [`(Object.keys(JSONdataS4D)[${datafile} - 1])`, Blockly.JavaScript.ORDER_NONE ];
  return code
}
