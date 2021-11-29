import * as Blockly from "blockly/core";

const blockName = "h_var_create";

const blockData = {
    "message0": "create variable %1 ",
    "args0": [
        {
            "type": "input_value",
            "name": "CONTENT",
            "check": [ "String" ]
        },
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
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
    return `var ${content.toLowerCase().replace(/'/g, '').replace(/[ ,.:;"`/|{}()!@#$%^&*]/g, '_')};`
};

