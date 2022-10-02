import Blockly from "blockly/core";

const blockName = "s4d_starts_with";

const blockData = {
    "message0": "%{BKY_STARTS_WITH}",
    "args0": [
        {
            "type": "input_value",
            "name": "STRING",
            "check": [ "String" ]
        },
        {
            "type": "input_value",
            "name": "SUBSTRING",
            "check": [ "String" ]
        }
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
    const string = Blockly.JavaScript.valueToCode(block, "STRING", Blockly.JavaScript.ORDER_ATOMIC);
    const substring = Blockly.JavaScript.valueToCode(block, "SUBSTRING", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [ `(${string} || '').startsWith(${substring} || '')`, Blockly.JavaScript.ORDER_NONE ];
    return code;
};
