import * as Blockly from "blockly/core";

const blockName = "default_notif_lvl"

const blockData = {
    "type": "default_notif_lvl",
    "message0": "%1 notification level",
    "args0": [
    {
        "type": "field_dropdown",
        "name": "NAME",
        "options": [
        [
            "All messages",
            "ALL_MESSAGES"
            
        ],
        [
            "Only mention",
            "ONLY_MENTIONS"
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


Blockly.JavaScript['default_notif_lvl'] = function(block) {
    var dropdown = block.getFieldValue('NAME');
    var code = dropdown;


    return [code, Blockly.JavaScript.ORDER_NONE];
};