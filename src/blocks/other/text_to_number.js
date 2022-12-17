import Blockly from "blockly/core";

const blockName = "s4d_string_to_number";

const blockData = {
    "message0": "%{BKY_STRING_TO_NUMBER}",
    "args0": [
    {
        "type": "input_value",
        "name": "STRING",
        "check": [ "Number", "String" ]
    }
    ],
    "output": "Number",
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
    return [`Number(${code})`, Blockly.JavaScript.ORDER_NONE ];
};
