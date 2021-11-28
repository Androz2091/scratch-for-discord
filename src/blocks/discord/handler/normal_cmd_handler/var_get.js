import * as Blockly from "blockly/core";

const blockName = "h_var_get";

const blockData = {
    "message0": "get variable %1 ",
    "args0": [
        {
            "type": "input_value",
            "name": "CONTENT",
            "check": [ "String" ]
        },
    ],
    "colour": "#4C97FF",
    "output": "",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){

    const content = Blockly.JavaScript.valueToCode(block, "CONTENT", Blockly.JavaScript.ORDER_ATOMIC) || 'variable_not_defined'
    return `${content.toLowerCase().replace(/'/g, '').replace(/[ ,.:"`/|{}()!@#$%^&*-+=]/g, '_').replace(';', '')}`
};


