import * as Blockly from "blockly";


const blockName = "eu_name";

const blockData = {
    "message0": "%2 of %1 ",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "ROLE",
            "options": [
                [ "new emoji", "newEmoji" ],
                [ "old emoji", "oldEmoji" ],
            ]
        },
        {
            "type": "field_dropdown",
            "name": "INFO",
            "options": [
                [ "name", "name" ],
                [ "ID", "id" ],
                [ "animated", "animated" ],
                [ "author", "author" ],
                [ "available", "available" ],
                [ "deletable", "deletable" ],
                [ "deleted", "deleted" ],
                [ "url", "url" ],
            ]
        },
    ],
    "output": "String",
    "colour": "#5BA58C",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const info = block.getFieldValue("INFO");
    const emoji = block.getFieldValue("ROLE");
    const code = [`${emoji}.${info}`, Blockly.JavaScript.ORDER_NONE];
    return code;
};

