import Blockly from "blockly/core";

const blockName = "test_regex";

const blockData = {
    "message0": "test regex %1 with %2",
    "args0": [
        {
            "type": "input_value",
            "name": "REGEX",
            "check": "regex"
        },
        {
            "type": "input_value",
            "name": "TEXT",
            "check": "String"
        },
    ],
    "output": "Boolean",
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
    const regex = Blockly.JavaScript.valueToCode(block, "REGEX", Blockly.JavaScript.ORDER_ATOMIC);
    const string = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
    let code = [`${regex}.test(${string})`, Blockly.JavaScript.ORDER_NONE ];
    return code
};
