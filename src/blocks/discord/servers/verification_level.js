import * as Blockly from "blockly/core";

const blockName = "set_verification_level"

const blockData = {
    "type": "set_verification_level",
    "message0": "%1 verification level",
    "args0": [
    {
        "type": "field_dropdown",
        "name": "NAME",
        "options": [
        [
            "No",
            "NONE"
        ],
        [
            "Low",
            "LOW"
        ],
        [
            "Medium",
            "MEDIUM"
        ],
        [
            "High",
            "HIGH"
        ],
        [
            "Very high",
            "VERY_HIGH"
        ]
        ]
    }
    ],
    "inputsInline": true,
    "output": null,
    "colour": "#2AC395",
    "tooltip": "",
    "helpUrl": ""
}



Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};


Blockly.JavaScript['set_verification_level'] = function(block) {
    var dropdown = block.getFieldValue('NAME');
    var code = dropdown;


    return [code, Blockly.JavaScript.ORDER_NONE];
};