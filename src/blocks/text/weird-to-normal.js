import Blockly from "blockly/core";

const blockName = "weird-to-normal";

const blockData = {
    "message0": "weird char to normal %1",
    "args0": [
        {
            "type": "input_value",
            "name": "CHAR",
            "check": [ "String" ]
        },
    ],
    "output": "String",
    "colour": "#5ba58b",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const string = Blockly.JavaScript.valueToCode(block, "CHAR", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [ `weirdToNormalChars(${string})`, Blockly.JavaScript.ORDER_NONE ];
    return code;
};