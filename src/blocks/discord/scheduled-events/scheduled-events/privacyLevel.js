
import Blockly from "blockly/core";
const blockName = "privacylevel"

const blockData = {
    "type": "privacylevel",
    "message0": "%1 Privacy level",
    "args0": [
    {
        "type": "field_dropdown",
        "name": "NAME",
        "options": [
        [
            "Public",
            "PUBLIC"
        ],
        [
            "Guild only",
            "GUILD_ONLY"
        ]
        ]
    }
    ],
    "inputsInline": true,
    "output": "PrvtLvl",
    "colour": "#ae81f7",
    "tooltip": "",
    "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};


Blockly.JavaScript['privacylevel'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    var code = '';
switch(dropdown_name) {
    case "PUBLIC": code = "'PUBLIC'"; break;
    case "GUILD_ONLY": code = "'GUILD_ONLY'"; break;
}

    return [code, Blockly.JavaScript.ORDER_NONE];
};