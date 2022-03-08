import Blockly from "blockly/core";

const blockName = "is_not_number";

const blockData = {
    "message0": "%1 is not a number",
    "args0": [
    {
        "type": "input_value",
        "name": "STRING",
        "check": [ "Number", "String" ]
    }
    ],
    "output": "Boolean",
    "colour": "#D14081",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const code = Blockly.JavaScript.valueToCode(block, "STRING", Blockly.JavaScript.ORDER_ATOMIC);
    return [`isNaN(${code})`, Blockly.JavaScript.ORDER_NONE ];
};
