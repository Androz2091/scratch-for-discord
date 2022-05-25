import Blockly from "blockly/core";

const blockName = "entitytype"

const blockData = {
    "type": "entitytype",
    "message0": "%1 Entity type",
    "args0": [
    {
        "type": "field_dropdown",
        "name": "NAME",
        "options": [
        [
            "None",
            "NONE"
        ],
        [
            "Stage Instance",
            "STAGE_INSTANCE"
        ],
        [
            "Voice",
            "VOICE"
        ],        
        [
            "External",
            "EXTERNAL"
        ],
        
        ]
    }
    ],
    "inputsInline": true,
    "output": "entity",
    "colour": "#ae81f7",
    "tooltip": "",
    "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};


Blockly.JavaScript['entitytype'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    var code = '';
switch(dropdown_name) {
    case "NONE": code = "'NONE'"; break;
    case "VOICE": code = "'VOICE'"; break;
    case "EXTERNAL": code = "'EXTERNAL'"; break;
    case "STAGE_INSTANCE": code = "'STAGE_INSTANCE'"; break;
}

    return [code, Blockly.JavaScript.ORDER_NONE];
};